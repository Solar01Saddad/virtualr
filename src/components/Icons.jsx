import React from "react";

export const BotMessageSquare = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M8 10h8M8 14h5M21 15a4 4 0 01-4 4H7l-4 4V5a2 2 0 012-2h12a4 4 0 014 4z" />
  </svg>
);

export const Fingerprint = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <path strokeWidth="2" d="M12 2v4M4 12h4M16 12h4M12 18v4" />
  </svg>
);

export const ShieldHalf = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z" />
  </svg>
);

export const BatteryCharging = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="7" width="16" height="10" strokeWidth="2" />
    <path strokeWidth="2" d="M21 10v4M11 8l-2 4h3l-2 4" />
  </svg>
);

export const PlugZap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" d="M6 10v4a6 6 0 0012 0v-4M8 3v4M16 3v4" />
  </svg>
);

export const GlobeLock = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth="2" />
    <rect x="9" y="10" width="6" height="4" strokeWidth="2" />
  </svg>
);
export const CheckCircle = ({ className = "" }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};