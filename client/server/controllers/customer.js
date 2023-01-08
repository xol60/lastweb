
import { Customer } from "../models/Customer.js";
import { check } from "../util/mongoose.js";
import nodemailer from 'nodemailer'
export const addCus=async (req,res)=>{
    try {
        Customer.find({})
        .limit()
        .skip()
        .lean()
        .then(datas=>{
            if(check(datas,req.body.username,req.body.email))
            {
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var string_length = 6;
                var randomstring = '';
              
                for (var i=0; i<string_length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum,rnum+1);
                }
                let transporter=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'leminhduc050501@gmail.com',
                        pass:'cyggtiusfzavsmxa'
                    },
                    port: 465,
                    host: 'smtp.gmail.com'
                })
        
                let mailOptions={
                    from:'leminhduc050501@gmail.com',
                    to:req.body.email,
                    subject:'Web 2',
                    text:'Your password is '+ randomstring
                }
                transporter.sendMail(mailOptions,function(err,data){
                    if(err){
                        console.log('error occurs:',err)
                        res.send({"name":"Email bạn điền không tồn tại"});
                        

                        
        
                    }
                    else{
                        console.log('email sent')
                        const customer=new Customer({
                            name:req.body.name,
                            email:req.body.email,
                            username:req.body.username,
                            address:'',
                            lock:false,
                            password:randomstring,
                            avatar:'https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg.webp',
                
                        });
                        customer.save()
                            .then(()=>{
                            
                            res.send({"name":"Thành công.Vui lòng kiểm tra Email để nhận mật khẩu"});
                            
                            })
                        .catch(error=>{

                         })
                        
                    }
                })
               

            }
            else{
                res.send({"name":"UserName hoặc Email đã được sử dụng"});
                
            }
           
            

        })
       
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const getCus=async (req,res)=>{
    try {
        const Customers=await Customer.find();
        res.status(200).json(Customers);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
}