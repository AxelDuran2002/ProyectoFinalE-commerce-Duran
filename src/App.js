import { Navbar } from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/nosotros';
import Contactanos from './components/Contactanos/contactanos';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/nosotros' element={ <Nosotros /> }/>
        <Route path='/contactanos' element={ <Contactanos /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
