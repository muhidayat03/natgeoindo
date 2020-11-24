import logo from './logo.svg';
import './App.css';
import Image from './image.jpg'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import Home from './Home';
import ListArticle from './ListArticle';

import { Switch, Route, NavLink } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;


function App() {


  return (
    <Switch>
      <Route path="/list" component={ListArticle} />
      <Route component={Home} />
    </Switch>
  );
}




export default App;

