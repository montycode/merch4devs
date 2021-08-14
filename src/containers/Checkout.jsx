import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Order, LinkButton } from '@/components';
import AppContext from '../context/AppContext';

export const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    };

    return (
        <>
        <Helmet>
            <title>Merch4Devs - Carrito</title>
        </Helmet>
            <div className="container p-6 mx-auto">
                <h3 className='text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center md:mt-0 mt-4'>{cart.length > 0 ? 'Carrito' : 'Tu carrito esta vacio 😫'}</h3>
                {cart.length > 0 && (
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        <div className="w-full bg-white rounded-lg">
                            <div className="border rounded-lg border-gray-100">
                                <div className="py-4 md:py-6 pl-8">
                                    <p className="text-base md:text-lg lg:text-xl font-bold leading-tight text-gray-800">Orders</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full whitespace-nowrap">
                                        <thead>
                                            <tr className="bg-gray-50 h-16 w-full text-sm leading-none text-gray-800">
                                                <th className="font-normal text-left pl-8">#</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Producto</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Precio</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Descripcion</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0">Cantidad</th>
                                                <th className="font-normal text-left"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="w-full">
                                        {cart.map((item, index) => (
                                            <tr key={item.id} className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">#{index + 1}</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    {item.title}
                                                    <p className="text-gray-600 font-normal mt-2">SKU: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">${item.price}</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="text-gray-600 font-normal mt-2">{item.description}</p>
                                                </td>
                                                <td className="pl-8">(1)</td>
                                                <td>
                                                    <button onClick={handleRemove(item)} className="flex items-center justify-center px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart.length > 0 && (
                    <div className="md:w-1/4 w-full">
                        <Order />
                        <LinkButton path='/checkout/information' message='Siguiente' />
                    </div>
                    )}
                </div>
                )}
                <div className="flex items-center justify-center lg:mt-16 lg:pb-48 w-full">
                    <Link to='/' className="hover:bg-gray-100 border border-indigo-700 border md:text-2xl text-lg rounded f-m-m font-semibold text-indigo-700 focus:outline-none md:px-12 px-6 md:py-6 py-3 xl:leading-4">Explorar Productos</Link>
                </div>
            </div>
        </>
    )
}
