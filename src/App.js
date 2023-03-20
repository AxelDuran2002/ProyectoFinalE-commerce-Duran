import { Navbar } from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={"Compra tus películas favoritas y accede a nuestros contactos"}/> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/nosotros' element={ <Nosotros /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
