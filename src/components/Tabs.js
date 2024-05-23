import React from "react";
import "./Tabs.css";

const Tabs = ({ onChangeTab }) => (
  <div className="tabs">
    <button className="buttonTabs" onClick={() => onChangeTab("resources")}>Resources</button>
    <button className="buttonTabs" onClick={() => onChangeTab("requests")}>Requests</button>
    <button className="buttonTabs" onClick={() => onChangeTab("users")}>Users</button>
  </div>
);

export default Tabs;
