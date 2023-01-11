import { Customer } from "../models/Customer.js";
import { Group } from "../models/Group.js";

import { GroupDetail } from "../models/GroupDetail.js";
export const getMembers=async (req,res)=>{
    try {
        
       
        const Members=await GroupDetail.find({});
        console.log(Members)
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
            
           
            id_customer:customer[0]._id,
            id_group:req.body.group_id,
            name:customer[0].name,
            role:req.body.role,
            lock:false

        });
        await member.save()
        res.status(200).json(member)}
        if(req.body.role=='Owner')
        {
            let group=await Group.find({})
            let cus=await Customer.findOne({_id:req.body.id_customer})

            const member=new GroupDetail({
            
           
                id_customer:req.body.id_customer,
                id_group:group[group.length-1]._id,
                name:cus.name,
                role:req.body.role,
                lock:false
    
            });
            await member.save()
            res.status(200).json(member)
        }

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