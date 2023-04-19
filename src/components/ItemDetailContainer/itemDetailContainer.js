import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/itemDetail"
import Loader from "../Loader/loader"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase/config"


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        //1
        const docRef = doc(db, "productos", itemId)
        //2
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader />
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer