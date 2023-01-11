import { Presentation } from "../models/Presentation.js";
export const addPresentation=async (req,res)=>{
    try {
        
        const presentation=new Presentation({
            
            name:req.body.presentationname,
            id_customer:req.body.customer_id,
            id_group:req.body.group_id,
            lock:false,
            

        });
        await presentation.save()
        res.status(200).json(presentation)
    
        
        
    
        
      } catch (err) {
        res.status(500).json({ error: err });
      }
}
export const getPresentation=async (req,res)=>{
    try {
        const Presentations=await Presentation.find();
        console.log(Presentations)
        res.status(200).json(Presentations);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const deletePresentation=async (req,res)=>{
    try {
        
      console.log(req.body._id)
      const presentation=await Presentation.find({_id:req.body._id})
      const pre =  await Presentation.deleteOne({_id:req.body._id})
    
      res.status(200).json(presentation)
    
        
        
    
        
      } catch (err) {
        res.status(500).json({ error: err });
      }
  }