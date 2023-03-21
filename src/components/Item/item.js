import './item.css'
import { Link } from "react-router-dom"

const Item = ( {item} ) => {

    return (
        <div className='portada'>
            <h2>{item.name}</h2>
            <img className='imagen' src={item.img}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default Item