import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import useValidator from './UseValidator';
import {validations} from './Validation';
import { addUser, deleteUsr, updateUsr } from '../Action/Action';
import TextField from '@material-ui/core/TextField';
const initialstate={
    fname:"",
    lname:"",
    email:"",
    contact:"",
    city:"",
    pin:""
}
function AddEditModule (props)
{
    const dispatch=useDispatch();
    const loggedinuser=useSelector((state)=>state.users);
    const [validator,showValidationMessage]=useValidator({...validations});
   const [editabel,setEditable]=useState(true);
   const [show,setShow]=useState(false);
   const [addusr,setAddusr]=useState(false);
const [data,setData]=useState(props.seletedData);
useEffect(()=>
{   
    setData(props.seletedData);
    
},[props.seletedData]
)
console.log(props.seletedData);
    const handleChange=(e)=>
    {
        setData({...data,
            [e.target.name]:e.target.value
        })
        
    }
    const handlesubmit=async(e)=>
    {
       // let predata=loggedinuser;
       e.preventDefault();
      if(validator.allValid())
      {
       
        await dispatch(addUser(data));
        setData(initialstate);
        setEditable(false);
        setShow(false);
        showValidationMessage(false);
      }
      else{
        showValidationMessage(true);
      }
       
      

    }
    
    const handleAdd=(e)=>
    {
        e.preventDefault();
        setAddusr(true);
        setShow(true);
      setEditable(false);
      setData(initialstate);
    }
    const handleDelete=(e)=>
    {e.preventDefault();
        dispatch(deleteUsr(props.selectedIndex));
        setData(initialstate);
    }
    const handleEdit=(e)=>
    { e.preventDefault();
        setShow(true);
        setData(props.data[0])
        setAddusr(false);
        setEditable(false);
    }
    const handleupdate=(e)=>
    {
        e.preventDefault();
       if(validator.allValid())
       {
        setShow(false);
        setData(initialstate);
        dispatch(updateUsr(data,props.selectedIndex===undefined?0:props.selectedIndex));
        showValidationMessage(false);
       }
       else{
           showValidationMessage(true);
       }
    }
    const handleBack=(e)=>
    {
        e.preventDefault();
        setEditable(false);
        setShow(false);
        setData(initialstate);
    }
    return (
        <>

        
       <div>
       <form autoComplete="off" >
       <div style={{textAlign:"left"}}>
        <span>
          
          <button  onClick={handleAdd}> <b>Add</b></button>
         
          
        </span>
        <span>
          <button   onClick={handleEdit}><b>Edit</b></button>
        </span>
        
      </div>
    <div style={{marginTop:"20px",marginBottom:"20px"}}>
    {show?
    <table style={{margni:"auto",textAlign:"justify"}}>
    <tr className="row">
        <td>
            First Name
        </td>
        <td>
            <input type="text" name="fname" value={data.fname} disabled={editabel}onChange={handleChange}/>
            <div style={{color:"red"}}>{validator.message("First Name",data.fname,'required|alpha')}</div>
        </td>
    </tr >
    <tr className="row">
        <td>
            Last Name
        </td>
        <td>
            <input type="text" name="lname" value={data.lname} disabled={editabel}onChange={handleChange}/>
            <div style={{color:"red"}}>{validator.message("Last Name",data.lname,'required|alpha')}</div>
        </td>
    </tr>
    <tr className="row">
        <td>
            Email
        </td>
        <td>
            <input type="text" name="email" value={data.email} disabled={editabel}onChange={handleChange}/>
            <div style={{color:"red"}}>{validator.message("Email",data.email,'required|email')}</div>
        </td>
    </tr>
    <tr className="row">
        <td>
            Contact
        </td>
        <td>
            <input type="text" name="contact" value={data.contact}disabled={editabel} onChange={handleChange}/>
            <div style={{color:"red"}}>{validator.message("Contact",data.contact,'required|phone')}</div>
        </td>
    </tr>
    <tr className="row">
        <td>
            City
        </td>
        <td>
            <input type="text" name="city" value={data.city}disabled={editabel} onChange={handleChange}/>
            <div style={{color:"red"}}>{validator.message("City",data.city,'required|alpha_num_space')}</div>
        </td>
    </tr>
    <tr className="row">
        <td>
            Pin
        </td>
        <td>
            <input type="text" name="pin" value={data.pin}disabled={editabel} onChange={handleChange}/>
            <div style={{color:"red"}}>{validator.message("Pin",data.pin,'required|integer|min:6|max:6')}</div>
        </td>
    </tr>
<tr> <td>
{ addusr?<button onClick={handlesubmit}>Add</button>:<button onClick={handleupdate}>Update</button>}
   {addusr? null:<button onClick={handleDelete}>Delete</button>}
    <button onClick={handleBack}>Back</button>
</td></tr>
</table>:null}
    </div>


    </form>
       </div>
  

        </>
    );
    
}
export default AddEditModule;