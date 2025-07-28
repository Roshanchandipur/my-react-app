// src/components/UserProfile.js
import React from 'react';

function UserProfile({ user, showFollow = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={user.userImage} alt={user.alt} width={40} height={40} style={{ borderRadius: '50%' }} />
      <span><strong>{user.userName}</strong></span>
      {showFollow && <button>Follow</button>}
    </div>
  );
}

export default UserProfile;
