import React from 'react';
// FIX: Use namespace import for framer-motion to handle potential module resolution issues with TypeScript.
import * as FramerMotion from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -15,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <FramerMotion.motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </FramerMotion.motion.div>
);

export default PageTransition;