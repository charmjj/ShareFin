import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { createTheme } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';

import SharkFinz from '../assets/sharkfinz.jpg';

function Header() {

  const pathname = window.location.pathname;

  // based on whatever page you are in
  const path = pathname === '/' ? 'home' : pathname.substr(1); // substr(1) because you only want after '/' such as login in '/login'
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e) => setActiveItem(e.currentTarget.name);

  return (
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
            <span className="cursive" style={{textTransform: 'none'}}><b>FreeBirds</b></span>
          </Typography>
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
              backgroundColor: `${activeItem === "login" ? '' : "#84d4fc"}`,
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
    
}

export default Header
