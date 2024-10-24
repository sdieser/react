import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./sass/style.scss"
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/varietal/:idVarietal' element={<ItemListContainer />} />
            <Route path='/detail/:idWine' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
      <div>
        <ToastContainer />
      </div>
    </div>
  )
}
export default App