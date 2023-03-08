import './itemListContainer.css'

const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="list_container">
            <h2 className="list_container_title">¡Les damos la bienvenida a los Fans de Marvel!</h2>
            <hr/>

            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer