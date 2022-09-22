import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import Post from '../Post/Post';

const Feed = () => {
  const posts = useSelector(state => state.post.posts);

  return (
    <Box flex={4} p={2}>
      {posts.map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </Box>
  );
};

export default Feed;
