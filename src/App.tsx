import React, { useReducer,useContext } from 'react';
import './App.scss';
import RouteMap from './router';
import { useLocation } from 'react-router-dom'

import DNav from './components/nav';
import DNav2 from './components/nav/nav2';
import DTab from './components/tab';

import MyContext from './redux/context'
import reducer from './redux/reducer'

function App() {
  const location = useLocation()
  const includesArr = ['/', '/login', '/user']
  const [city, dispatch] = useReducer(reducer, "上海");
  

  return (
    <div className="App">
      <MyContext.Provider value={[city, dispatch]}>
        <div className="app_head">
          {includesArr.includes(location.pathname) ? <DNav></DNav> : <DNav2></DNav2>}
        </div>
        <div className="app_body">
          <RouteMap></RouteMap>
        </div>
        <div className="app_foot">
          <DTab></DTab>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
