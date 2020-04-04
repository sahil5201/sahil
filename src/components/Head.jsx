import React from 'react';
import {Menu,MenuItem} from '@material-ui/core';

function Head() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
   
     <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
  <div className="container-fluid">
    <div className="navbar-wrapper">
      <a className="navbar-brand" onClick={()=>{}}>Dashboard</a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
      <span className="sr-only">Toggle navigation</span>
      <span className="navbar-toggler-icon icon-bar" />
      <span className="navbar-toggler-icon icon-bar" />
      <span className="navbar-toggler-icon icon-bar" />
    </button>
    <div className="collapse navbar-collapse justify-content-end">
      <form className="navbar-form">
        <div className="input-group no-border">
          <input type="text" defaultValue className="form-control" placeholder="Search..." />
          <button type="submit" className="btn btn-white btn-round btn-just-icon">
            <i className="material-icons">search</i>
            <div className="ripple-container" />
          </button>
        </div>
      </form>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>{}}>
            <i className="material-icons">dashboard</i>
            <p className="d-lg-none d-md-block">
              Stats
            </p>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" onClick={()=>{}} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="material-icons">notifications</i>
            <span className="notification">5</span>
            <p className="d-lg-none d-md-block">
              Some Actions
            </p>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" onClick={()=>{}}>Mike John responded to your email</a>
            <a className="dropdown-item" onClick={()=>{}}>You have 5 new tasks</a>
            <a className="dropdown-item" onClick={()=>{}}>You're now friend with Andrew</a>
            <a className="dropdown-item" onClick={()=>{}}>Another Notification</a>
            <a className="dropdown-item" onClick={()=>{}}>Another One</a>
          </div>
        </li>



        <li className="nav-item dropdown">
          <a className="nav-link" aria-expanded="false" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <i className="material-icons">person</i>
            <p className="d-lg-none d-md-block">
              Account
            </p>
          </a>

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
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </li>


      </ul>
    </div>
  </div>
</nav>

  );
}

export default Head;
