'use client';

import React from 'react';
import { FileText, CheckSquare, Receipt, FolderOpen } from 'lucide-react';
import FloatingCard from './FloatingCard';

// Main Hero Component
export default function FloatingHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f2f4f7] font-sans">
      {/* Blurred background blobs */}
      {/* <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E8E3FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse-slow"></div>
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#D6E5FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#EBE5FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div> */}

      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:pt-16 lg:pb-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 min-h-screen lg:h-screen items-start">

        {/* Left Content - Takes up roughly 5 columns */}
        <div className="w-full lg:col-span-6 relative z-20 pt-10 lg:pt-0">
          <h1 className="text-4xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-8 text-[#7B6FA5]">
            A single platform to <br className="hidden lg:block" />
            <span className="font-semibold text-[#7B6FA5]">manage</span> <span className="text-[#7B6FA5]">every part of</span> <br className="hidden lg:block" />
            <span className="text-[#7B6FA5]">your </span> <span className="font-semibold text-[#7B6FA5]">legal work</span>
          </h1>
          <p className="text-xl text-[#2e43ff] leading-relaxed tracking-light font-medium w-full max-w-lg">
            Track matters, coordinate schedules, manage <br />clients, centralize documents, and handle <br />communication - all in one system.
          </p>
        </div>

        {/* Right Content - Visuals - Takes up remaining 7 columns but overflows */}
        <div className="lg:col-span-6 relative h-full w-full hidden lg:block">
          {/* Absolute positioning of cards relative to this container */}
          {/* Absolute positioning of cards relative to this container */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Background Empty Pills - Matching the 'Stripes' look */}
            <FloatingCard
              variant="empty"
              rotation={2}
              className="top-[10%] right-[-50%] opacity-100"
              width="400px"
              height="100px"
            />
            <FloatingCard
              variant="empty"
              rotation={0}
              className="top-[30%] right-[-45%] opacity-100"
              width="500px"
              height="100px"
            />
            <FloatingCard
              variant="empty"
              rotation={0}
              className="top-[50%] right-[-55%] opacity-100"
              width="450px"
              height="100px"
            />
            <FloatingCard
              variant="empty"
              rotation={-12}
              className="bottom-[20%] left-[-155%] opacity-100"
              width="320px"
              height="100px"
            />
            <FloatingCard
              variant="empty"
              rotation={0}
              className="bottom-[-5%] right-[195%] opacity-100"
              width="450px"
              height="110px"
            />

            {/* Content Cards - Precise Positioning */}

            {/* Billing - Blue - Top Right */}
            <FloatingCard
              color="blue"
              rotation={12}
              icon={<Receipt className="w-8 h-8 text-white" strokeWidth={2.5} />}
              label="Billing"
              className="top-[45%] right-[78%] z-10 shadow-xl text-2xl"
              width="340px"
              height="90px"
            />

            {/* Matters - Orange - Center Left */}
            <FloatingCard
              color="orange"
              rotation={-8}
              icon={<FolderOpen className="w-8 h-8 text-white" strokeWidth={2.5} />}
              label="Matters"
              className="top-[70%] left-[-85%] z-20 shadow-xl text-2xl"
              width="300px"
              height="90px"
            />

            {/* John Doe Portal - Purple - Center Right */}
            <FloatingCard
              variant="portal"
              color="purple"
              rotation={6}
              icon={null}
              label=""
              className="top-[67%] right-[87%] z-30 shadow-xl"
              width="320px"
              height="90px"
            />

            {/* Tasks - Dark - Bottom Center */}
            <FloatingCard
              color="dark"
              rotation={0}
              icon={<CheckSquare className="w-8 h-8 text-[#FF8C42]" strokeWidth={2.5} />}
              label="Tasks"
              className="bottom-[-3%] left-[-58%] z-30 shadow-xl text-2xl"
              width="300px"
              height="90px"
            />

            {/* Documents - Dark - Bottom Right */}
            <FloatingCard
              color="dark"
              rotation={-8}
              icon={<FileText className="w-8 h-8 text-[#FF8C42]" strokeWidth={2.5} />}
              label="Documents"
              className="bottom-[-3%] right-[55%] z-10 shadow-xl text-2xl"
              width="340px"
              height="90px"
            />

          </div>
        </div>

        {/* Mobile View - Unchanged mostly, just ensuring it falls back gracefully */}
        <div className="lg:hidden col-span-12 grid grid-cols-2 gap-4 mt-8">
          <div className="bg-[#2e43ff] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
            <Receipt className="w-4 h-4" />
            <span className="font-semibold text-sm">Billing</span>
          </div>
          <div className="bg-[#E37528] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
            <FolderOpen className="w-4 h-4" />
            <span className="font-semibold text-sm">Matters</span>
          </div>
          <div className="bg-[#2C2943] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
            <CheckSquare className="w-4 h-4 text-[#FF8C42]" />
            <span className="font-semibold text-sm">Tasks</span>
          </div>
          <div className="bg-[#2C2943] text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg justify-center">
            <FileText className="w-4 h-4 text-[#FF8C42]" />
            <span className="font-semibold text-sm">Documents</span>
          </div>
          <div className="col-span-2 bg-[#B8ACDB] rounded-full px-4 py-3 flex items-center justify-center gap-3 shadow-lg">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
              <img
                src="https://cdn.theorg.com/22aae0b5-6084-49eb-b1c6-dcbd46497a14_thumb.jpg"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-white text-sm">John Doe - Portal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
