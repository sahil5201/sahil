import React from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.css';

import Head from './components/Head'
import Sidebar from './components/Sidebar'
import Mainarea from './components/Mainarea'

function App() {
 
  return (
    <Provider store={store}>
    <div className="wrapper">
        <Sidebar/>
          <div className="main-panel">
          <Head/>       
          <Mainarea/>    
        </div>
    </div>
    </Provider>
  );
}

export default App;
