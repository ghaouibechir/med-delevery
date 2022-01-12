const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Pharmacy = require("../models/pharmacy");
const config = require("../config/database");
const { pharmacy } = require("../database-mongodb/schemas");
const passport = require("passport");
const crypto = require("crypto");
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')
//const {SENDGRID_API,EMAIL} = require('../config/keys')



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


router.post("/resetpassword",(req,res)=>{

  var data = req.body;
  let token = require("crypto").randomBytes(64).toString("hex")
  let smpTransport = nodemailer.createTransport({
    service : 'Gmail',
    port: 465,
    auth :{
      user: 'all.in.one.customer.services@gmail.com',
      pass : 'Azerty123+'
    }
  });
  let mailOption ={
    from : 'mo.med.services@gmail.com',
    to : data.email,
    subject : 'Reset password instructions',
    html:`      
    <h3>Click on the link below to reset your password </h3>
    <p><a href="http://localhost:8080/reset/${token}">link</a></p>
    <p>Your password won't change until you access the link above and create a new one.</p>`
  };
  smpTransport.sendMail(mailOption,(err, response) =>{
    if(err){
      res.send('errorrrrr')
    }else{
      res.send('success')
    }
  })
  smpTransport.close()

 
   
  })
  router.post('/ChangePassword', (req, res) =>{
    
    console.log(req.params)




  })

// router.get(
//   "/profile",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => {
//     res.json({ pharmacy: req.pharmacy });
//   }
// );

router.get("/profile/:id", (req, res) => {
  Pharmacy.getPharmacyById(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.put("/update/:id", (req, res) => {
  Pharmacy.getPharmacyByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
