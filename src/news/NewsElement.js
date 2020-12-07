import React from 'react';
import PropTypes from 'prop-types'

function NewsElement({ news, value, icon_url, onChange }) {
    const classes = ['animate__animated', 'animate__backInLeft']
    // console.log('NewsElement news.id', news.id);
    let colorStar = news.isFavorite ? 'gold' : 'gray';
    // console.log('NewsElement news.isFavorite', news.isFavorite);
    return (
        <li className={classes.join(' ')} style={styles.li} >

            <img src={icon_url} alt={icon_url}></img>
            <strong>{value}</strong>
            <button onClick={() => onChange(news.id)} style={styles.span2}><i style={{ color: colorStar }} className="fas fa-star"></i></button>
        </li>
    )
}

NewsElement.protoTypes = {
    news: PropTypes.object.isRequired,
    value: PropTypes.string,
    icon_url: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default NewsElement

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


