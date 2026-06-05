import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardFooter from './components/DashboardFooter';
import DashboardHeader from './components/DashboardHeader';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <Sidebar />
            <main className="flex-1 flex justify-between flex-col bg-gray-200">
                <DashboardHeader />
                {children}
                <DashboardFooter/>
            </main>
        </div>
    );
};

export default DashboardLayout;