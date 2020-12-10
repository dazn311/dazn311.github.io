import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../store/context/products/productContext';
import ItemsList from '../components/news/itemsList';
import ButtonsGroup from '../components/buttonGroup';
import GotService from '../services/GotService';

const initionalFavState = [];
var intervalLoopHandle = -1;

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = React.useState(initionalFavState);
    const [playLoopInterval, setPlayLoopInterval] = useState(false);
    const { state, setFavoriteToLocal } = useContext(ProductContext);


    const gotService = new GotService();

    const updateItems = () => {
        setIsLoading({ isLoading: true });
        gotService.getProductAll()
            .then((jsonData) => {
                const transData = gotService.transformDataR(jsonData);
                setIsLoading({ isLoading: false });
                setItems([transData]);
            });
    }

    useEffect(() => {
        updateItems();
        console.log('useEFf');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setFavoriteToLocal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.favList]);


    const stopPlayLoop = () => {
        clearInterval(intervalLoopHandle);
    }

    useEffect(() => {
        if (playLoopInterval) {
            intervalLoopHandle = setInterval(() => { updateItems(); }, 3000);
        } else {
            stopPlayLoop();
        }
        return () => { stopPlayLoop() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playLoopInterval]);

    const togglePlayLoop = () => {
        if (playLoopInterval) {
            setPlayLoopInterval(false);
        } else {
            setPlayLoopInterval(true);
        }
    }

    let loopCaptionButton = !playLoopInterval ? 'loop' : 'stop loop';

    const buttons = <div className="buttonGroup">
        <ButtonsGroup eventButton={updateItems} captionButton={'next'} />
        <ButtonsGroup eventButton={togglePlayLoop} captionButton={loopCaptionButton} />
    </div>;

    return (
        <div>
            <h1>Home Page</h1>
            <ItemsList items={items} loading={isLoading} />
            {buttons}
        </div>
    )


}