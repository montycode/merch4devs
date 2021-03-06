import React from 'react'

export const Product = ({ product, handleAddToCart }) => {
    return (
        <>
            <div className="mx-2 w-72 lg:mb-0 mb-8 shadow-lg">
                <div className="bg-gray-100">
                    <img src={product.image} className="w-full h-44 object-contain" />
                </div>
                <div className="bg-white">
                    {/* <div className="flex items-center justify-between px-4 pt-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                            </svg>
                        </div>
                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                            <p className="text-xs text-yellow-500">Featured</p>
                        </div>
                    </div> */}
                    <div className="p-4 space-y-2.5">
                        <div className="flex items-center justify-between">
                            <h2 className="text-black text-base font-semibold">{product.title}</h2>
                            <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                        </div>
                        <h3 className="text-indigo-700 text-4xl leading-7 font-bold">${product.price}</h3>
                        <p className="text-xs text-gray-600 mt-2">{product.description}</p>
                        {/* <div className="flex mt-4">
                            <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                            </div>
                            <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                            </div>
                        </div> */}
                        <div className="flex items-center justify-between py-4">
                            <div>
                                <button onClick={handleAddToCart(product)} className={`w-full bg-indigo-600 text-white text-center px-2 py-2 rounded-md`}>
                                    Agregar al Carrito
                                </button>
                            </div>
                            <div>
                                <button className={`w-full bg-indigo-600 text-white text-center px-2 py-2 rounded-md`}>
                                    Ver Producto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
