import React from 'react';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import LoginPage from './components/Page/LoginPage';
import Mainarea from './components/Mainarea';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ErrorPage from './components/Page/ErrorPage';


function AppRoute(){
  const customHistory = createBrowserHistory();
  const login = window.sessionStorage.getItem('user') ? window.sessionStorage.getItem('user') : null ;
  return (
    <Provider store={store}>
      <ReactNotification />
      <BrowserRouter history={customHistory} basename="/sahil">
      <Switch>
      {login ? <Redirect exact from="/" to="app/" /> : 
      <Redirect exact from="/" to="login/" /> }

      <Route exact path="/app"> <Mainarea/> </Route> 
      <Route exact path="/login"> <LoginPage/> </Route>
      <Route path="*" component={ErrorPage} />
      </Switch>
      </BrowserRouter>
    </Provider>
  )
 }

function App() {
  return (
    <AppRoute/> 
  );
}

export default App;
