import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/loginContext';
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';


const AppRouter = () => {
    const { user } = useContext(LoginContext)

    return (
        <BrowserRouter>
            {
              user.logged
              ? <PrivateRoutes />
              : <PublicRoutes />
            }
    
        </BrowserRouter>
    )
}

export default AppRouter