// import { useState } from 'react';

import Header from './components/Header.js';
import Shop from './components/Shop.js';
import CartContextProvider from './store/CartContext.jsx'

function App() {

  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
