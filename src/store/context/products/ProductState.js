import React, { useReducer } from 'react';
import { ProductContext } from './productContext';
import productReducer from '../../reducers/productReducer';
import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE, REMOVE_ALL_TO_FAVORITE, REMOVE_LAST_TO_FAVORITE } from '../../typeActions';

const initialState = {
    favList: JSON.parse(localStorage.getItem('favoritesElements')) || []
}

export const ProductState = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);



    const handelaaaadFav = (item) => {
        if (state.favList.length > 9) { removeLastFavorite(); }
        dispatch({ type: ADD_TO_FAVORITE, item })

    };
    const addFavorite = item => { handelaaaadFav(item) };
    const removeFavorite = id => dispatch({ type: REMOVE_TO_FAVORITE, id });
    const removeLastFavorite = () => dispatch({ type: REMOVE_LAST_TO_FAVORITE });
    const removeFavoriteAll = id => dispatch({ type: REMOVE_ALL_TO_FAVORITE });
    const getFavorite = () => { return state.favList };
    const setFavoriteToLocal = () => { localStorage.setItem('favoritesElements', JSON.stringify(state.favList)) };

    return <ProductContext.Provider value={{
        state,
        addFavorite,
        removeFavorite,
        removeFavoriteAll,
        getFavorite,
        setFavoriteToLocal
    }}>{children}</ProductContext.Provider>

}

