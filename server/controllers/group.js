
import { Group } from "../models/Group.js";
import { GroupDetail } from "../models/GroupDetail.js";
import { Presentation } from "../models/Presentation.js";
export const addGroup=async (req,res)=>{
    try {
        
        const group=new Group({
            
            name:req.body.groupname,
            title:req.body.title

        });
        await group.save()
        
        res.status(200).json(group)
    
        const member=new GroupDetail({
          id_customer:'',
          
          name:'Trần Văn B',
          id_group:group._id,
          role:'Owner',
          lock:false,

        })
        await member.save()
        
    
        
      } catch (err) {
        res.status(500).json({ error: err });
      }
}
export const deleteGroup=async (req,res)=>{
  try {
      
    console.log(req.body._id)
    const group=await Group.find({_id:req.body._id})
    const g =  await Group.deleteOne({_id:req.body._id})
    const h=await GroupDetail.deleteMany({id_group:req.body._id});
    const i=await Presentation.deleteMany({id_group:req.body._id});
   
    res.status(200).json(group)
  
      
      
  
      
    } catch (err) {
      res.status(500).json({ error: err });
    }
}
export const getGroups=async (req,res)=>{
  try {
      const Groups=await Group.find();
      res.status(200).json(Groups);
      
  } catch (err) {
      res.status(500).json({error:err});
  }
}
