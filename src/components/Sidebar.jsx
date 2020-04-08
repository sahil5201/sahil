import React from 'react';

function Sidebar(props) {
  const link = props.activeLink
  return (
  <div className="sidebar" data-color="azure" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
  <div className="logo"><a href="/" className="simple-text logo-normal">
      TO DO
    </a></div>
  <div className="sidebar-wrapper">
    <ul className="nav">
      <li className={ link === "/" ? "nav-item active" : "nav-item " }>
        <a className="nav-link" href="/">
          <i className="material-icons">dashboard</i>
          <p>Dashboard</p>
        </a>
      </li>
      
      <li className={ link === "/latest" ? "nav-item active" : "nav-item " }>
        <a className="nav-link" href="/latest">
          <i className="material-icons">today</i>
          <p>Today</p>
        </a>
      </li>
      <li className={ link === "/important" ? "nav-item active" : "nav-item " }>
        <a className="nav-link" href="/important">
          <i className="material-icons">stars</i>
          <p>Important</p>
        </a>
      </li>
      <li className={ link === "/planned" ? "nav-item active" : "nav-item " }>
        <a className="nav-link" href="/planned">
          <i className="material-icons">schedule</i>
          <p>planned</p>
        </a>
      </li>

      <li className="nav-item active-pro">
        <a className="nav-link" href="/planned">
          <i className="material-icons">person</i>
          <p>User Profile</p>
        </a>
      </li>
      
      
    </ul>
  </div>
</div>

  );
}

export default Sidebar;
