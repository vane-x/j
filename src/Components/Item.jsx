import React from "react";
import { Link } from "react-router-dom";


const Item = ({ list }) => {
  const { id, name, price, description, img } = list;

  return (
    <div className="relative mt-4 overflow-hidden rounded shadow-lg group">
        <img className="w-full " src={img} alt="simon cat imagen" />
        <div className="px-4 py-4">
            <h2 className="mb-2 text-base tracking-wider text-gray-900 uppercase font-boogaloo">
              {name}
            </h2>
            <div>
              <p className="inline-block pb-2 text-sm font-bold tracking-wide text-gray-700 font-amastic">
                {description}
              </p>
            </div>
            <hr className="w-full mb-4 border-gray-300" />
            <div className="flex justify-between border-gray-300">
              <p className="inline-block pt-2 text-lg text-gray-700 font-boogaloo">${price}</p>
             
              <button className="px-4 py-2 text-xs tracking-widest text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color font-shadows focus:outline-none"> 
              <Link to={`/detalleProducto/${id}`}>Ver mas detalle </Link>
              </button>
            </div>
        </div>
      </div>
  );
};

export default Item;
