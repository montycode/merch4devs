import React from 'react'
import { Product } from '@/components'

export const Products = ({ products }) => {
    return (
        <>
            <div className="mx-auto container">
                <div className="flex flex-wrap items-center lg:justify-between justify-center space-y-4">
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
