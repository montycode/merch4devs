import React from 'react'
import { Link } from 'react-router-dom'

export const LinkButton = ({ path, message, accent }) => {
    return (
        <div className="flex flex-col justify-center items-center py-5">
            <Link to={path} className={`w-full ${accent ? 'focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500  hover:bg-gray-200 transition duration-150 ease-in-out' : 'bg-indigo-600 text-white'} text-center px-2 py-2 rounded-md`}>
                {message}
            </Link>
        </div>
    )
}
