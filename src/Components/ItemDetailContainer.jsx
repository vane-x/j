import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc} from 'firebase/firestore'

import Spinner from './Spinner';
 

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState (false)
  const {itemId } = useParams()

useEffect(() => {
  const db = getFirestore();

  const itemsCollection = doc(db, 'items', itemId);
  getDoc (itemsCollection).then ((snapshot)=>{
  const cat={ id: snapshot.id, ...snapshot.data()}
  setItem (cat)
  setLoading(false)
  });
}, [itemId]) ;
 


  return (
    <div>
        { loading ?  
          <Spinner/>
          :
        <ItemDetail id={itemId} item={item} stock={item.stock}/>
 
        }
    </div>
  )
}
   
export default ItemDetailContainer;