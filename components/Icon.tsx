import React from 'react';

interface IconProps {
  name: 'profile' | 'pages' | 'sites' | 'radio' | 'chat';
  className?: string;
}

const icons = {
  profile: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
  pages: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  sites: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.916 17.916 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  radio: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.045A9.75 9.75 0 0 1 12 14.25m8.25.75-2.25-.45m-12 0 .603 1.206a1.125 1.125 0 0 1-.568 1.518l-1.32.66a1.125 1.125 0 0 1-1.518-.568L3 15.75m11.25.75 2.25.45m-1.28-4.575a4.5 4.5 0 0 0-8.956 0M12 6.75a4.5 4.5 0 0 1 4.5 4.5m-4.5-4.5a4.5 4.5 0 0 0-4.5 4.5m16.5 0a11.256 11.256 0 0 1-2.036 6.435 11.256 11.256 0 0 1-6.435 2.036m0 0a11.256 11.256 0 0 1-6.435-2.036 11.256 11.256 0 0 1-2.036-6.435m0 0a11.256 11.256 0 0 1 2.036-6.435m0 0a11.256 11.256 0 0 1 6.435-2.036m6.435 2.036a11.256 11.256 0 0 1 2.036 6.435" />
    </svg>
  ),
  chat: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.53-.388A5.863 5.863 0 0 1 5.145 14.53 5.863 5.863 0 0 1 3 9.358a9.76 9.76 0 0 1-.388-2.53C2.612 2.27 6.644 0 12 0c4.97 0 9 3.744 9 8.25Z" />
    </svg>
  ),
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const defaultClassName = "w-16 h-16 mx-auto mb-4 text-primary";
  return (
    <div className={`${defaultClassName} ${className || ''}`}>
      {icons[name]}
    </div>
  );
};

export default Icon;
