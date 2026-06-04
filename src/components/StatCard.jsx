import React from 'react';

const StatCard = ({ stat }) => {
    return (
        <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30'>
            {/* Card Glow */}
            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />
            {/* Icon */}
            <div className="relative z-10 text-white/90">
                {stat.icon}
            </div>

            {/* Number */}
            <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
                {stat.value}
            </h3>

            {/* Label */}
            <p className="relative z-10 mt-4 text-base text-gray-300">
                {stat.label}
            </p>
        </div>
    );
};

export default StatCard;