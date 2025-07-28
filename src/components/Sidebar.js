// src/components/Sidebar.js
import React from 'react';

const communities = [
  { name: 'FrontEnd', members: '1.5k' },
  { name: 'BackEnd', members: '2.4k' },
  { name: 'DevOps', members: '1k' },
  //... more
];

const Sidebar = () => (
  <aside className="sidebar">
    <h3 className="sidebar-title">Community</h3>
    <div className="community-list">
      {communities.map((c, i) => (
        <div className="community-card" key={i}>
          <div className="community-icon" />
          <div>
            <div className="community-name">{c.name}</div>
            <div className="community-members">{c.members} Members</div>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

export default Sidebar;
