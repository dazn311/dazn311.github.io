import React, { useReducer } from 'react';
import { ProductContext } from './productContext';
import productReducer from '../../reducers/productReducer';
import { addFavorite, removeFavorite, removeFavoriteAll, getFavorite, setFavoriteToLocal } from '../../actions/fav-actions';

const initialState = {
    favList: JSON.parse(localStorage.getItem('favoritesElements')) || []
}

export const ProductState = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    return <ProductContext.Provider value={{
        state,
        addFavorite,
        removeFavorite,
        removeFavoriteAll,
        getFavorite,
        setFavoriteToLocal
    }}>{children}</ProductContext.Provider>
}

