import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  
  
  lock:{type:Boolean},
  
  name:{type:String},
  id_customer:{type:String},
  




});

export const Presentation=mongoose.model('Presentation',schema);