import React, { useEffect, useContext, useState } from 'react';

import { ProductContext } from '../store/context/products/productContext';
import ItemsList from '../components/news/itemsList';
import ButtonsGroup from '../components/buttonGroup';

export default function FavoriteScreen() {
    const { removeFavoriteAll, getFavorite } = useContext(ProductContext);

    const [fav, setFav] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const favorite = getFavorite();
        setFav(favorite);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // console.log('fav add', fav);
        console.log('fav loading', loading);
        setLoading(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fav]);


    const buttons = <div className="buttonGroup">
        <ButtonsGroup eventButton={removeFavoriteAll} captionButton={'Remove Favorite All'} />
    </div>;

    // const isLoading = false;

    return (
        <div>
            <h1>Fav Page</h1>
            <ItemsList items={fav} loading={loading} />
            {buttons}
        </div>
    )


}