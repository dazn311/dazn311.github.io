export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_TO_FAVORITE = 'REMOVE_TO_FAVORITE';
export const REMOVE_ALL_TO_FAVORITE = 'REMOVE_ALL_TO_FAVORITE';

export const addFavorite = item => { dispatch({ type: ADD_TO_FAVORITE, item }); };
export const removeFavorite = id => dispatch({ type: REMOVE_TO_FAVORITE, id });
export const removeFavoriteAll = id => dispatch({ type: REMOVE_ALL_TO_FAVORITE });
export const getFavorite = () => { return state.favList || [] };
export const setFavoriteToLocal = () => { localStorage.setItem('favoritesElements', JSON.stringify(state.favList)) };