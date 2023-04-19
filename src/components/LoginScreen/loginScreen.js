import { useContext, useState } from 'react'
import { LoginContext } from '../../Context/loginContext'
import './loginScreen.css'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
        
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form.control my-2"
                        placeholder='Correo Electrónico'
                    />

                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form.control my-2"
                        placeholder='Contraseña'
                    />

                    <button className='boton-ingresar' type='submit'>Ingresar</button>
                    <Link to={"/register"}>Registrarme</Link>
                </form>
                <button className='boton-google' onClick={googleLogin}>Ingresar con una cuenta de google</button>
            </div>
        </div>
    )
}

export default LoginScreen