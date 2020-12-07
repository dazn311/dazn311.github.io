import React from 'react';
import PropTypes from 'prop-types';
import NewsElement from './NewsElement';


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function NewsList(props) {
    console.log('props.newsElement', props.newsElement);
    if (props.newsElement.length === 0) return '';
    return (
        <ul style={styles.ul}>
            {props.newsElement.map((news, index) => (
                <NewsElement
                    index={index}
                    news={news}
                    value={news.value || 'not data'}
                    icon_url={news.icon_url}
                    key={news.id + index}
                    onChange={props.onToggle}
                    del={props.delete}></NewsElement>
            ))}
        </ul>
    )
}

NewsList.propTypes = {
    newsElement: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired

}
export default NewsList