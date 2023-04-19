import './itemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/itemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        //1
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        //2
        getDocs(q)
            .then((res) => {
                setProductos( res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => setLoading(false))

        
    }, [categoryId])

    return (
        <div className="container my-5">
            {loading
                ? <Loader />
                : <ItemList items={productos} />
            }

        </div>
    )
}

export default ItemListContainer