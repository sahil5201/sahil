import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Avatar } from '@material-ui/core';


function Sidebar(props) {
  const link = props.activeLink
  const user = window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : "";

  return (
  <div className="sidebar" data-color="azure" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
    
  <div className="logo"><Link to="/" className="simple-text logo-normal">
      TO DO
     </Link></div>
  <div className="sidebar-wrapper">
    <ul className="nav">
      <li className={ link === "/" ? "nav-item active" : "nav-item " }>
        <Link className="nav-link" to="/">
          <i className="material-icons">dashboard</i>
          <p>Dashboard</p>
         </Link>
      </li>
      
      <li className={ link === "/latest" ? "nav-item active" : "nav-item " }>
        <Link className="nav-link" to="/latest">
          <i className="material-icons">today</i>
          <p>Today</p>
         </Link>
      </li>
      <li className={ link === "/important" ? "nav-item active" : "nav-item " }>
        <Link className="nav-link" to="/important">
          <i className="material-icons">stars</i>
          <p>Important</p>
         </Link>
      </li>
      <li className={ link === "/planned" ? "nav-item active" : "nav-item " }>
        <Link to="/planned" className="nav-link">
          <i className="material-icons">schedule</i>
          <p>planned</p>
        </Link>
      </li>
      {user?
      <li className="nav-item active-pro">
        <Link className="nav-link" to="/planned">
         <i className="material-icons"><Avatar alt="Remy Sharp" src={user.imageUrl} style={{ height:"30px",width:"30px" }}/></i>
          <p>{user.name}</p>  
        </Link>
      </li>: " "}
      
      
    </ul>
  </div>
 
</div>

  );
}

export default Sidebar;
