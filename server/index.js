const { event, user, medecine, order } = require("./database-mongodb/schemas");

var express = require("express");
var app = express();
const passport = require("passport");
var port = process.env.PORT || 5000;
var cors = require("cors");
const users = require("./routes/users");
const pharmacy = require("./routes/pharmacy");

require("./config/passport")(passport);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
/*======================={Get the all  medecines in side the home page}=========================[Navbar]================================ */

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
  
  
   
  var x= await order.findOne({ userId: req.params.id })
  
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

app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on  ${port}`);
});
