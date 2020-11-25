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
import Jurnal1 from './pages/jurnal1/Jurnal1';
import Jurnal2 from './pages/jurnal1/Jurnal2';

 
function App() {


  return (
    <Switch>
      <Route path="/list" component={ListArticle} />
      <Route path="/kopi" component={Jurnal1} />
      <Route path="/kopi2" component={Jurnal2} />
      <Route component={Home} />
    </Switch>
  );
}





export default App;

