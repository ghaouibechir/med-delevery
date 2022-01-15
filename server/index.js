const { event, user, medecine } = require("./database-mongodb/schemas");

var express = require("express");
const client = require('twilio')('ACed2feeec7ef469a1086ff226bb48ec63', '431afc206c1c8b699bc9bf9162e5742b');
var app = express();
const passport = require("passport");
var port = process.env.PORT || 5000;
var cors = require("cors");
const users = require("./routes/users");
const myUsers = require("./routes/myUser");



var num1 = 0
var num2 = 0
var num3 = 0
var num4 = 0
const pharmacy = require("./routes/pharmacy");

require("./config/passport")(passport);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/user", myUsers);


app.post("/" , (req , res) => {
  console.log(req.body.number);
  sendTextMessage(req.body.number)
  res.send({num1 : num1 , num2 : num2 , num3 : num3 , num4 : num4})
})

app.get("/resetPassword" , (req , res) => {
  resetPassword()
  res.send({num1 : num1 , num2 : num2 , num3 : num3 , num4 : num4})
})


app.get("/medecine", async (req, res) => {
  try {
    let foundMedcine = await medecine.find({});
    res.send(foundMedcine);
  } catch (error) {
    res.send(error);
  }
});

app.use("/users", users);
app.use("/pharmacies", pharmacy);

app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on  ${port}`);
});


function sendTextMessage(num) {

  var firstNum = Math.floor(Math.random() * 10)
  num1 = firstNum
  var secondNum = Math.floor(Math.random() * 10)
  num2 = secondNum
  var thirdNum = Math.floor(Math.random() * 10)
  num3 = thirdNum
  var fourthNum = Math.floor(Math.random() * 10)
  num4 = fourthNum
  client.messages.create({
    body: 'your verification code is ' + firstNum + '' + secondNum + '' + thirdNum + '' + fourthNum,
    to: '+216'+num,
    from: '+18507532868'
 }).then(message => console.log(message))
   .catch(error => console.log(error))
}

function resetPassword() {
  var firstNum = Math.floor(Math.random() * 10)
  num1 = firstNum
  var secondNum = Math.floor(Math.random() * 10)
  num2 = secondNum
  var thirdNum = Math.floor(Math.random() * 10)
  num3 = thirdNum
  var fourthNum = Math.floor(Math.random() * 10)
  num4 = fourthNum
  client.messages.create({
    body: 'your reset password code is ' + firstNum + '' + secondNum + '' + thirdNum + '' + fourthNum,
    to: '+21658769219',
    from: '+18507532868'
 }).then(message => console.log(message))
   .catch(error => console.log(error))
}