import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import customers from './routers/customers.js'
import mongoose from 'mongoose';
import groups from './routers/groups.js'
import members from './routers/members.js'
import presentations from './routers/presentations.js'
import http from 'http'
import {Server} from 'socket.io'
dotenv.config();
const URI=process.env.MONGO_URL;

const app=express();
const PORT=process.env.port||5003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}));
app.use(cors());

app.use('/customers',customers)
app.use('/groups',groups)
app.use('/members',members)
app.use('/presentations',presentations)
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
  
  server.listen(3001, () => {
    console.log("SERVER RUNNING");
  });
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

