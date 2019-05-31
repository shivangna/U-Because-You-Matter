import React, { Component } from "react";
import "./login-steps.css";
        

class LoginSteps extends Component { 
    render () {       
      return (
          <body>
        <div className="progress">
          <div className="progress_inner">
            <div className="progress_inner__step">
              <label htmlFor="step-1">Input your Journal</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-2">Mood Analyzer</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-3">Conduct Daily Challenges</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-4">View Visuals</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-5">Personalize Your Space</label>
            </div>
            <input defaultChecked="checked" id="step-1" name="step" type="radio" />
            <input id="step-2" name="step" type="radio" />
            <input id="step-3" name="step" type="radio" />
            <input id="step-4" name="step" type="radio" />
            <input id="step-5" name="step" type="radio" />
            <div className="progress_inner__bar" />
            <div className="progress_inner__bar--set" />
            <div className="progress_inner__tabs">
              <div className="tab tab-0">
                <h2>Input your Journal</h2>
                <p> Enter your daily journal entries </p>
              </div>
              <div className="tab tab-1">
                <h2>Mood Analyzer</h2>
                <p> API will analyze your emotions </p>
              </div>
              <div className="tab tab-2">
                <h2>Conduct Daily Challenges </h2>
                <p> Complete daily challenges to balance your emotions </p>
              </div>
              <div className="tab tab-3">
                <h2> View Visuals</h2>
                <p> Something </p>
              </div>
              <div className="tab tab-4">
                <h2> Personalize your own space </h2>
                <p> Add your own modules like to-do lists to customize your space further</p>
              </div>
            </div>
            <div className="progress_inner__status">
       
                <div className="box_bow__left" />
                <div className="box_bow__right" />
              </div>
 
            </div>
          </div>

        </body>
      );
      }
    }

    export default LoginSteps;