
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
      {children}
    </section>
  );
};

export default PageContainer;
