import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleAddToCard}) => {
    // console.log(bottle)

    const {img, name, price, stock } = bottle

    return (
        <div className='card bottles'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price ${price}</p>
            <p>{stock} remaining</p>
            <button onClick={ () => handleAddToCard(bottle) }>Buy Now</button>
        </div>
    );
};

export default Bottle;