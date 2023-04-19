import './itemCount.css'

const ItemCount = ({stock, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn 
                ${cantidad === 1 ? 'minimo' : ''} 
                ${cantidad === 1 ? 'btn-outline-danger3' : 'btn-outline-primary'}`}
                disabled={cantidad === 1 || stock === 0}
            >
                -
            </button>

            <span className="numero">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btnPrimary3 btn-primary3" : "btn btn-primary"}
                disabled={cantidad === stock || stock === 0}
            >
                +
            </button>
            
            <br/><br/>

            <button disabled={stock === 0} onClick={agregar} className="btnInfo1 btn-info1">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount