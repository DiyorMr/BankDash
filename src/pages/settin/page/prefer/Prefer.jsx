import React from "react";
import "./Prefer.css";
import { Space, Switch } from "antd";

const Prefer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h1 className="prefer_title">Currency</h1>
          <input className="prefer_input" type="text" placeholder="USD" />
        </div>
        <div className="col-6">
          <h1 className="prefer_title">Time Zone</h1>
          <input
            className="prefer_input"
            type="text"
            placeholder="(GMT-12:00) International Date Line West"
          />
        </div>
      </div>
      <h3 className="prefer_notif">Notification</h3>
      <div className="prefer_switch">
        <div className="switch">
          <Space direction="vertical">
            <Switch
              checkedChildren="on"
              unCheckedChildren="off"
              defaultChecked
            />
            <Switch checkedChildren="on" unCheckedChildren="off" />
            <Switch
              checkedChildren="on"
              unCheckedChildren="off"
              defaultChecked
            />
          </Space>
        </div>
        <div className="switch_text">
          <p>I send or receive digita currency</p>
          <p>I receive merchant order</p>
          <p>There are recommendation for my account</p>
        </div>
      </div>
        <div className="input_switch_button">
          <button className="input_switch_btn">Save</button>
        </div>
    </div>
  );
};

export default Prefer;
