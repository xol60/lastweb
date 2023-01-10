
import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  

  lock:{type:Boolean},
  
  name:{type:String},
  title:{type:String},




});

export const Group=mongoose.model('Group',schema);