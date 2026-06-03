import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 shadow bg-[#0B0B0F]/80 backdrop-blur-xl">
            <div className="container mx-auto">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;