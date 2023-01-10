import React,{useState} from 'react'
import axios from'axios'
import Alert from'react-bootstrap/Alert'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {loginCustomer} from '../redux/actions'
import {customerState$} from '../redux/selectors'
import './styles.css'
function Login(){
    const[data,setData]=useState({
        username:"",
        password:""
    })
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const [alert,setAlert]=useState(null);
    const {info}=useSelector(customerState$)
    const AlertMessage=({info})=>{
        return info===null?null:(
            <Alert variant={info.type}>{info.message}</Alert>
        )
    }
    
    const handleSubmit=React.useEffect(() => {
        dispatch(loginCustomer.loginCustomerRequest(data));
        console.log(info)
        if(info.id)
        {
                navigate('/groups');
        }
      }, [dispatch,data]);
    return(
        <div className="app">

        
        <div className="auth-form-container">
        <h2>Login</h2>
    <form onSubmit={(e)=>handleSubmit(e)} className="register-form" >
        <AlertMessage info={alert}></AlertMessage>
        <label htmlFor="name">UserName</label>
        <input onChange={(e)=>setData({...data,username:e.target.value})}  name="username" id="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input onChange={(e)=>setData({...data,password:e.target.value})}  type="password" placeholder="Password" id="password" name="password" />
        <label ></label>
        <label ></label>
        <button  type="submit">Login</button>
    </form>
    <button className="link-btn" >Don't have account? Register</button>
</div>
</div>



        
       
    )
}
export default Login