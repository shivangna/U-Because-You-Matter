import React, { Component } from "react";
import "./login.css";



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
            <div className="main">
              <p className="sign" align="center">Sign in</p>
              <form className="form1">
                <input className="un " type="text" align="center" placeholder="Username" />
                <input className="pass" type="password" align="center" placeholder="Password" />
                <a className="submit" align="center">Sign in</a>
                <p className="forgot" align="center"><a href="#">Forgot Password?</a></p><a href="#">
                </a></form></div><a href="#">
            </a> 
    
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
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
  



