import { Navbar } from '../components/Navbar/navbar';
import ItemListContainer from '../components/ItemListContainer/itemListContainer';
import Nosotros from '../components/Nosotros/nosotros';
import ItemDetailContainer from '../components/ItemDetailContainer/itemDetailContainer';
import Cart from '../components/Cart/cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from '../components/Checkout/checkout';

const PrivateRoutes = () => {

    return (
        <>
            <Navbar/>

                <Routes>
                    <Route path='/' element={ <ItemListContainer /> }/>
                    <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
                    <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
                    <Route path='/cart' element={ <Cart /> }/>
                    <Route path='/checkout' element={ <Checkout /> }/>
                    <Route path='/nosotros' element={ <Nosotros /> }/>
                    <Route path='*' element={ <Navigate to={"/"}/> }/>
                </Routes>
        </>
    )
}

export default PrivateRoutes