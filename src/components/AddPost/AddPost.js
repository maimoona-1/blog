import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material';
import { Box, Stack } from '@mui/system';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import DateRangeIcon from '@mui/icons-material/DateRange';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideocamIcon from '@mui/icons-material/Videocam';

import { createPost } from 'components/Post/postSlice';
import { PostAddOutlined } from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
});

const MIN_URL_LENGTH = 5;

const Add = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { name, avatarUrl } = currentUser;

  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [blogImageUrl, setBlogImageUrl] = useState('');

  const handleCreatePost = () => {
    const post = {
      id: new Date().valueOf(),
      avatarUrl: avatarUrl,
      author: name,
      mainImageUrl: blogImageUrl,
      description: description,
      datePosted: new Date().toLocaleDateString(),
      comments: [],
    };

    dispatch(createPost(post));

    setDescription('');
    setBlogImageUrl('');
    setOpen(false);
  };

  const isDisabled = description.trim().length < 1 || blogImageUrl.trim().length < MIN_URL_LENGTH;

  return (
    <>
      <Tooltip title='Add' onClick={() => setOpen(true)} sx={{ position: 'fixed', bottom: 20 }}>
        <Fab color='primary'>
          <PostAddOutlined />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Box width={400} maxHeight={600} bgcolor='white' p={3} borderRadius={5}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={avatarUrl} sx={{ width: 30, height: 30 }} />
            <Typography variant='span' fontWeight={500}>
              {name}
            </Typography>
          </UserBox>
          {blogImageUrl && (
            <img src={blogImageUrl} alt='main' style={{ width: '300px', height: '200px' }} />
          )}
          <TextField
            sx={{ width: '100%' }}
            placeholder='Blog Image Url (300 x 200)'
            variant='standard'
            value={blogImageUrl}
            onChange={({ target }) => setBlogImageUrl(target.value)}
          />
          <TextField
            multiline
            sx={{ width: '100%' }}
            rows={4}
            placeholder='Whats in your mind'
            variant='standard'
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Stack direction='row' gap={1} mt={4} mb={3}>
            <EmojiEmotionsIcon color='primary' />
            <ImageIcon color='secondary' />
            <PersonAddIcon color='error' />
            <VideocamIcon color='success' />
          </Stack>
          <ButtonGroup disabled={isDisabled} variant='contained' color='primary' fullWidth>
            <Button onClick={handleCreatePost}>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
