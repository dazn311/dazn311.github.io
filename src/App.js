import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './App.css';
//import "./styles.css";
import newsService from './services/newsService';
import NewsList from './news/NewsList';

const initionalFavState = [];
var intervalLoopHandle = -1;



function App() {
  const unmounted = useRef(false);
  const [news, setNews] = React.useState(initionalFavState)
  const [favoriteNews, setFavoriteNews] = useState(initionalFavState);

  const [showFavorites, setShowFavorites] = useState(false);
  const [playLoopInterval, setPlayLoopInterval] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { getAnegdotRandom, transformDataR } = newsService();

  useEffect(() => { }, [news]);

  const toggleShowFavorite = () => {
    stopPlayLoop();
    setShowFavorites((prevState => !prevState));
  }

  const updateNews = () => {
    setIsLoading(true);

    getAnegdotRandom()
      .then((jsonData) => {
        const transData = transformDataR(jsonData);
        setIsLoading(false);
        setNews([transData]);
      });
  }

  const loop = async () => {
    const res = await newsService.getAnegdotRandom();
    console.log("playLoop -res.value", res.value);
    setNews([res]);
  }

  const stopPlayLoop = () => {
    clearInterval(intervalLoopHandle);
  }

  const togglePlayLoop = () => {
    setShowFavorites(false);

    if (playLoopInterval) {
      setPlayLoopInterval(false);
      stopPlayLoop();

    } else {
      setPlayLoopInterval(true);
      intervalLoopHandle = setInterval(() => { loop(); }, 3000);

    }


  }


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

  useEffect(() => {
    if (unmounted.current) return;
    updateNews();
    const lastfavoritesElements = localStorage.getItem('favoritesElements') || '[]';
    setFavoriteNews(JSON.parse(lastfavoritesElements));
    return () => { unmounted.current = true }
    // eslint-disable-next-line
  }, []);

  const nextNews = () => {
    stopPlayLoop();
    setShowFavorites(false);
    updateNews();
  }

  const toggleNewsState = () => {
    let newData = news[0];
    newData.isFavorite = !newData.isFavorite;
    setNews(
      [newData]
    );
  }

  const toggleFavorite = (id) => {
    toggleNewsState();
    const inx = favoriteNews.findIndex(elem => elem.id === id);
    if (inx < 0) {
      appendFavorite(id);
    } else {
      deleteFavorite(id);
    }

  }

  function deleteNews(title) {
    setNews(
      news.filter((newsElement, index) => {
        if (newsElement.id > index) {
          newsElement.id = index;
        }
        return newsElement.title !== title
      }).map((newsElement, index) => {
        if (newsElement.id > index) {
          newsElement.id = index
        }
        return newsElement
      })
    )

  }

  let favoriteNewsLength = () => {
    return favoriteNews.length || '0'
  }

  toggleFavorite.propTypes = {
    id: PropTypes.number
  }


  const listItems = showFavorites ? favoriteNews : news;

  let colorLoop = playLoopInterval ? 'gold' : 'gray';

  const buttonGroup = <div className="buttonGroup">
    <button onClick={cleanFavorites}>Очистить Избранные</button>
    <button onClick={toggleShowFavorite}>Избранные ({favoriteNewsLength()})</button>
    <button onClick={nextNews}><i className="fas fa-angle-double-right"></i></button>
    <button onClick={togglePlayLoop}><i style={{ color: colorLoop }} className="fas fa-play-circle"></i></button>
  </div>;

  // if (isLoading) {
  return (
    <div className="App">
      <h1>Anegdots interactive</h1>
      {buttonGroup}
      {isLoading && <div className="loader">Loading...</div>}
      {isLoading && <NewsList newsElement={listItems} onToggle={toggleFavorite} delete={deleteNews}></NewsList>}
    </div>
  );
  // }

  // return (
  //   <div className="App">
  //     <h1>Anegdots interactive</h1>
  //     {buttonGroup}
  //     {listItems.length ? <NewsList newsElement={listItems} onToggle={toggleFavorite} delete={deleteNews}></NewsList> : <p>Нет шуток</p>}

  //   </div>
  // );
}

export default App;
