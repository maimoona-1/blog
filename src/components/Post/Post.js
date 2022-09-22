import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Stack from '@mui/system/Stack';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';

import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// icons
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Comments from './Comments';
import { addComment } from './postSlice';

const Post = ({ id, avatarUrl, author, datePosted, mainImageUrl, description, comments }) => {
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');
  const [expanded, setExpanded] = React.useState(false);

  const handleCommentSave = () => {
    if (comment.trim().length < 1) return;

    const _comment = {
      datePosted: new Date().toLocaleString(),
      text: comment,
    };

    dispatch(addComment({ postId: id, comment: _comment }));

    setComment('');
    setShowComment(false);
    setExpanded(true);
  };

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 60, height: 60 }}>
            <img alt='avatar' src={avatarUrl} />
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={datePosted}
      />
      <CardMedia component='img' height='300' src={mainImageUrl} alt='blog image' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name='checkedH' />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label='share' onClick={() => setShowComment(true)}>
          <CommentIcon />
        </IconButton>
      </CardActions>

      {showComment && (
        <Stack>
          <TextField
            variant='outlined'
            value={comment}
            placeholder='Add your comment'
            onChange={({ target }) => setComment(target.value)}
          />
          <Stack direction='row' spacing={2} justifyContent='flex-end'>
            <Button
              size='medium'
              variant='outlined'
              disabled={comment.trim().length < 1}
              onClick={handleCommentSave}
            >
              Post Comment
            </Button>
            <Button
              size='medium'
              variant='outlined'
              onClick={() => {
                setShowComment(false);
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      )}

      {comments?.length > 0 && (
        <Comments comments={comments} isExpanded={expanded} setIsExpanded={setExpanded} />
      )}
    </Card>
  );
};

export default Post;
