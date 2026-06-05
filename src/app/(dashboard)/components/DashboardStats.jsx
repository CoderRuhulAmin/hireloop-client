import React from 'react';
import StatCard from './StatCard';

const DashboardStats = ({ statsData = [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                statsData.map((stat, index) => (
                    <StatCard key={stat.id || index} stat={stat} />
                ))
            }
        </div>
    );
};

export default DashboardStats;