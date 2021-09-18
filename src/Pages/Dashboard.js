import React ,{useEffect, useState} from 'react';
import '../Styles/Home.css';

import { Redirect ,useHistory} from 'react-router';
import {BrowserRouter as Router ,Link,Route } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import AddEditModule from './AddEditModule';
import { logout } from '../Action/Action';
import MUIDatatable from './MUIDatatable';
const getDatafromLS=()=>{
    const data = localStorage.getItem('data');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
function Dashboard(props)
{
  const history=useHistory();
    const loggedinuser=useSelector((state)=>state.loggedInuser);
    const dispatch=useDispatch();
    const dataset=useSelector((state)=>{return state.users});
    const handleLogout=()=>
    {
      dispatch(logout([],""));
      history.push("/login")
    }
    console.log(dataset);
    
   
    const [selectedData,setSelectedData]=useState();
  const [selectedIndex,setSelectedIndex]=useState();
   
  const header=["fname","lname","email","contact","city","pin"];
     const [showComp,setShowcomp]=useState(false);
     const [edit,setEdit]=useState(false);
     const handleSelectedRow=(index)=>
     {
       setSelectedData(dataset[index]);
      setSelectedIndex(index);

     } 
     console.log(selectedData);
     if(!loggedinuser.length>0)
     {
         alert('Login To Proceed')
         return <Redirect to="/login"/>
     }
    
    return (
        <>
        <div className="header">
        <div  style={{textAlign:"left",width:"50%"}}>
        <b>Welcome to Dashboard </b>
        </div >
        <div style={{textAlign:"right" ,width:"50%"}}> <b>Logged in as  {loggedinuser}</b> <button onClick={handleLogout}>Logout</button></div> 
        </div>
        
    {/* <div><Datatable selectedRow={handleSelectedRow}  data={dataset} /></div> */}
    
    <MUIDatatable data={dataset} header={header} selectedRow={handleSelectedRow}/>
    <div><AddEditModule seletedData={selectedData} selectedIndex={selectedIndex}  data={dataset}  /></div>
        </>
    )
}



export default Dashboard;