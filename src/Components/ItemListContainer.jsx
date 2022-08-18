import React, {  useEffect, useState } from "react";
import { collection, getDocs, query, where, getFirestore, orderBy } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import Banner from "./Banner";


function ItemListContainer() {
  
  const {categoryId} = useParams ()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const db = getFirestore();
      const getItem = async () => {
          setLoading (true)
          const myItem = categoryId
              ? query(collection(db, "items"), where("category", "==", categoryId))
              :query(collection (db, 'items'), orderBy('category', 'desc'))
                         
          const querySnapshot = await getDocs(myItem)
          setItem(
              querySnapshot.docs.map((item) => {
                  return { ...item.data(), id: item.id }
                  
              })
          )
          setLoading(false)
      }
      getItem()
  }, [categoryId])



  return (
    
      <>
      <div className="bg-gradient-to-b from-gray-100">
        {loading ?
          <Spinner/>
          :
          <ItemList items={item} />
        }
      </div>
    <Banner />
    </>

  );
  
}

export default ItemListContainer;
