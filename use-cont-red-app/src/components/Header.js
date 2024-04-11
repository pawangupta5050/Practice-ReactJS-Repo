import React, {useRef, useContext} from 'react'
import CartModal from './CartModal.js';
import {CartContext} from '../store/CartContext.jsx';

const Header = () => {
    const {cart} = useContext(CartContext)
    const modal = useRef();

    const cartQuantity = cart.items.length;

    function handleOpenCartClick() {
        modal.current.open();
    }

    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    return (
        <>
            <CartModal
                ref={modal}
                cartItems={cart}
                title="Your Cart"
                actions={modalActions}
            />
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1>Elegant Context</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>
    );
}

export default Header