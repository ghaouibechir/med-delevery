const { event, user, medecine, order } = require("./database-mongodb/schemas");

var express = require("express");
const client = require('twilio')('ACed2feeec7ef469a1086ff226bb48ec63', '431afc206c1c8b699bc9bf9162e5742b');
var app = express();
const passport = require("passport");
var port = process.env.PORT || 5000;
var cors = require("cors");
const users = require("./routes/users");



var num1 = 0
var num2 = 0
var num3 = 0
var num4 = 0
const pharmacy = require("./routes/pharmacy");
const orders = require("./routes/orders");

require("./config/passport")(passport);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
/*======================={Get the all  medecines in side the home page}=========================[Navbar]================================ */


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
/*==================================={Delete The orders afther the confirm}=======================[Cart]=============================== */

app.put("/ListOrderById/:id", async (req, res) => {
  console.log("fffffffffffff", (req.params.id))
  let MedList = await order.findOne({ userId: req.params.id });
  console.log("00000000", MedList.medecineId);
  order.updateOne({ userId: req.params.id }, { medecineId: "[]" }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })

})

/*====================================={Add the medcine to the cart}=====================[Navbar]============================== */

app.put("/OrderId/:id", async (req, res) => {
  // console.log("aaaaaaaaaaa",req.body)
  //console.log("tttttttt",(req.params.id))
  const doc = await order.findOne({ userId: req.params.id });

  var t=false
  
    for(var i = 1; i < doc.medecineId.length;i++){
    if(doc.medecineId[i].id===req.body.id ){
      doc.medecineId[i].quatity++
      t=true
    }
  }
  
  if(t===false){
    doc.medecineId.push({ id: req.body.id, quatity: 1 })
  }

  
  // console.log(doc.medecineId);
  order.updateOne({ userId: req.params.id }, { medecineId: doc.medecineId }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
  //  order.medecines.create(red.body.id);
  // order.findByIdAndUpdate(
  //      req.params.id, 
  //    { medecineId : ['1254','554'] } 
  //   //  { $push: {medecineId : }}

  // ,(err,data)=>{
  //   if(err){
  //     res.send(err)
  //   }else{
  //     res.send(data)
  //   }
  // })

})
/*======================={Get the medecine inside the cart by userId}================================================== */

app.get("/medecine/cart/:id", async (req, res) => {
  
  console.log(req.params.id);
   
  var x= await order.findOne({ userId: req.params.id })
  console.log(x);
  var array=[]
  for(var i=0; i<x.medecineId.length; i++){
    array.push(x.medecineId[i].id)
    
  }
 var medecin = await medecine.find({ '_id': { $in: array } });
 res.send(medecin)
  //  order.updateOne({ userId: req.params.id }, { medecineId: doc.medecineId }, (err, data) => {
  //   if (err) {
  //     res.send(err)
  //   } else {
  //     res.send(data)
  //   }
  // })
    

});

app.use("/users", users);
app.use("/pharmacies", pharmacy);
app.use("/orders", orders);

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