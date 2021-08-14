import React, { useRef, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { Order, LinkButton } from '@/components';
import AppContext from '../context/AppContext';

export const Information = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const { cart } = state;
    const history = useHistory();
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer ={
            'fullName': formData.get('fullName'),
            'address': formData.get('address'),
            'email': formData.get('email'),
            'apto': formData.get('apto'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'city': formData.get('city'),
            'zip': formData.get('zip'),
            'phone': formData.get('phone'),
        }
        console.log(buyer);
        addToBuyer(buyer);
        history.push('/checkout/payment');
    };

    return (
        <>
            <div className="container p-6 mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        <form ref={form} onSubmit={handleSubmit} className="container mx-auto bg-white shadow-lg rounded">
                            <div>
                                <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                                    <div className="flex items-center w-11/12 mx-auto">
                                        <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Informacion de Contacto</p>
                                        <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-11/12 mx-auto">
                                    <div className="container mx-auto">
                                        <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                            <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="FullName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Nombre Completo
                                                    </label>
                                                    <input type="text" name="fullName" required id="FullName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="Address" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Dirección
                                                    </label>
                                                    <input type="text" id="Address" name="address" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="email2" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Correo Electrónico
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={3} y={5} width={18} height={14} rx={2} />
                                                                <polyline points="3 7 12 13 21 7" />
                                                            </svg>
                                                        </div>
                                                        <input id="email2" name="email" required className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" placeholder="ejemplo@gmail.com" />
                                                    </div>
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="Apartamento" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Num. Interior / Apartamento
                                                    </label>
                                                    <input type="text" id="Apartamento" name="apto" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        País
                                                    </label>
                                                    <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                        <select type="text" name="country" required id="Country" className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded">
                                                            <option value="MX">México</option>
                                                            <option value="USA">Estados Unidos</option>
                                                            <option value="CA">Canadá</option>
                                                        </select>
                                                        <div
                                                            className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                                            dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                                        >
                                                            <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="6 15 12 9 18 15" />
                                                            </svg>
                                                            <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="6 9 12 15 18 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Estado/Provincia
                                                    </label>
                                                    <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                        <select type="text" name="state" required id="State/Province" className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded">
                                                            <option value="Baja California">Baja California</option>
                                                            <option value="Ciudad de Mexico">Ciudad de Mexico</option>
                                                            <option value="Nuevo Leon">Nuevo Leon</option>
                                                        </select>
                                                        <div
                                                            className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                                            dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                                        >
                                                            <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="6 15 12 9 18 15" />
                                                            </svg>
                                                            <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="6 9 12 15 18 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Ciudad
                                                    </label>
                                                    <input type="text" id="City" name="city" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="ZIP" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        ZIP/Postal Code
                                                    </label>
                                                    <input type="text" id="ZIP" name="zip" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                                </div>
                                                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                    <label htmlFor="Phone" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        Teléfono
                                                    </label>
                                                    <input type="tel" id="Phone" name="phone" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/4 w-full">
                        <Order />
                        <div className="flex flex-col justify-center items-center py-5">
                            <button onClick={handleSubmit} className={`w-full bg-indigo-600 text-white text-center px-2 py-2 rounded-md`}>
                                Pagar
                            </button>
                        </div>
                        <LinkButton path='/checkout' message='Cancelar' accent={true} />
                    </div>
                </div>
            </div>
        </>
    )
}
