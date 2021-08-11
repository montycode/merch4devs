import React from 'react'
import { Header, Footer } from '@/components';

export const Layout = ({ children }) => {
    return (
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
