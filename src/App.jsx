import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Nav from './componentes/Nav/Nav'
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <Nav/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element= {<Cart/>} />
            <Route path="/checkout" element= {<Checkout/>} />

          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </div>

  )
}

export default App
