import './item.css'
import { Link } from "react-router-dom"

const Item = ( {item} ) => {

    return (
        <div className='portada'>
            <h2 className='nombre'>{item.name}</h2>
            <img className='imagen' src={item.img}/>
            <p className='descrip'>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default Item