const express = require("express");
const { order } = require("../database-mongodb/schemas");
const router = express.Router();
const Orders = require("../models/pharmacy");

// const { order } = require("../database-mongodb/schemas");

router.get("/comingOrders", (req, res) => {
  order.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
module.exports = router;
