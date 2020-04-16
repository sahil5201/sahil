import React from 'react';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import LoginPage from './components/Page/LoginPage';
import Mainarea from './components/Mainarea';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from './components/Page/ErrorPage';


function App() {
  const customHistory = createBrowserHistory();
  const link = window.location.pathname;
  console.log(link);
  return (
    <Provider store={store}>

      <ReactNotification />

      <BrowserRouter history={customHistory}>
      <Switch>
      <Route exact path="/"> <Mainarea/> </Route> 
      <Route exact path="/login" component={LoginPage} />
      <Route path="*" component={ErrorPage} />
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
