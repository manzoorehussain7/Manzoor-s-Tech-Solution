import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Modern geometric vector emblem */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 shadow-sm shadow-purple-600/30 text-white shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 drop-shadow-sm"
        >
          {/* Stylized M-monogram integrated with tech node */}
          <path d="M4 19V5l8 7 8-7v14" />
          <circle cx="12" cy="12" r="1.5" fill="white" stroke="none" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-violet-400 ring-2 ring-white" />
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`text-[17px] font-extrabold tracking-tight font-display ${isLight ? 'text-white' : 'text-slate-900'}`}>
          Manzoor's
        </span>
        <span className={`text-[11px] font-semibold tracking-wider uppercase ${isLight ? 'text-purple-200' : 'text-purple-700'}`}>
          Tech Solutions
        </span>
      </div>
    </div>
  );
};
