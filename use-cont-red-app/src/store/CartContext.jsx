import React, { createContext, useState, useReducer } from 'react'
import dummyProducts from '../dummyProducts';

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    updateItem: () => {},
})

const shoppingCartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = dummyProducts.find((product) => product.id === action.payload);
          updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
            ...state,
          items: updatedItems,
        };
    }
    
    if(action.type === 'UPDATE_ITEM'){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
            ...state,
          items: updatedItems,
        };
    }
    return state
}

const CartContextProvider = ({children}) => {

    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []})

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
    
      function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        })
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {productId, amount}
        })
      }
    
      const ctxValue = {
        items: shoppingCartState.items,
        cart: shoppingCartState,
        addItem: handleAddItemToCart,
        updateItem: handleUpdateCartItemQuantity,
      }

      return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}

export default CartContextProvider