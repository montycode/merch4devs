import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="pt-16">
            <div tabIndex="0" aria-label="footer" className="focus:outline-none w-full bg-indigo-700 py-12">
                <div className="container mx-auto xl:flex text-center xl:text-left lg:text-left">
                    <div className="xl:w-3/6 sm:w-full mb-6 xl:mb-0">
                        <p tabIndex="0" className="focus:outline-none text-white text-center xl:text-left">2020 Merch4Devs. All Rights Reserved</p>
                    </div>
                    <div className="xl:w-3/6 sm:w-full">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <Link className="focus:outline-none focus:underline" to='/'>Terms of service</Link>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <Link className="focus:outline-none focus:underline" to='/'>Privacy Policy</Link>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <Link className="focus:outline-none focus:underline" to='/'>Security</Link>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <Link className="focus:outline-none focus:underline" to='/'>Sitemap</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
