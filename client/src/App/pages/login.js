import React, { Component } from "react";
import "./login.css";
import LoginSteps from "./login-steps.js";
import { Link } from 'react-router-dom';

class Login extends Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);

    };

    render () {
        return (
            <div>
                <LoginSteps/>
            <div className="main">
          
              <p className="sign" align="center">Log in to your account</p>
              <form className="form1">
                <input className="un " type="text" align="center" placeholder="Username" />
                <input className="pass" type="password" align="center" placeholder="Password" />
                </form>
                <Link to = "/app" >
                <button className="submit" align="center"> LOG IN</button>
                </Link>
                <p className="forgot" align="center"><a href="#">Forgot Password?</a></p><a href="#">
                </a></div><a href="#">
            </a> 
    
   
            </div>
    )};
}
    
    // render() {
    //     return(
    //     <div className="wrapper">
	//         <div className="container">
	// 	        <h1>Welcome</h1>
	// 	        <form className="form">
    //                 <input type="text" placeholder="Username"/>
    //                 <input type="password" placeholder="Password"/>
    //                 <button type="submit" id="login-button">Login</button>
	// 	        </form>
	//         </div>
    //     <ul class="bg-bubbles">
    //     </ul>
    // </div>
    //     )
    // };

  export default Login;
  



