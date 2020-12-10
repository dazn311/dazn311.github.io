import React from 'react'; 
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import HeaderComponent from './components/header'
import homeScreen from './screens/homeScreen'
import favoriteScreen from './screens/favoriteScreen'
import { ProductState } from './store/context/products/ProductState';


function App() {
  return (
    <ProductState>
      <BrowserRouter>
      <div className="App">
        <HeaderComponent></HeaderComponent> 
        <Switch>
          <Route exact path='/' component={homeScreen} />
          <Route exact path='/fav' component={favoriteScreen} />
        </Switch>
      </div>
      </BrowserRouter>
    </ProductState>
  ); 
} 

export default App;
