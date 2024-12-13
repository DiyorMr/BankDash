import { Tabs } from "antd";
import React, { useState } from "react";
import Prefer from "./page/prefer/Prefer";
import Profil from "./page/profil/Profil";
import Security from "./page/securt/Security";
import "./Setting.css";

const Setting = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Edit Profile",
      children: <Profil />,
    },
    {
      key: "2",
      label: "Preferences",
      children: <Prefer />,
    },
    {
      key: "3",
      label: "Security",
      children: <Security />,
    },
  ];
  return (
    <>
      <div className="setting_card">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
};

export default Setting;


