import { Navbar } from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Compra tus películas favoritas y accede a nuestros contactos"}/>
    </div>
  );
}

export default App;
