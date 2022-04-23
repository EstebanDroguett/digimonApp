import React from 'react';
import { Link } from 'react-router-dom';

export const DigimonCard = ({
    name,
    img,
    level
}) => {
    return (
        <div className='card'>
            <p className='card-text'>{name}</p>
            <img src={img} alt={name} ></img>
            <p className='card-text'>{level}</p>
            <Link to={`/digimon/${name}`}>
                More...
            </Link>
        </div>
    )
}
