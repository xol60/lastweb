
import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  

  type:{type:String},
  
  id_presentation:{type:String},
  detail:{type:[String]},




});

export const Slider=mongoose.model('Slider',schema);