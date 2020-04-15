import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter,Switch, Route, Redirect, useHistory } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";

import Dashboard from "./Page/Dashboard";
import TodayTask from './Page/TodayTask';
import ImportantTask from './Page/ImportantTask';
import ScheduleTask from './Page/ScheduleTask';
import ErrorPage from './Page/ErrorPage';
import { useSelector } from "react-redux";
import LoginPage from "./Page/LoginPage";

function Mainarea() {
  const customHistory = createBrowserHistory(); 
  const link = window.location.pathname
  const user = useSelector((state)=>state.User);

  console.log(user);
  
  return (
    <BrowserRouter history={customHistory}>
    <div className="wrapper">
      <Sidebar activeLink={link} />
      <div className="main-panel">
        <Head />
        <div className="content">
          <div className="container-fluid">
           
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/latest" component={TodayTask} />
                <Route exact path="/important" component={ImportantTask} />
                <Route exact path="/planned" component={ScheduleTask} />
                <Route component={ErrorPage} />
              </Switch>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default Mainarea;
