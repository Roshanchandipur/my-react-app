// src/components/Feed.js
import React from 'react';
import Post from './Post';
import samplePost from '../data/samplePost';

function Feed() {
  // You could have an array of posts; for now, a single one
  const posts = [samplePost];

  return (
    <div>
      {posts.map((post, idx) => <Post post={post} key={idx} />)}
    </div>
  );
}

export default Feed;
