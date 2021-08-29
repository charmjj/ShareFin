import React, { useState, useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { createTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import SharkFinz from '../assets/sharkfinz.jpg';
import { AuthContext } from '../context/auth';
import AvatarPic from '../assets/avatar.png';

function Header() {

  const { user, logout } = useContext(AuthContext);

  const pathname = window.location.pathname;

  // based on whatever page you are in
  const path = pathname === '/' ? 'home' : pathname.substr(1); // substr(1) because you only want after '/' such as login in '/login'
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e) => setActiveItem(e.currentTarget.name);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuBar = user ?
  (
    <AppBar position="static" color="transparent"  elevation={3}>
      <Toolbar >
        <Button  
          className="Button-NoBG"
          href="/"
          style={{ marginRight: 'auto' }}
          disableRipple 
          disableFocusRipple 
          disableElevation 
          startIcon={<img src={SharkFinz} alt="..." style={{ minWidth:'35px', maxWidth: '50px' }} />}
        >
          {/* <ThemeProvider theme={theme}> */}
            <Typography variant="h5"  >
              <span className="cursive" style={{textTransform: 'none'}}><b>ShareFin</b></span>
            </Typography>
          {/* </ThemeProvider> */}
        </Button>

        <Button 
            href="/subscribe"
            name="subscribe" 
            onClick={handleItemClick} 
            variant="outlined" 
            color="inherit"
            style={{ 
              marginRight: '10px', 
              fontWeight: 'bold', 
              backgroundColor: `${activeItem === "subscribe" ? '' : "rgb(0,224,0)"}`,
              borderColor: `${activeItem === "subscribe" ? '' : "white"}`,
            }}
            disabled={ activeItem === "subscribe" ? true : false}
          >
            Subscribe
          </Button>

        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {/* <ThemeProvider theme={theme}> */}
            <Typography variant="h6">
              <span className="cursive" style={{ fontWeight: "bold", textTransform: 'none'}}>Jason</span> &nbsp;
            </Typography>
          {/* </ThemeProvider> */}
          <Avatar src={AvatarPic} alt="Jason" />
        </Button>
        
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ horizontal: "center" }}
        >
          <MenuItem onClick={handleClose} href={`/schedule`} component="a">Schedules</MenuItem>
          <MenuItem onClick={() => {setConfirmOpen(true); handleClose();}}>Logout</MenuItem>
          <Dialog
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle>
              Confirm logout?
            </DialogTitle>
            <DialogContent>
              <DialogContentText variant="h6">
                Are you sure you want to logout?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setConfirmOpen(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={logout} href={`/`} style={{ color: "red" }}>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </Menu>
      </Toolbar>
    </AppBar>
  )
  : (
    <AppBar position="static" color="transparent">
      <Toolbar >
        <Button  
          href="/"
          style={{ marginRight: 'auto' }}
          disableRipple 
          disableFocusRipple 
          disableElevation 
          startIcon={<img src={SharkFinz} alt="..." style={{ minWidth:'35px', maxWidth: '50px' }} />}
        >
          <Typography variant="h5" >
            <span className="cursive" style={{textTransform: 'none'}}><b>ShareFin</b></span>
          </Typography>
        </Button>

        <Button 
            href="/subscribe"
            name="subscribe" 
            onClick={handleItemClick} 
            variant="outlined" 
            color="inherit"
            style={{ 
              marginRight: '10px', 
              fontWeight: 'bold', 
              backgroundColor: `${activeItem === "subscribe" ? '' : "rgb(0,224,0)"}`,
              borderColor: `${activeItem === "losubscribegin" ? '' : "white"}`,
            }}
            disabled={ activeItem === "subscribe" ? true : false}
          >
            Subscribe
          </Button>

        <Hidden xsDown>
          <Button 
            href="/login"
            name="login" 
            onClick={handleItemClick} 
            variant="outlined" 
            color="inherit"
            style={{ 
              marginRight: '10px', 
              fontWeight: 'bold', 
              backgroundColor: `${activeItem === "login" ? '' : "rgb(197,224,181)"}`,
              borderColor: `${activeItem === "login" ? '' : "white"}`,
            }}
            disabled={ activeItem === "login" ? true : false}
          >
            Login
          </Button>
          {/* <Button 
            href="/register" 
            name="register"
            onClick={handleItemClick}  
            variant="outlined" 
            color="inherit" 
            style={{ 
              fontWeight: 'bold', 
              backgroundColor: `${activeItem === "register" ? '' : "#84d4fc"}`,
              borderColor: `${activeItem === "register" ? '' : "white"}`,
            }}
            disabled={ activeItem === "register" ? true : false}
          >
            Register
          </Button> */}
        </Hidden>

        {/* Only for MOBILE
        <Hidden smUp>
          {
            path === "login" ?
            <Button 
              href="/register" 
              name="register"
              onClick={handleItemClick}  
              variant="outlined" 
              color="inherit" 
              style={{ 
                fontWeight: 'bold', 
                backgroundColor: `${activeItem === "register" ? '' : "#84d4fc"}`,
                borderColor: `${activeItem === "register" ? '' : "white"}`,
              }}
              disabled={ activeItem === "register" ? true : false}
            >
              Register
            </Button>
            :
            <Button 
              href="/login"
              name="login" 
              onClick={handleItemClick} 
              variant="outlined" 
              color="inherit"
              style={{ 
                marginRight: '10px', 
                fontWeight: 'bold', 
                backgroundColor: `${activeItem === "login" ? '' : "#84d4fc"}`,
                borderColor: `${activeItem === "login" ? '' : "white"}`,
              }}
              disabled={ activeItem === "login" ? true : false}
            >
              Login
            </Button>
          }
        </Hidden> */}
      </Toolbar>
    </AppBar>
  )
  
  return menuBar;
}

export default Header
