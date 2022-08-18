import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({item, id, stock}) => {
  const [countToAdd, setCountToAdd] = useState(0);
  const { addToCart, unitsPerProduct } = useCartContext();
  
  const handleOnAdd = (count) => {
    if (count + unitsPerProduct(id) > stock) {
      const availableToAdd = stock - unitsPerProduct(id);
      return alert(`Solamente podes agregar ${availableToAdd} productos`);
    }
    setCountToAdd(count);
    addToCart(item, count);
  };

  return (
        <div className="w-full p-6">
              <div className="flex flex-col items-center justify-center max-w-full mx-auto lg:flex-row lg:max-w-7xl lg:items-star">
                  <div className="relative overflow-hidden group lg:w-1/3">
                    <img src={item.img} alt="imagen" />
                  </div>
                <div className="w-full px-6 lg:py-6 lg:w-1/2">
                      <h1 className="pb-3 text-lg font-medium tracking-wider text-gray-800 uppercase font-boogaloo"> {item.name} </h1>
                      <p className="font-boogaloo">${item.price}</p>
                      <p className="pt-2 text-sm font-bold tracking-wider text-gray-700 uppercase font-amastic"> Categoria:{item.category}</p>
                      <p className="pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase font-boogaloo">
                        Descripción
                      </p>
                      <p className="pb-3 text-lg font-bold tracking-wider text-gray-800 font-amastic">{item.description}</p>
                      <hr className="w-full mt-1 border-gray-200" />
                      <p className="pt-3 pb-2 text-base font-medium tracking-wider text-gray-700 uppercase font-boogaloo ">
                        Detalle del Producto
                      </p>
                      <p className="pb-3 text-lg font-bold tracking-wider font-amastic">{item.comments}</p>
                      <hr className="w-full mt-1 border-gray-200" />

                      <div className="pt-4">
                      {countToAdd === 0 ? ( 
                         <ItemCount stock={stock}  initial={1}onAdd= {handleOnAdd} />
                      ) : (
                        <Link to="/cart" className='px-4 py-2 text-sm tracking-widest text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none font-shadows'> Ir a mi carrito</Link>
                      
                      )}
                      </div>
                </div>
            </div>
      </div> 
  );
};

export default ItemDetail;
