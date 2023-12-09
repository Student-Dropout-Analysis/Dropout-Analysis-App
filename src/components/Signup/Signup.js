import React from "react";
import "./Signup.css"
import { Link as LinkR } from "react-router-dom";
function Signup(){
    const [values, setValues] = React.useState({
 
      password: "",
      email: "",
    });
    
    const [submitted, setSubmitted] = React.useState(false);
    const [valid, setValid] = React.useState(false);
  
    
    const handlePasswordChange = (event)=>{
      setValues({...values, password: event.target.value })
    }
    
    const handleEmailInputChange = (event)=>{
      setValues({...values, email: event.target.value })
    }
    
    const handleSubmit = (event) =>{
      event.preventDefault();
      if(values.fullName && values.gender && values.password && values.email ){
        setValid(true);
      }
      setSubmitted(true);
    }
    
    return(
     <div className="form-container">
      <h1 className="signuptext">Signup</h1>
        {submitted && valid ? <div className="success-message">Success! Thank you for subscribing</div>: ""}
        <form className="register-form" onSubmit={handleSubmit}>
         <input 
            id="email"
            type="text"
            name="email"
            className="form-field"
            placeholder="Email"
            value={values.email}
            onChange={handleEmailInputChange}
            onSubmit={handleSubmit}
            />
            {submitted && !values.email ? <span id = "email-error">Please Enter Email Address</span>: ""}
            <input 
            id="password"
            type="text"
            name="password"
            className="form-field"
            placeholder="password"
            value={values.password}
            onChange={handlePasswordChange}
            onSubmit={handleSubmit}
            />
          {submitted && !values.password ? <span id = "password-error">Please Enter Your password</span>: ""}
          <div className="signuplink">
                <LinkR to="/Login" className="signuplinktext">Already Have an Account</LinkR>
            </div>
            <button className ="form-field" type= "submit">
              SUBMIT
            </button>
        </form>
     </div>
    );
  }
  
  
  export default Signup;