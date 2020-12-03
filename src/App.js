import './App.css'; 
import React from 'react';
import { createGlobalStyle } from 'styled-components'; 
import Home from './Home';
import ListArticle from './ListArticle';

import { Switch, Route } from "react-router-dom";
import Jurnal1 from './pages/jurnal1/Jurnal1';
import Jurnal2 from './pages/jurnal1/Jurnal2';

 
function App() {


  return (
    <Switch>
      <Route basename={'/testing'} path={`${process.env.PUBLIC_URL}/list`} component={ListArticle} />
      <Route basename={'/testing'} path={`${process.env.PUBLIC_URL}/kopi`} component={Jurnal1} />
      <Route basename={'/testing'} path={`${process.env.PUBLIC_URL}/kopi2`} component={Jurnal2} />
      <Route basename={'/testing'} component={Home} />
    </Switch>
  );
}





export default App;

