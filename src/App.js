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
      <Route path='/list' component={ListArticle} />
      <Route path='/kopi' component={Jurnal1} /> 
      <Route  component={Home} />
    </Switch>
  );
}





export default App;

