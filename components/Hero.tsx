
import React from 'react';

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <section 
      className="bg-dark-surface py-12 sm:py-16 md:py-20 text-center bg-gradient-to-b from-black/40 to-black/10"
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Hero;
