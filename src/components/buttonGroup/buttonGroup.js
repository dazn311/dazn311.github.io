import React from 'react';
import {  Button } from 'react-bootstrap';
import './buttons.css';

export default function ButtonsGroup ({eventButton, captionButton}) { 
    return ( 
            <Button onClick={eventButton}>{captionButton}</Button>  
    )
}