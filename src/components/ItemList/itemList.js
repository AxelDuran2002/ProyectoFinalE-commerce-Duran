import Item from "../Item/item"
import './itemList.css'


const ItemList = ( {items} ) => {

    return (
        <div>
            <h2 className="list-container__title">Películas</h2>
            <hr/>

            <div className='row'>
                { items.map((producto) => <Item key={producto.id} item={producto}/>) }
            </div>
        </div>
    )
}

export default ItemList