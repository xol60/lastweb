import mongoose from "mongoose";
const schema = new mongoose.Schema


({

  
  
  lock:{type:Boolean},
  id_group:{type:String},
  name:{type:String},
  id_customer:{type:String},
  
  




});

export const Presentation=mongoose.model('Presentation',schema);