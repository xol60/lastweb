import React,{useState} from 'react'
import axios from'axios'
import Alert from'react-bootstrap/Alert'
import './styles.css'
function Register(){
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const [alert,setAlert]=useState(null);

    const AlertMessage=({info})=>{
        return info===null?null:(
            <Alert variant={info.type}>{info.message}</Alert>
        )
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
       

        const data={
            username:userName,
            password:password,
        }
        console.log(userName);
        if(data.username&&data.password){
            axios.post("http://localhost:5003/members/login",data).then((res)=>{
                setAlert({type:'success',message:res.data.name})
                console.log(res.data.Customers)
            });
            
        }
        else{
            alert("can dien day du thong tin")
        }
       

    }
    return(
        <div className="app">

        
        <div className="auth-form-container">
        <h2>Register</h2>
    <form onSubmit={(e)=>handleSubmit(e)} className="register-form" >
        <AlertMessage info={alert}></AlertMessage>
        <label htmlFor="name">UserName</label>
        <input onChange={(e)=>setUserName(e.target.value)}  name="username" id="username" placeholder="UserName" />
        <label htmlFor="email">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <label ></label>
        <label ></label>
        <button type="submit">Login</button>
    </form>
    <button className="link-btn" >Don't have account? Register</button>
</div>
</div>



        
       
    )
}
export default Register