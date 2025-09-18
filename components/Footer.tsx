
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface text-dark-text-muted text-center py-4 mt-12 shadow-inner" role="contentinfo">
      <div className="container mx-auto px-4">
        <p>© {currentYear} Hamake D. Arayanai | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
