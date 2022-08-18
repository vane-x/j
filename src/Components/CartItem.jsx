import React from 'react'
import { useCartContext } from '../context/CartContext'
import {RiDeleteBinFill} from 'react-icons/ri'


const CartItem = ({ item }) => {
  const { deleteById, removeOneUnit } = useCartContext();

  const { name, quantity, price, id, img,} = item;

  return (
    <tr className='border-b border-gray-200'>
      <th className='flex flex-col items-center '> 
      <img className='h-32 w-36'src={img} alt="simon cat imagen" />
      <div className='flex flex-col '>
        <p className='tracking-wide text-gray-700 md:text-lg sm:text-sm font-amastic'>{name}</p>
      </div>
      </th>
      <th className='text-gray-700 md:text-lg sm:text-sm font-amastic'>
      ${price}
      </th>
      <th className='text-gray-700 md:text-lg sm:text-sm font-amastic'>
      {quantity}
      </th>
      <th className='text-gray-700  md:text-lg sm:text-sm font-amastic'>
      ${quantity * price}
      </th>
      <th>
       <button className='md:text-lg sm:text-sm'  onClick={() => removeOneUnit(id)}><RiDeleteBinFill/></button>
    </th>
     <th>
      <button className='md:text-lg sm:text-sm'onClick={() => deleteById(id)}><RiDeleteBinFill/></button>
       </th>
 </tr>
     );
    };
    
    export default CartItem;  



