import React, { useContext } from 'react';
import { Product } from '@/components';
import AppContext from '../context/AppContext';

export const Products = () => {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    }

    return (
        <>
            <div className="mx-auto container">
                <div className="flex flex-wrap items-center lg:justify-between justify-center space-y-4">
                    {products.map(product => (
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
        </>
    )
}
