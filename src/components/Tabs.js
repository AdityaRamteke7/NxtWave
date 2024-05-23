import React from 'react';


const Tabs = ({ activeTab, onChangeTab }) => (
  <div className="tabs">
    <button className={activeTab === 'resources' ? 'active' : ''} onClick={() => onChangeTab('resources')}>Resources</button>
    <button className={activeTab === 'requests' ? 'active' : ''} onClick={() => onChangeTab('requests')}>Requests</button>
    <button className={activeTab === 'users' ? 'active' : ''} onClick={() => onChangeTab('users')}>Users</button>
  </div>
);

export default Tabs;
