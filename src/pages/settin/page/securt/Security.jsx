import React from "react";
import "./Security.css";
import { Switch } from "antd";

const Security = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <h1 className="security_title">Two-factor Authentication</h1>
      <div className="security_switch">
        <div>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div>
          <p>Enable or disable two factor authentication</p>
        </div>
      </div>
      <h1 className="security_text">Change Password</h1>
      <div>
        <h4 className="security_input_name">Current Password</h4>
        <input
          className="security_input"
          type="text"
          placeholder="**********"
        />
      </div>
      <div>
        <h4 className="security_input_name">New Password</h4>
        <input
          className="security_input"
          type="text"
          placeholder="**********"
        />
      </div>
      <div className="input_switch_button">
        <button className="input_switch_btn">Save</button>
      </div>
    </>
  );
};

export default Security;
