import React from 'react';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

const RightBar = () => {
  return (
    <Box
      className='rightBoxStyle'
      sx={{ display: { xs: 'none', sm: 'block' } }}
      flex={2}
      p={2}
    >
      <Box position='fixed' width={300}>
        <Typography variant='h6'>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://material-ui.com/static/images/avatar/5.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://material-ui.com/static/images/avatar/4.jpg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://material-ui.com/static/images/avatar/7.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/6.jpg'
          />
        </AvatarGroup>
        <Typography variant='h6' mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://material-ui.com/static/images/image-list/breakfast.jpg'
              alt='breakfast'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://material-ui.com/static/images/image-list/burgers.jpg'
              alt='breakfast'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://material-ui.com/static/images/image-list/camera.jpg'
              alt='breakfast'
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' mt={2}>
          Latest Conversations
        </Typography>

        <List>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://material-ui.com/static/images/avatar/7.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textPrimary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://material-ui.com/static/images/avatar/5.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textPrimary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='https://material-ui.com/static/images/avatar/1.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textPrimary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
