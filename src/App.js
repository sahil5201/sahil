import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import LoginPage from './components/Page/LoginPage';
import Mainarea from './components/Mainarea';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App() {
  const customHistory = createBrowserHistory(); 
  const link = window.location.pathname;
  console.log(link);
   return (
    <Provider store={store}>
      <BrowserRouter history={customHistory} basename="/sahil">
      <ReactNotification />
     
      <Mainarea/>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
