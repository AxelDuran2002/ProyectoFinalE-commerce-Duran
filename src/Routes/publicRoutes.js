import LoginScreen from '../components/LoginScreen/loginScreen';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterScreen from '../components/RegisterScreen/registerScreen';

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={ <LoginScreen /> }/>
            <Route path='/register' element={ <RegisterScreen /> }/>
            <Route path='*' element={ <Navigate to={"/login"}/> }/>
        </Routes>
    )
}

export default PublicRoutes