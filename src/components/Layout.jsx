import React from 'react'
import { Header, Footer } from '@/components';

export const Layout = ({ children }) => {
    return (
        <div className="Main flex flex-col h-screen justify-between">
            <Header />
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    );
}
