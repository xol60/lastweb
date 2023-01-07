import React,{useState} from 'react'
import axios from'axios'
import Alert from'react-bootstrap/Alert'
import './styles.css'
function Register(){
    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[userName,setUserName]=useState("")
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
            email:email,
            name:name,
        }
        if(data.username&&data.email&&data.name){
            axios.post("http://localhost:5000/customers",data).then((res)=>{
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
        <label htmlFor="email">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password">FullName</label>
        <input onChange={(e)=>setName(e.target.value)}  type="name" placeholder="FullName" id="name" name="name" />
        <label ></label>
        <label ></label>
        <button type="submit">Register</button>
    </form>
    <button className="link-btn" >Already have an account? Login here.</button>
</div>
</div>



        
       
    )
}
export default Register