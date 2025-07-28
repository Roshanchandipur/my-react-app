// src/components/Comment.js
import React from 'react';
import UserProfile from './UserProfile';

function Comment({ comment }) {
  return (
    <div style={{ marginBottom: '8px', background: '#f7f7f7', padding: '0.5rem', borderRadius: '8px' }}>
      <UserProfile user={comment.user} showFollow={comment.user.followBtn} />
      <p>{comment.commentText}</p>
      <small>{new Date(comment.timestamp).toLocaleString()} • Likes: {comment.likes}</small>
    </div>
  );
}

export default Comment;
