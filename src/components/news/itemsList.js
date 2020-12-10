import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './itemList';

function ItemsList({ items }) {

    const itemlist = <ul style={styles.ul}>
        {items.map((item, index) => (
            <ItemList index={index}
                item={item} value={item.value || 'not data'}
                icon_url={item.icon_url} key={item.id + index}
            ></ItemList>
        ))}
    </ul>;


    const loader = <div className="loader">Loading...</div>;
    const listItems = items.length ? itemlist : loader;

    return (listItems)
}

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


export default ItemsList