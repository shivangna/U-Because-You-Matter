import React, { Component } from "react";

mobiscroll.settings = {
  theme: "ios"
};

class Calendar extends Component {
  render() {
    return (
      <mobiscroll.Form inputStyle="box">
        <div className="mbsc-grid mbsc-form-grid">
          <div className="mbsc-row">
            <div className="mbsc-col-sm-12 mbsc-col-md-6">
              <label>
                Mobile
                <mobiscroll.Date
                  display="bubble"
                  placeholder="Please Select..."
                />
              </label>
            </div>
            <div className="mbsc-col-sm-12 mbsc-col-md-6">
              <label>
                Desktop
                <mobiscroll.Date
                  display="bubble"
                  touchUi={false}
                  placeholder="Please Select..."
                />
              </label>
            </div>
          </div>
        </div>
      </mobiscroll.Form>
    );
  }
}

export default Calendar;
