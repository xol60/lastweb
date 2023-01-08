
import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  
  address:{type:String},
  avatar:{type:String},
  email:{type:String},
  lock:{type:Boolean},
  
  name:{type:String},
  password:{type:String},
  username:{type:String}
  




});

export const Customer=mongoose.model('Customer',schema);