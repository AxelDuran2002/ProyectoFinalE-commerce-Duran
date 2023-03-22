const Contactanos = () => {
    
    return (
        <div className="contactanos">
            <h3>Contactános</h3>
            <hr/>

            <form>
                <fieldset>
                    <legend>Registro</legend>

                    <div>
                        <label for="">Nombre: </label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label for="">Apellido: </label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label for="">Email: </label>
                        <input type="text"></input>
                    </div>

                    <div>
                        <label for="">Teléfono: </label>
                        <input type="text"></input>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Contactanos