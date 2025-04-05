
import React from 'react';
import Bottle from '../Bottle/Bottle';
import './cart.css'

const Cart = ({card, handleRemoveFromCart}) => {
    // console.log(card)
    return (
        <div className='cart-container'>
            {
                card.map(bottle=> <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=> handleRemoveFromCart(bottle.id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;