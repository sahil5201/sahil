import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import Head from "./components/Head";
import Sidebar from "./components/Sidebar";

import Dashboard from "./components/Page/Dashboard";
import TodayTask from './components/Page/TodayTask';
import ImportantTask from './components/Page/ImportantTask';
import ScheduleTask from './components/Page/ScheduleTask';

function App() {
  const customHistory = createBrowserHistory(); 
  const link = window.location.pathname
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Sidebar activeLink={link}/>
        <div className="main-panel">
          <Head />
          <BrowserRouter history={customHistory}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/latest" component={TodayTask} />
            <Route exact path="/important" component={ImportantTask} />
            <Route exact path="/planned" component={ScheduleTask} />
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
