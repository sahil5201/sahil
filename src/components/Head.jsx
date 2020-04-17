import React from 'react';
import {Menu,MenuItem, Avatar} from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import { PUB_Key } from '../redux/const';
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/action';
import { withRouter } from 'react-router';

function Head(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : "";

  
  const logout = () =>{
    console.log("logout");
    dispatch(Logout())
    props.history.push("/app")
  }
  return (
   
     <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
  <div className="container-fluid">
    <div className="navbar-wrapper">
      <a className="navbar-brand" href="/">Dashboard</a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
      <span className="sr-only">Toggle navigation</span>
      <span className="navbar-toggler-icon icon-bar" />
      <span className="navbar-toggler-icon icon-bar" />
      <span className="navbar-toggler-icon icon-bar" />
    </button>
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="material-icons">notifications</i>
            <span className="notification">5</span>
            <p className="d-lg-none d-md-block">
              Some Actions
            </p>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="/">Mike John responded to your email</a>
            <a className="dropdown-item" href="/">You have 5 new tasks</a>
            <a className="dropdown-item" href="/">You're now friend with Andrew</a>
            <a className="dropdown-item" href="/">Another Notification</a>
            <a className="dropdown-item" href="/">Another One</a>
          </div>
        </li>



        <li className="nav-item dropdown">
          <button className="nav-link btn btn-link" aria-expanded="false" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {user.imageUrl ? <div><Avatar alt="Remy Sharp" src={user.imageUrl} /> </div> : <i className="material-icons">person</i> }  
            <p className="d-lg-none d-md-block">
              Account
            </p>
          </button>

          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <div className="dropdown-divider" />

        <GoogleLogout
      clientId={PUB_Key}
      render={renderProps => (
        <MenuItem onClick={renderProps.onClick}>Logout</MenuItem>
      )}
      buttonText="Logout"
      onLogoutSuccess={logout}
    />

        
        </Menu>
        </li>


      </ul>
    </div>
  </div>
</nav>

  );
}

export default withRouter(Head);
