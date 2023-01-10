
import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  
  id_customer:{type:String},
  id_group:{type:String},
  role:{type:String},
  lock:{type:Boolean},




});

export const GroupDetail=mongoose.model('GroupDetail',schema);