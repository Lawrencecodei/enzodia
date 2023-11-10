import React from 'react';
import './infoCard.css';


const InfoCard = ({title, imgSrc, text }) => {
    return (
        <div className='app__infoCard-container'>
        <div className='app__infoCard-image'>
        <img src={imgSrc} alt=""/>
        </div>
            
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default InfoCard;
