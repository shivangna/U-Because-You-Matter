import React, { Component } from "react";
import "./login-steps.css";
        

class LoginSteps extends Component { 
    render () {       
      return (
          <body>
        <div className="progress">
          <div className="progress_inner">
            <div className="progress_inner__step">
              <label htmlFor="step-1">Start order</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-2">Prepare gift</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-3">Pack gift</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-4">Decorate box</label>
            </div>
            <div className="progress_inner__step">
              <label htmlFor="step-5">Send gift</label>
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
                <h1>Start order</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
              </div>
              <div className="tab tab-1">
                <h1>Prepare gift</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
              </div>
              <div className="tab tab-2">
                <h1>Pack gift</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
              </div>
              <div className="tab tab-3">
                <h1>Decorate box</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
              </div>
              <div className="tab tab-4">
                <h1>Send gift</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
              </div>
            </div>
            <div className="progress_inner__status">
              <div className="box_base" />
              <div className="box_lid" />
              <div className="box_ribbon" />
              <div className="box_bow">
                <div className="box_bow__left" />
                <div className="box_bow__right" />
              </div>
              <div className="box_item" />
              <div className="box_tag" />
              <div className="box_string" />
            </div>
          </div>
        </div>
        </body>
      );
      }
    }

    export default LoginSteps;