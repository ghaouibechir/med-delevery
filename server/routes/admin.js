const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const config = require("../config/database");
const { admin } = require("../database-mongodb/schemas");
const passport = require("passport");

router.post("/register", (req, res, next) => {
  let newAdmin = new admin({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  Admin.addAdmin(newAdmin, (err, data) => {
    if (err) {
      res.json({ success: false, msg: err.message });
    } else {
      res.json({ success: true, msg: "admin registered" });
    }
  });
});

router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  Admin.getAdminByUsername(username, (err, admin) => {
    if (err) throw err;
    if (!admin) {
      return res.json({ success: false, msg: "admin Not found" });
    }
    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if (isMatch) {
        const token = jwt.sign(admin.toJSON(), config.secret, {
          expiresIn: 604800,
        });
        res.json({
          success: true,
          token: token,
          admin: {
            id: admin._id,

            username: admin.username,
            email: admin.email,
          },
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});

module.exports = router;
