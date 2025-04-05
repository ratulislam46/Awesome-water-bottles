
import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle/Bottle';
import './bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../utilities/localStorage';
import Cart from './cart/Cart.jsx';

const Bottles = ({bottlesPromise}) => {

    const [card, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles)


    useEffect( () => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles)

        const storeCart = [];

        for (const id of storedCartIds){
            // console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);

            if(cartBottle){
                storeCart.push(cartBottle)
            }
        }

        console.log('store cart', storeCart);
        setCart(storeCart)

    }, [bottles])


    const handleAddToCard = (bottle) => {
        // console.log('added to card', bottle.name);

        const newCard = [...card, bottle];
        console.log(newCard)
        setCart(newCard);

        //save the bottle id in the storage
        addToStoreCart(bottle.id)
    }


    const handleRemoveFromCart = id => {
        // console.log("remove this bottle", id);

        const remaingCart = card.filter(bottle => bottle.id !== id);
        setCart(remaingCart);
        removeFromCart(id);
    }
    

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <h3>Added to cart : {card.length} </h3>

            <Cart card={card} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className='bottles-container'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCard={handleAddToCard} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;