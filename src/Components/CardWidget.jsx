import React from 'react'
import {HiShoppingBag} from "react-icons/hi"
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'

const CardWidget = () => {
  const { totalCount } = useCartContext ();
 
  return (

      <NavLink to='/cart' className='flex items-center'> 
          <HiShoppingBag className='text-2xl '/>
              {totalCount() > 0 && (
                  <span className="ml-2 text-base font-medium text-gray-900">{totalCount()}</span>
              )}
      </NavLink>
      )
}

export default CardWidget

