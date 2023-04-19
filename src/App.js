import { CartProvider } from './Context/cartContext';
import { LoginProvider } from './Context/loginContext';
import AppRouter from './Routes/appRouter';

function App() {
  return (
      <LoginProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </LoginProvider>
  );
}

export default App;
