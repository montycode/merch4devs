import React from 'react'
import { Products } from '@/components'
import initialState from '../initialState'

export const Home = () => {
    return (
        <Products products={initialState.products} />
    )
}

