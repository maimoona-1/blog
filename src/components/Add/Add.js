import React, { useState } from "react";

import { Avatar, Fab, Tooltip, Typography, styled } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import { Box, Stack } from "@mui/system";
import TextField from "@material-ui/core/TextField";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ImageIcon from "@material-ui/icons/Image";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VideocamIcon from "@material-ui/icons/Videocam";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 5,
  });

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{ position: "fixed", bottom: 20 }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              Jhon Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multilines-static"
            multiline
            rows={4}
            placeholder="Whats in your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={4} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <PersonAddIcon color="error" />
            <VideocamIcon color="sucess" />
          </Stack>
          <ButtonGroup variant="contained" color="primary" fullWidth>
            <Button>Post</Button>
            <Button sx={{width: "100px"}}><DateRangeIcon/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
