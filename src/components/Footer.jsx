import React from 'react'

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
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Privacy Policy</a>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Security</a>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
