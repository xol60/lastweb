import { Customer } from "../models/Customer.js";
export const getMembers=async (req,res)=>{
    try {
        
        const Customers=await Customer.find({email:'req.body.email'});
        res.status(200).json(Customers);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const addMember=async(req,res)=>{
    try{
        const customer=new Customer({
            
            name:req.body.email,
            email:'req.body.email',
            username:'req.body.username',
            address:'',
            lock:false,
            password:'randomstring',
            avatar:'https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg.webp',

        });
        await customer.save()
        res.status(200).json(customer)

    }catch(err){
        res.status(500).json({ error: err });
    }
}