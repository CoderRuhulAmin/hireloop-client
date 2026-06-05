import React from 'react';
import DashboardNavbar from './DashboardNavbar';

const DashboardHeader = () => {
    return (
        <header className="sticky top-0 z-50 shadow bg-[#0B0B0F]/80 backdrop-blur-xl">
            <div className="container mx-auto">
                <DashboardNavbar />
            </div>
        </header>
    );
};

export default DashboardHeader;