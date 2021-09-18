import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import useValidator from './UseValidator';
import { Link } from 'react-router-dom';
import { validations } from './Validation';
import '../Styles/Home.css'
const getDatafromLS = () => {
  const data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}
function SignUp() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [validator, showValidationMessage] = useValidator(validations);
  const [password, setPassword] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [data, setData] = useState(getDatafromLS());
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
     
      const dataSet = { name, email, password, contact, address };
     
      showValidationMessage(false);
      setData([...data, dataSet]);
      setName('');
      setEmail('');
      setPassword('');
      setContact('');
      setAddress('');
      // history.push("/login");
    }
    else {
      showValidationMessage(true);
    }

  }
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data])
  return (
    <div className="container">
      <form autoComplete="off">
        <div><h2 style={{ color: "white" }}>Register to Dashboard</h2></div>

        <div>

          <input className="input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" name="uname"  />
        <div style={{color:"#020902"}}>{validator.message("Name",name,'required')}</div>
        </div>

        <div>

          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" name="psw"  />
          <div style={{color:"#020902"}}>{validator.message("Email",email,'required|email')}</div>
        </div>
        <div>

          <input className="input" autocomplete="false" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw"  />
          <div style={{color:"#020902"}}>{validator.message("Password",password,'required|min:8|max:20')}</div>
        </div>
        <div>

          <input className="input" value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact" name="psw"  />
          <div style={{color:"#020902"}}>{validator.message("Contact",contact,'required|integer')}</div>
        </div>


        <div>
          <button className="button"  onClick={handleSubmit}>Register</button>
        </div>
        <p ><Link  to="/login" style={{textDecoration:"none",color:"white"}}from="/signup">If you are  registered ? Login here</Link></p>
      </form>
    </div>

  );
}
export default SignUp;