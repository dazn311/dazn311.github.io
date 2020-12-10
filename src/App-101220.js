import React, { useEffect, useState, useRef, useReducer } from 'react'; 
import productReducer from './store/reducers/productReducer'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PropTypes from 'prop-types';
import './App.css';
// import "./styles.css";
// import GotService from './services/GotService';
// import NewsList from './news/NewsList';
import HeaderComponent from './components/header'
import homeScreen from './screens/homeScreen'
import favoriteScreen from './screens/favoriteScreen'
import { ProductState } from './store/context/products/productState';

const initionalFavState = [];
// var intervalLoopHandle = -1;



function App() {
  const [state, dispatch] = useReducer(productReducer,JSON.parse(localStorage.getItem('favoritesElements')));

  const unmounted = useRef(false);
  // const [news, setNews] = React.useState(initionalFavState)
  const [favoriteNews, setFavoriteNews] = useState(initionalFavState);

  
  // const [isLoading, setIsLoading] = useState(false);

  // const gotService = new GotService();

  

  const toggleShowFavorite = () => {
    // stopPlayLoop();
    // setShowFavorites((prevState => !prevState));
  }

  // const updateNews = () => {
  //   // setIsLoading(true);

  //   gotService.getProductAll()
  //     .then((jsonData) => {
  //       const transData = gotService.transformDataR(jsonData);
  //       console.log('transData',transData);
  //       // setIsLoading(false);
  //       setNews([transData]);
  //     });
  // }
  



  const appendFavorite = (id) => {
    const isFav = favoriteNews.find(elem => elem.id === id);
    if (isFav) return;

    const newData = { ...news[0], isFavorite: true };
    if (favoriteNews.length <= 9) {
      let newFav = [...favoriteNews, newData];
      setFavoriteNews(newFav);
      setFavoriteToLocal(newFav);

    } else {
      let newFav = favoriteNews.concat();
      newFav.shift();
      newFav.push(newData);
      setFavoriteToLocal(newFav);
      setFavoriteNews(newFav);
    }



  };
  const setFavoriteToLocal = (elems) => {
    localStorage.setItem('favoritesElements', JSON.stringify(elems));
  }

  const deleteFavorite = (id) => {
    const newFav = favoriteNews.filter(item => item.id !== id)
    setFavoriteNews(newFav);
    setFavoriteToLocal(newFav);
  };

  const cleanFavorites = () => {
    setFavoriteNews([]);
    setFavoriteToLocal([]);
  };

  // useEffect(  updateNews, [news]);
  

  useEffect(() => {
    if (unmounted.current) return;
    // updateNews();
    const lastfavoritesElements = localStorage.getItem('favoritesElements') || '[]';
    setFavoriteNews(JSON.parse(lastfavoritesElements));
    return () => { unmounted.current = true }
    // eslint-disable-next-line
  }, []);

  const nextNews = () => {
    // stopPlayLoop();
    // setShowFavorites(false);
    // updateNews();
  }

  

  const toggleFavorite = (id) => {
    // toggleNewsState();
    const inx = favoriteNews.findIndex(elem => elem.id === id);
    if (inx < 0) {
      appendFavorite(id);
    } else {
      deleteFavorite(id);
    }

  }

  // function deleteNews(title) {
  //   setNews(
  //     news.filter((newsElement, index) => {
  //       if (newsElement.id > index) {
  //         newsElement.id = index;
  //       }
  //       return newsElement.title !== title
  //     }).map((newsElement, index) => {
  //       if (newsElement.id > index) {
  //         newsElement.id = index
  //       }
  //       return newsElement
  //     })
  //   )

  // }

  let favoriteNewsLength = () => {
    return favoriteNews.length.toString() || '0'
  }

  toggleFavorite.propTypes = {
    id: PropTypes.number
  }


  // const listItems = showFavorites ? favoriteNews : news;

  // let colorLoop = playLoopInterval ? 'gold' : 'gray';

  const buttonGroup = <div className="buttonGroup">
    <button onClick={cleanFavorites}>Очистить Избранные</button>
    <button onClick={toggleShowFavorite}>Избранные ({favoriteNewsLength()})</button>
    <button onClick={nextNews}><i className="fas fa-angle-double-right"></i></button>
    <button onClick={nextNews}><i style={{ color: 'red' }} className="fas fa-play-circle"></i></button>
  </div>;

  // console.log('listItems',listItems);
  // if (isLoading) {
  return (
    <ProductState.Provider value={{appendFavorite, toggleFavorite}}>
      <BrowserRouter>
      <div className="App">
      <HeaderComponent></HeaderComponent> 
        {buttonGroup}
        <Switch>
          <Route exact path='/' component={homeScreen} />
          <Route exact path='/fav' component={favoriteScreen} />
        </Switch>
        {/* {!isLoading && <div className="loader">Loading...</div>} */}
        
         {/* <NewsList  newsElement={listItems}  onToggle={toggleFavorite} delete={deleteNews}></NewsList>  */}
      </div>
      </BrowserRouter>
    </ProductState.Provider>
  ); 
} 

export default App;
