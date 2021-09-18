import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { loggedinuser } from '../Action/Action';

import  '../Styles/Home.css'
const getDatafromLS=()=>{
    const data = localStorage.getItem('data');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
function Login (){
    const dispatch=useDispatch();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [data,setData]=useState(getDatafromLS());
    const history=useHistory();
    console.log(data);
const handleSubmit=(e)=>
{
    e.preventDefault();
    
        if(data.find(users=>users.email===email && users.password===password))
        {
            dispatch(loggedinuser(email));
            history.push("/dashboard");
            
        }
        else
        {
            alert('No user with given credential ! Please Check email and password again')
        }
       
    
    
}
    return (
<div className="container">
    <div><h2 style={{color:"white"}}>Login to Dashboard</h2></div>
<div>

    <input className="input" autoComplete="off"  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Username" name="uname" required/>
</div>

    <div>
    
    <input className="input" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required/>
    </div>

    
    <div>
    <button className="button" type="submit" onClick={handleSubmit}>Login</button>
    </div>
    <p ><Link  to="/signup" style={{textDecoration:"none",color:"white"}}from="/login">If you are not registered ? Register here</Link></p>
  
</div>

    );
}
export default Login;