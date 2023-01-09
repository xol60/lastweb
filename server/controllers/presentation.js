import { Customer } from "../models/Customer.js";
export const addPresentation=async (req,res)=>{
    try {
        
        const customer=new Customer({
            
            name:req.body.presentationname,
            email:'req.body.email',
            username:'req.body.username',
            address:req.body.group_id,
            lock:false,
            password:'randomstring',
            avatar:'https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg.webp',

        });
        await customer.save()
        res.status(200).json(customer)
    
        
        
    
        
      } catch (err) {
        res.status(500).json({ error: err });
      }
}
export const getPresentation=async (req,res)=>{
    try {
        const Customers=await Customer.find();
        res.status(200).json(Customers);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}