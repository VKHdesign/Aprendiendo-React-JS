import './App.css'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import NavBar from './component/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router';


export default function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer title="Bienvenído a Mi Sitio" />} />
        <Route path="/category/:categParam" element={ <ItemListContainer />} />
        <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
        <Route path="*"  element={ <h1>404: Página no encontrada</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

