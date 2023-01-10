
import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  
  name:{type:String},
  lock:{type:Boolean},
  
  




});

export const Presentation=mongoose.model('Presentation',schema);