import React, { useState } from "react";
import {Link} from "react-router-dom"

import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import PetsIcon from "@material-ui/icons/Pets";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position = "sticky" >
      <Toolbar className="navStyle">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <div className="searchBar">
          <InputBase placeholder="  Search…" />
        </div>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <EmailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/7.jpg"
              onClick={(e) => setOpen(true)}
            />
          </IconButton>
        </Box>
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          color="inherit"
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/8.jpg"
            onClick={(e) => setOpen(true)}
          />
          <Typography>Elena</Typography>
        </IconButton>
      </Toolbar>
      
      <Menu
        id="simple-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transormOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem><Link to="/login">Logout</Link></MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
