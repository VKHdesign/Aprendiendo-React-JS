import './App.css'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import NavBar from './component/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/cartContext';
import CartContainer from './component/CartContainer/CartContainer';
import app, { getProducts } from './data/firebase';
//cartContext.Provider

export default function App() {
  console.log("Init Firebase", app)
  getProducts();


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="Bienvenído a Mi Sitio" />} />
          <Route path="/category/:categParam" element={<ItemListContainer />} />
          <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>  
  )
} 

function MyButton(props){
  return (
    <button>
      {props.children}
    </button>
  )
}
