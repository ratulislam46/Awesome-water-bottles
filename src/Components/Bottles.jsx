
import React, { use, useState } from 'react';
import Bottle from './Bottle/Bottle';
import './bottles.css'

const Bottles = ({bottlesPromise}) => {

    const [card, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles)

    const handleAddToCard = (bottle) => {
        // console.log('added to card', bottle.name);

        const newCard = [...card, bottle];
        console.log(newCard)
        setCart(newCard)
    }
    

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <h3>Added to cart : {card.length} </h3>
            <div className='bottles-container'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCard={handleAddToCard} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;