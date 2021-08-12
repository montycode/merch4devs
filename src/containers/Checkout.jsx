import React from 'react'
import { Order, LinkButton } from '@/components'

export const Checkout = () => {
    return (
        <>
            <div className="container p-6 mx-auto">
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
                                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">#1</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">SKU: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="pl-8">(1)</td>
                                                <td>
                                                    <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                                                        <p className="text-sm leading-none text-indigo-700">Eliminar</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">#1</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">SKU: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="pl-8">(1)</td>
                                                <td>
                                                    <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                                                        <p className="text-sm leading-none text-indigo-700">Eliminar</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">#1</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">SKU: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="pl-8">(1)</td>
                                                <td>
                                                    <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                                                        <p className="text-sm leading-none text-indigo-700">Eliminar</p>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        <Order />
                        <LinkButton path='/checkout/information' message='Siguiente' />
                    </div>
                </div>
            </div>
        </>
    )
}
