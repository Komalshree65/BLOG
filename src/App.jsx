import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Login from './pages/login/Login';

import Header from './pages/home2/home2';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Header}/>
        <Route path='/Home'  component={Home} />
        <Route path='/Login' component={Login}/>
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
