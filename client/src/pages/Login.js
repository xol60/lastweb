import React,{useState} from 'react'
import axios from'axios'
import Alert from'react-bootstrap/Alert'
import { useSelector, useDispatch } from 'react-redux';
import {loginCustomer} from '../redux/actions'
import {customerState$} from '../redux/selectors'
import { Navigate } from 'react-router-dom'       s
import './styles.css'
function Login(){
    const[data,setData]=useState({
        username:"",
        password:""
    })
    const dispatch=useDispatch()
    const [alert,setAlert]=useState(null);
    const {customer}=useSelector(customerState$)
    const AlertMessage=({info})=>{
        return info===null?null:(
            <Alert variant={info.type}>{info.message}</Alert>
        )
    }
    
    const handleSubmit=React.useCallback(() => {
        console.log(data);
        dispatch(loginCustomer.loginCustomerRequest(data));
        console.log(customer)
      }, [dispatch,data]);
    return(
        <div className="app">
            <Navigate to="/404" /> 
        
        <div className="auth-form-container">
        <h2>Register</h2>
    <form onSubmit={(e)=>handleSubmit(e)} className="register-form" >
        <AlertMessage info={alert}></AlertMessage>
        <label htmlFor="name">UserName</label>
        <input onChange={(e)=>setData({...data,username:e.target.value})}  name="username" id="username" placeholder="Username" />
        <label htmlFor="password">FullName</label>
        <input onChange={(e)=>setData({...data,passowrd:e.target.value})}  type="password" placeholder="Password" id="password" name="password" />
        <label ></label>
        <label ></label>
        <button onClick="" type="submit">Register</button>
    </form>
    <button className="link-btn" >Don't have account? Register</button>
</div>
</div>



        
       
    )
}
export default Login