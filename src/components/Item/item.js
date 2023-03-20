import { Link } from "react-router-dom"
/*import portada1 from '../../assets/peli-1.jpg'
import portada2 from '../../assets/peli-2.jpg'
import portada3 from '../../assets/peli-3.jpg'
import portada4 from '../../assets/peli-4.jpg'*/

const Item = ( {item} ) => {

    return (
        <div className='imagen'>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default Item