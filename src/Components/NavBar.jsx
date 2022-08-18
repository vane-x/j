
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoNavBar from './LogoNavBar';



const NavBar = () => {

  const [show, setShow] = useState(false);
  const cambiarTexto =(e) => {
    if(e.target.innerHTML === 'Ver Categorias'){
      e.target.innerHTML = 'Ocultar Categorias';
    }else{
      e.target.innerHTML='Ver Categorias';
    }
  }

  return (
    <>
    <div className='flex items-center justify-around p-2 bg-red-600 lg:flex-row lg:max-w-7xl '>
         <Link to="/" className="block w-60"> <LogoNavBar/> </Link>  
            <Link to='/' className='pt-4 pb-4 text-2xl font-bold tracking-widest uppercase font-shadows'>Simon´s Cat Shop</Link>
      <CardWidget/>
    </div>

    <div className="bg-gray-200">
            <div className="flex items-center justify-center py-2 border-b border-gray-200 lg:px-10 sm:px-2">
                  <ul className="flex items-center space-x-7">
                      <li className="p-2 text-base tracking-widest text-gray-800 uppercase font-boogaloo"><Link to="/">Home</Link>
                      </li>
                      <li>
                          <button onClick={() => setShow(!show)} 
                             className="p-2 text-base tracking-widest text-gray-800 uppercase font-boogaloo focus:outline-none"> 
                             <p onClick ={cambiarTexto} >Ver Categorias</p>
                          </button>
                      </li>
                  </ul>
            </div>
         
    
          <hr className="w-full border-gray-300" />
            {show ? (
              <ul className="flex justify-center py-2 space-x-6 text-xs font-medium tracking-widest text-gray-600 uppercase select-none font-boogaloo ">
                <Link to="/category/tote">Totes</Link>
                <Link to="/category/home"> Hogar</Link>
                <Link to="/category/accesorios">Accesorios</Link>
              </ul>
            ) :
             <>
             </> }
    </div>       
    </>
    
  );
};

export default NavBar;
