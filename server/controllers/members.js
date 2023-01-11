import { Customer } from "../models/Customer.js";

import { GroupDetail } from "../models/GroupDetail.js";
export const getMembers=async (req,res)=>{
    try {
        console.log(req.body)
       
        const Members=await GroupDetail.find({id_group:req.body.id});
        res.status(200).json(Members);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const addMember=async(req,res)=>{
    try{
        const customer=await Customer.find({email:req.body.email})
        if(customer.length!=0){
        const member=new GroupDetail({
            
           
            id_customer:'',
            id_group:req.body.group_id,
            name:'Trần Văn A',
            role:req.body.role,
            lock:false

        });
        await member.save()
        res.status(200).json(member)}
        else
            res.status(500).json([]);

    }catch(err){
        res.status(500).json({ error: err });
    }
}
export const deleteMember=async (req,res)=>{
    try {
        
      console.log(req.body._id)
      const member=await GroupDetail.find({_id:req.body._id})
      const mem =  await GroupDetail.deleteOne({_id:req.body._id})
      console.log(member)
      res.status(200).json(member)
    
        
        
    
        
      } catch (err) {
        res.status(500).json({ error: err });
      }
  }