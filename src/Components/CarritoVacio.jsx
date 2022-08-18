/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom';
import {HiArrowNarrowLeft} from 'react-icons/hi'

const CarritoVacio = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full p-6 mx-auto lg:max-w-7xl lg:items-star">
        <div>

        <iframe src="https://giphy.com/embed/d5J083vjsxXRbwnTqS" width="300" height="300" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="items-center p-4 tracking-wider uppercase text-black-500 font-shadows">
            <p className='text-2xl'>Ups!!! ¡Parece que tu carrito esta vacio!</p>
          <Link to='/' className='flex flex-row items-center pt-4'> <HiArrowNarrowLeft/> Volver al Inicio para comprar...</Link>
        </div>
    </div>
  );
};                 

export default CarritoVacio
