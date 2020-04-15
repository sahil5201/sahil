import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import LoginPage from './components/Page/LoginPage';
import Mainarea from './components/Mainarea';
import { useHistory } from 'react-router';

function App() {
 
  const link = window.location.pathname;
  console.log(link);
   return (
    <Provider store={store}>
      {link!=="/login" ? 
      <Mainarea/>
    : 
      <LoginPage/>
    }
    </Provider>
  );
}

export default App;
