'use client';

import React from 'react';
import { FileText, CheckSquare, Receipt, FolderOpen } from 'lucide-react';

// Reusable FloatingCard Component
interface FloatingCardProps {
  color: 'blue' | 'orange' | 'dark' | 'purple';
  rotation: number;
  icon: React.ReactNode;
  label: string;
  variant?: 'default' | 'portal';
  className?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  color,
  rotation,
  icon,
  label,
  variant = 'default',
  className = '',
}) => {
  const colorClasses = {
    blue: 'bg-[#4169E1] text-white shadow-[0_8px_32px_rgba(65,105,225,0.3)]',
    orange: 'bg-[#FF8C42] text-white shadow-[0_8px_32px_rgba(255,140,66,0.3)]',
    dark: 'bg-[#2C2943] text-[#FF8C42] shadow-[0_8px_32px_rgba(44,41,67,0.3)]',
    purple: 'bg-[#9B8CDB] text-white shadow-[0_8px_32px_rgba(155,140,219,0.3)]',
  };

  if (variant === 'portal') {
    return (
      <div
        className={`absolute bg-[#B8ACDB] rounded-full shadow-[0_12px_40px_rgba(155,140,219,0.4)] px-6 py-3 transition-all duration-500 hover:scale-105 ${className}`}
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          width: '220px',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6B5B95] flex items-center justify-center flex-shrink-0 border-2 border-white/30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4169E1] to-[#6B5B95] flex items-center justify-center">
              <span className="text-white font-bold text-sm">👤</span>
            </div>
          </div>
          <div className="text-left">
            <div className="font-semibold text-white text-sm whitespace-nowrap">John Doe - Portal</div>
            <div className="text-xs text-white/70 whitespace-nowrap">Member since 2024</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`absolute ${colorClasses[color]} rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-500 hover:scale-105 whitespace-nowrap ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="font-semibold text-base">{label}</span>
    </div>
  );
};

// Main Hero Component
export default function FloatingHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F5F4F8]">
      {/* Blurred background blobs - matching the design */}
      <div className="absolute top-32 left-10 w-[500px] h-[500px] bg-[#D6E5FF] rounded-full mix-blend-normal filter blur-[120px] opacity-50"></div>
      <div className="absolute top-48 right-20 w-[450px] h-[450px] bg-[#E8E3FF] rounded-full mix-blend-normal filter blur-[100px] opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-[#C5D8FF] rounded-full mix-blend-normal filter blur-[110px] opacity-50"></div>
      <div className="absolute bottom-32 right-1/4 w-[350px] h-[350px] bg-[#DAD5F0] rounded-full mix-blend-normal filter blur-[100px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-normal leading-tight tracking-tight">
                <span className="text-[#7B6FA5] block">A single platform to</span>
                <span className="text-[#7B6FA5] font-semibold">manage</span>{' '}
                <span className="text-[#9B8CDB]">every part of</span>
                <br />
                <span className="text-[#9B8CDB]">your </span>
                <span className="text-[#7B6FA5] font-semibold">legal work</span>
              </h1>
              <p className="text-base lg:text-lg text-[#6B6B8D] leading-relaxed max-w-md">
                Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
              </p>
            </div>
          </div>

          {/* Right - Floating Elements */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0">
              {/* Billing - Top Right */}
              <FloatingCard
                color="blue"
                rotation={8}
                icon={<Receipt className="w-5 h-5" strokeWidth={2.5} />}
                label="Billing"
                className="top-8 right-0"
              />
              
              {/* Matters - Left */}
              <FloatingCard
                color="orange"
                rotation={-12}
                icon={<FolderOpen className="w-5 h-5" strokeWidth={2.5} />}
                label="Matters"
                className="top-40 left-4"
              />
              
              {/* Portal Card - Center */}
              <FloatingCard
                color="purple"
                rotation={3}
                icon={null}
                label=""
                variant="portal"
                className="top-44 right-8"
              />
              
              {/* Tasks - Bottom Center */}
              <FloatingCard
                color="dark"
                rotation={-8}
                icon={<CheckSquare className="w-5 h-5" strokeWidth={2.5} />}
                label="Tasks"
                className="bottom-28 left-32"
              />
              
              {/* Documents - Bottom Right */}
              <FloatingCard
                color="dark"
                rotation={-4}
                icon={<FileText className="w-5 h-5" strokeWidth={2.5} />}
                label="Documents"
                className="bottom-8 right-16"
              />
            </div>
          </div>

          {/* Mobile: Simplified version */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            <div className="bg-[#4169E1] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
              <Receipt className="w-4 h-4" />
              <span className="font-semibold text-sm">Billing</span>
            </div>
            <div className="bg-[#FF8C42] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
              <FolderOpen className="w-4 h-4" />
              <span className="font-semibold text-sm">Matters</span>
            </div>
            <div className="bg-[#2C2943] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
              <CheckSquare className="w-4 h-4" />
              <span className="font-semibold text-sm">Tasks</span>
            </div>
            <div className="bg-[#2C2943] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
              <FileText className="w-4 h-4" />
              <span className="font-semibold text-sm">Documents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
