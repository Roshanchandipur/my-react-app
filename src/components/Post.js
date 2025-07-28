// src/components/Post.js
import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Comment from './Comment';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  return (
    <div style={{
      border: '1px solid #dedede',
      borderRadius: '12px',
      margin: '1rem 0',
      padding: '1rem',
      background: '#fff',
      maxWidth: '600px'
    }}>
      <UserProfile user={post.userProfile} showFollow={post.userProfile.followBtn} />

      <div style={{ margin: '1rem 0' }}>
        <p>{post.userPost.discription}</p>
        {post.userPost.postImage && (
          <img src={post.userPost.postImage} alt={post.userPost.alt} style={{ width: '100%', maxHeight: '300px', borderRadius: '10px' }} />
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.25rem' }}>
        <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
        <span>{likes} likes</span>
        <span> | {post.comments.length} comments</span>
      </div>

      <div>
        <span>Tags: {post.tags.map(t => <span key={t} style={{ background: '#e0e0e0', margin: '0 4px', padding: '2px 6px', borderRadius: '6px' }}>{t}</span>)}</span>
        <br />
        <small>Posted: {new Date(post.timestamp).toLocaleString()} | {post.location && `Location: ${post.location}`}</small>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h4>Comments:</h4>
        {post.comments.map((c, i) => <Comment comment={c} key={i} />)}
      </div>
    </div>
  );
}

export default Post;
