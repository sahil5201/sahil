import React, { useEffect } from "react";
import {Switch, Route,HashRouter as Router, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Head from "./Head";
import Sidebar from "./Sidebar";

import { user_authentication } from "../redux/action";
import { useDispatch } from "react-redux";

import Dashboard from "./Page/Dashboard";
import TodayTask from './Page/TodayTask';
import ImportantTask from './Page/ImportantTask';
import ScheduleTask from './Page/ScheduleTask';
import ErrorPage from './Page/ErrorPage';
import ProfilePage from "./Page/ProfilePage";
import Team from "./Page/Team";

function Mainarea(props) {
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(user_authentication())
  }, [])
  const link = window.location.pathname
  const customHistory = createBrowserHistory();
  const login = window.sessionStorage.getItem('user') ? true : false ;
  return (
    <Router history={customHistory}>
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
                <Route exact path="/team" component={Team} />
                <Route path="*" component={ErrorPage} /> 
              </Switch> 
                : 
                <Switch>
                <Route exact path ="/" > { props.history.push("/login")} </Route>
                <Route exact path ="*" > { props.history.push("/login")} </Route>
                </Switch>
            }              
          
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default withRouter(Mainarea);
