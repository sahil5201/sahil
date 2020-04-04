import React from 'react';

function Sidebar() {
 
  return (
  <div className="sidebar" data-color="azure" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
  <div className="logo"><a onClick={()=>{}} className="simple-text logo-normal">
      Creative Tim
    </a></div>
  <div className="sidebar-wrapper">
    <ul className="nav">
      <li className="nav-item active  ">
        <a className="nav-link" onClick={()=>{}}>
          <i className="material-icons">dashboard</i>
          <p>Dashboard</p>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" onClick={()=>{}}>
          <i className="material-icons">person</i>
          <p>User Profile</p>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" onClick={()=>{}}>
          <i className="material-icons">content_paste</i>
          <p>Table List</p>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" onClick={()=>{}}>
          <i className="material-icons">library_books</i>
          <p>Typography</p>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" onClick={()=>{}}>
          <i className="material-icons">bubble_chart</i>
          <p>Icons</p>
        </a>
      </li>
      
      
    </ul>
  </div>
</div>

  );
}

export default Sidebar;
