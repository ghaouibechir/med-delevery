const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Pharmacy = require("../models/pharmacy");
const config = require("../config/database");
const { pharmacy } = require("../database-mongodb/schemas");
const passport = require("passport");

router.post("/register", (req, res, next) => {
  let newPharmacy = new pharmacy({
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
  });

  Pharmacy.addPharmacy(newPharmacy, (err, data) => {
    if (err) {
      res.json({ success: false, msg: err.message });
    } else {
      res.json({ success: true, msg: "Pharmacie registered" });
    }
  });
});

router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  Pharmacy.getPharmacyByUsername(username, (err, pharmacy) => {
    if (err) throw err;
    if (!pharmacy) {
      return res.json({ success: false, msg: "Pharmacy Not found" });
    }
    Pharmacy.comparePassword(password, pharmacy.password, (err, isMatch) => {
      if (isMatch) {
        const token = jwt.sign(pharmacy.toJSON(), config.secret, {
          expiresIn: 604800,
        });
        res.json({
          success: true,
          token: token,
          pharmacy: {
            id: pharmacy._id,
            name: pharmacy.name,
            username: pharmacy.username,
            email: pharmacy.email,
          },
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ pharmacy: req.pharmacy });
  }
);
module.exports = router;
