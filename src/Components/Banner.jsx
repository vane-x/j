/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';


const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full p-2 mt-8 bg-red-600 lg:flex-row lg:max-w-7xl lg:items-star">
          <div className="flex items-center justify-center">
            <span className='pt-2 pr-4 text-base font-bold tracking-widest uppercase font-shadows'>Gracias por visitar nuestra tienda, te esperamos nuevamenete! </span>      
          </div>
  
          <iframe src="https://giphy.com/embed/POInrdakrvxdicK9Ym" width="100" height="100" frameBorder="0" allowFullScreen></iframe>
            
      </div>
   )
};

export default Banner;
