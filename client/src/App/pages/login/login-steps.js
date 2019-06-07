import React, { Component } from "react";
import "./login-steps.css";

class LoginSteps extends Component {
  render() {
    return (
      <div className="progress">
        <div className="progress_inner">
          <div className="progress_inner__step">
            <label htmlFor="step-1">Create Daily Journal Entries</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-2">Analyze Your Emotions </label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-3">Conduct Tailored Challenges</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-4">View Real-Time Data </label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-5">Personalize Your Space</label>
          </div>
          <input
            defaultChecked="checked"
            id="step-1"
            name="step"
            type="radio"
          />
          <input id="step-2" name="step" type="radio" />
          <input id="step-3" name="step" type="radio" />
          <input id="step-4" name="step" type="radio" />
          <input id="step-5" name="step" type="radio" />
          <div className="progress_inner__bar" />
          <div className="progress_inner__bar--set" />
          <div className="progress_inner__tabs">
            <div className="tab tab-0">
              <h2>Create Daily Journal Entries</h2>
              <p>
                {" "}
                Scribble down your daily thoughts and feelings in the journal
                module{" "}
              </p>
            </div>
            <div className="tab tab-1">
              <h2>Analyze Your Emotions</h2>
              <p>
                {" "}
                View a breakdown of the emotions your thoughts carry based on
                your entries
              </p>
            </div>
            <div className="tab tab-2">
              <h2>Conduct Tailored Challenges </h2>
              <p>
                {" "}
                Complete quick challenges that will be tailored to your
                emotional state{" "}
              </p>
            </div>
            <div className="tab tab-3">
              <h2> View Real-Time Data </h2>
              <p>
                {" "}
                Each module carries interactive visualizations that provide
                real-time analytics{" "}
              </p>
            </div>
            <div className="tab tab-4">
              <h2> Personalize Your Space </h2>
              <p>
                {" "}
                Add your own modules like to-do lists to customize your space
                further{" "}
              </p>
            </div>
          </div>
          <div className="progress_inner__status">
            <div className="box_bow__left" />
            <div className="box_bow__right" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSteps;
