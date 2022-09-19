import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

const Post = () => {
  return (
    <Card sx={{ margin: 5}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe"  sx={{ width: 60, height: 60 }}>
            <img alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/6.jpg"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Jhon Doe"
        subheader="September 20. 2022"
      />
      <CardMedia
        component="img"
        height="300"
        src="https://material-ui.com/static/images/image-list/breakfast.jpg"
        alt="Flood Vitims"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A good breakfast fuels you up and gets you ready for the day. Good
          morning!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
