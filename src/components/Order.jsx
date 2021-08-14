import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

export const Order = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    const handleTotalSum = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    let subtotal = handleTotalSum();
    let VAT = subtotal + (subtotal * 0.16);
    const total = VAT.toFixed(2);

    return (
        <div className="flex flex-col my-5 justify-center items-center shadow-lg">
            <h6 className="text-black font-medium my-4">Resumen del Pedido</h6>
            <div className="flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p className="text-gray-400 ml-4">Subtotal</p>
                <p className="text-black mr-4">${subtotal}</p>
            </div>
            <div className="flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p className="text-gray-400 ml-4">Envio</p>
                <p className="text-black mr-4">$15</p>
            </div>
            <div className=" flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p className="text-gray-400 ml-4">IVA</p>
                <p className="text-black mr-4">16%</p>
            </div>
            <div className="flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p className="text-gray-400 ml-4">Total</p>
                <p className="text-indigo-600 mr-4">${total}</p>
            </div>
            {/* <div className="flex flex-col justify-between items-center px-3 py-5 w-full">
                <div className="mb-5 flex flex-col min-w-full">
                    <label for="code" className="font-medium text-black">add promo code</label>
                    <input type="text" id="code" className="w-full py-2 border mt-3 border-gray-300 rounded-md" />
                </div>
                <button className="w-full bg-indigo-600 text-white px-2 py-2 rounded-md">
                    Apply code
                </button>
            </div> */}
        </div>
    )
}
