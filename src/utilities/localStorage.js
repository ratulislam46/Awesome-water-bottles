
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storeCart = JSON.parse(storedCartString);
        return storeCart;
    }
    else{
        return[];
    }
} 

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    // cart.push(id)
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}

const saveCartToLocalStorage = cart => {
    const storedCartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', storedCartStringfied);
}

const removeFromeLocalStorage = id => {
    const storedCart = getCartFromLocalStorage ();
    const remaingCart = storedCart.filter(storedId => storedId !==id);
    saveCartToLocalStorage(remaingCart);

}

export{ getCartFromLocalStorage as getStoreCart, addItemToCartLocalStorage as addToStoreCart, removeFromeLocalStorage as removeFromCart}