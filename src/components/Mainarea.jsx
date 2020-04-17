import React from "react";
import {Switch, Route,HashRouter, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Head from "./Head";
import Sidebar from "./Sidebar";

import Dashboard from "./Page/Dashboard";
import TodayTask from './Page/TodayTask';
import ImportantTask from './Page/ImportantTask';
import ScheduleTask from './Page/ScheduleTask';
import ErrorPage from './Page/ErrorPage';
import ProfilePage from "./Page/ProfilePage";

function Mainarea(props) {
  const link = window.location.pathname
  const customHistory = createBrowserHistory();
  const login = window.sessionStorage.getItem('user') ? window.sessionStorage.getItem('user') : null ;
  return (
    <HashRouter history={customHistory}>
    <div className="wrapper">
      <Sidebar activeLink={link} />
      <div className="main-panel">
        <Head />
        <div className="content">
          <div className="container-fluid">
          
            {login ? 
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/latest" component={TodayTask} />
                <Route exact path="/important" component={ImportantTask} />
                <Route exact path="/planned" component={ScheduleTask} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route path="*" component={ErrorPage} /> 
              </Switch> 
                : 
                <Route exact path ="/" render={()=>{ props.history.push("/login"); }}></Route>
            }              
          
          </div>
        </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default withRouter(Mainarea);
