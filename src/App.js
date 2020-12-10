import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
            <Route component={homeScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    </ProductState>
  );
}

export default App;
