import React, { useEffect } from 'react';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import LoginPage from './components/Page/LoginPage';
import Mainarea from './components/Mainarea';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ErrorPage from './components/Page/ErrorPage';



function AppRoute() {
  const customHistory = createBrowserHistory();
  const login = window.sessionStorage.getItem('user') ? true : false ;
  return (
    <Router history={customHistory} basename="/sahil">
      <ReactNotification />
      <Switch>
        {login ? <Redirect exact from="/" to="app/" /> :
          <Redirect exact from="/" to="login/" />}

        <Route exact path="/app"> <Mainarea /> </Route>
        <Route exact path="/login"> <LoginPage /> </Route>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
