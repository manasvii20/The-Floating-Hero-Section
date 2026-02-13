'use client';

import React from 'react';

// Reusable FloatingCard Component
interface FloatingCardProps {
    color?: 'blue' | 'orange' | 'dark' | 'purple';
    rotation: number;
    icon?: React.ReactNode;
    label?: string;
    variant?: 'default' | 'portal' | 'empty';
    className?: string;
    width?: string;
    height?: string;
    // Added for better extensibility if needed later
    onClick?: () => void;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
    color = 'blue',
    rotation,
    icon,
    label,
    variant = 'default',
    className = '',
    width,
    height,
    onClick,
}) => {
    const colorClasses = {
        blue: 'bg-[#2e43ff] text-white shadow-[0_8px_32px_rgba(65,105,225,0.3)]',
        orange: 'bg-[#E37528] text-white shadow-[0_8px_32px_rgba(227,117,40,0.3)]',
        dark: 'bg-[#2C2943] text-[#FF8C42] shadow-[0_8px_32px_rgba(44,41,67,0.3)]',
        purple: 'bg-[#9B8CDB] text-white shadow-[0_8px_32px_rgba(155,140,219,0.3)]',
    };

    if (variant === 'empty') {
        return (
            <div
                className={`absolute bg-[#e4eaf7] rounded-full ${className}`}
                style={{
                    transform: `rotate(${rotation}deg)`,
                    width: width || '200px',
                    height: height || '70px',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
            />
        );
    }

    if (variant === 'portal') {
        return (
            <div
                onClick={onClick}
                className={`absolute bg-[#B8ACDB] rounded-full shadow-[0_12px_40px_rgba(155,140,219,0.4)] px-6 py-3 transition-all duration-500 hover:scale-105 cursor-pointer flex items-center font-roboto ${className}`}
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    width: width || '240px',
                    height: height || 'auto',
                }}
            >
                <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/30 overflow-hidden">
                        <img
                            src="https://cdn.theorg.com/22aae0b5-6084-49eb-b1c6-dcbd46497a14_thumb.jpg"
                            alt="John Doe"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-left overflow-hidden">
                        <div className="font-semibold text-white text-sm whitespace-nowrap">John Doe - Portal</div>
                        <div className="text-[10px] text-white/70 whitespace-nowrap truncate">Hey! Could you please review...</div>
                        <div className="text-[9px] text-white/50 whitespace-nowrap">MAT-2233 - 2 h ago</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={onClick}
            className={`absolute ${colorClasses[color]} rounded-full px-6 py-4 flex items-center gap-3 transition-all duration-500 hover:scale-105 whitespace-nowrap cursor-pointer font-roboto ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                width: width || 'auto',
                height: height || 'auto',
            }}
        >
            <div className="flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <span className="font-semibold">{label}</span>
        </div>
    );
};

export default FloatingCard;
