
import React, { useState } from "react"
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(initial)
	
	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	}
	const handleRemove = () => {
		if (count > initial) {
			setCount(count - 1);
		}
	}

	return (
		<>
			<div className="flex items-center gap-4 mt-4">
				<div className="flex flex-row space-x-4">
					<button className="p-2 bg-gray-200 focus:outline-none" onClick={handleRemove}>
						<HiOutlineMinus/>
					</button>
					<label className="p-2">{count}</label>
					<button className="p-2 bg-gray-200 focus:outline-none" onClick={handleAdd}>
					<HiOutlinePlus/>
					</button>
				</div>
				<div>
					<button onClick={() => onAdd(count)} 
						className="px-4 py-2 text-sm tracking-widest text-white duration-200 bg-red-600 rounded-lg hover:bg-red-400 transition-color focus:outline-none font-shadows">
						Agregar al Carrito
					</button>
				
			
				</div>
			</div>
		</>
	);
};

export default ItemCount;