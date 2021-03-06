import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
// import apiCAll from '../integration/apiCall';
const {apiCAll}= require('../integration/apiCall');

const useStyles = makeStyles({
  navbar: {
    background: '#42b6EE !important',
    position: 'sticky !important',
    zIndex: 999,
  },
  button: {
    letterSpacing: '2px',
    color: 'white !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold',
    margin: '0px 20px !important',

    '&:focus': {
      outline: 'none',
    }
  },
  icon:{

    '&:hover':{
      color:"white !important",
      textDecoration : 'none !important'
    }
  }
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();


  const navigate = useNavigate();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutFunction = () => {
    setAnchorElUser(null);
    apiCAll('/api/logout','get')
    .then((res)=>{
      if(res.status>=200 && res.status<=299 ){
        navigate('signin'); 
      }
      else{
        console.log("something went wrong");
      }
    })
  };

  const logoutAllfun = () => {
    setAnchorElUser(null);
    apiCAll('/api/logout/all','get')
    .then((res)=>{
      if(res.status>=200 && res.status<=299 ){
        navigate('signin'); 
      }
      else{
        console.log("something went wrong");
      }
    })
  };

  return (
    <AppBar className={classes.navbar}  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, '&:hover': {textDecoration:'none', color : 'white'} }}
          >
            <i className= {`fab fa-typo3  ${classes.icon}`} /> IACS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/softwarehouse" >Software House</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/stdjob" >Jobs</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/stdinternship">Internhsips</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/stdtraining">Trainings</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/stdproject">Projects</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/stdscholarship">Scholarships</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/signup">Sign up</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component={Link} to="/signin">Log in</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, '&:hover': {textDecoration:'none', color : 'white'} }}
          >
            <i className='fab fa-typo3' /> IACS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/softwarehouse">
              Software House
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/stdjob">
              Jobs
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/stdinternship">
              Internships
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/stdtraining">
              Trainings
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/stdproject">
              Projects
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/stdscholarship">
              Scholarships
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/signup">
              Sign up
            </Button>
            <Button x={{ my: 2, color: 'white', display: 'block' }}
              className={classes.button} component={Link} to="/signin">
              Log in
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{'&:hover': {textDecoration:'none', color : 'inherit'} }}  component={Link} to="/stddashboard">Dashboard</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{'&:hover': {textDecoration:'none', color : 'inherit'} }} component={Link} to="/studentProfile">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{'&:hover': {textDecoration:'none', color : 'inherit'} }} component={Link} to="/studentProfile">Account</Typography>
              </MenuItem>
              <MenuItem onClick={logoutFunction}>
                <Typography textAlign="center" sx={{'&:hover': {textDecoration:'none', color : 'inherit'} }} component={Link} to="/">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
