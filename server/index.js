import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import customers from './routers/customers.js'
import mongoose from 'mongoose';
import groups from './routers/groups.js'
import members from './routers/members.js'
import presentations from './routers/presentations.js'

const URI='mongodb://localhost:27017/PTUDW';

const app=express();
const PORT=process.env.port||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}));
app.use(cors());

app.use('/customers',customers)
app.use('/groups',groups)
app.use('/members',members)
app.use('/presentations',presentations)

mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
        console.log('Connected to DB')

    })
    .catch((err)=>{
        console.log('err',err);
    })

