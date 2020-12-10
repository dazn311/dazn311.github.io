import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../store/context/products/productContext';
import PropTypes from 'prop-types';

export default function ItemList({ item, value, icon_url }) {
    const [isFav, setIsFav] = useState(false);
    const { addFavorite, removeFavorite } = useContext(ProductContext);

    const toggleFavState = (id) => {
        if (!isFav) {
            addFavorite({ ...item, isFavorite: true });
        } else {
            removeFavorite(item.id);
        }

        setIsFav(!isFav);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { setIsFav(item.isFavorite) }, []);

    const classes = ['animate__animated', 'animate__backInLeft']
    let colorStar = isFav ? 'gold' : 'gray';

    return (
        <li className={classes.join(' ')} style={styles.li} >
            <img src={icon_url} alt={''}></img>
            <strong>{value}</strong>
            <button onClick={() => toggleFavState(item.id)} style={styles.span2}><i style={{ color: colorStar }} className="fas fa-star"></i></button>
        </li>
    )
}

ItemList.protoTypes = {
    item: PropTypes.object.isRequired,
    value: PropTypes.string,
    icon_url: PropTypes.string
}

const styles = {
    li: {
        padding: '5px 10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '5px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    span: {
        marginRight: '3px'
    },
    span2: {
        marginLeft: '3px'
    }
}


