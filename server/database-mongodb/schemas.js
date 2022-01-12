
const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  id:{type:Number},
  name : {
      type: String,
  },
  phoneNumber:{
    type:Number
  },
  email : {
      type: String,
      required: true,
  },
  adress:{
    type:String
  },
  username: {
      type: String,
      required: true,
  },
  password : {
      type: String,
      required: true,
  },
  identityCard:{type:String , default:''},
  vip:{ type: Boolean, default: false },
  connected:{ type: Boolean, default: false },
  banned:{ type: Boolean, default: false }

});
userSchema.plugin(AutoIncrement, {id:'id_seq',inc_field: 'id'});
const pharmacySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true,
  },
  adress:{
    type:Number
  },
  phoneNumber:{
    type:Number
  },
  password : {
      type: String,
      required: true,
  },
  resetToken:String,
  expireToken:Date,
  location:{type :String },
  connected:{ type: Boolean, default: false },
  banned:{ type: Boolean, default: false }

});

const orderSchema = new mongoose.Schema({
 pharmacyId:{type:String },
 userId:{type:Number},
 medecineId:{type:Array},
 totalPrice:{type:Number},
 prescription:{type:String,default:''},
 response:{type:String,default:''},
 confirmation:{type:Boolean,default:false}
 
});



const medecineSchema = new mongoose.Schema({
  name: String,
  description: String,
  category:String,
  img:String,
  price:Number,
  prescription:{type:Boolean,default:false}
});

const paraSchema = new mongoose.Schema({
  name: String,
  description: String,
  category:String,
  img:String,
  price:Number,
  pharmacyId:String
});

const reminderSchema = new mongoose.Schema({
  userId: String,
  timing: String,
  guide:Array  
});
const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  username:String
});
const admin = mongoose.model('admin', adminSchema);
const user = mongoose.model('user', userSchema);
const pharmacy = mongoose.model('pharmacy', pharmacySchema);
const order = mongoose.model('order', orderSchema);
const medecine = mongoose.model('medecine', medecineSchema);
const para = mongoose.model('para', paraSchema);
const reminder = mongoose.model('reminder', reminderSchema);

module.exports ={
  user,
  pharmacy,
  para,
  medecine,
  order,
  reminder,
  admin
} 