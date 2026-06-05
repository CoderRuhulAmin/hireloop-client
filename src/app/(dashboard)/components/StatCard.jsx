import React from 'react';
import { Card } from '@heroui/react';

const StatCard = ({ stat, className = "" }) => {
    const { title, value, icon: Icon } = stat;
    return (
        <Card className={`bg-[#18181b] border border-neutral-800 rounded-2xl p-2 ${className}`}>
            <Card.Content className='flex flex-col justify-between items-center gap-6 p-4'>
                {/* Icon wrapper */}
                {
                    Icon && (
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800 text-neutral-300">
                            <Icon width={20} height={20} />
                        </div>
                    )
                }
                {/* Content */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium text-neutral-400">
                        {title}
                    </span>
                    <span className="text-3xl font-semibold text-white tracking-tight">
                        {value}
                    </span>
                </div>

            </Card.Content>
        </Card>
    );
};

export default StatCard;