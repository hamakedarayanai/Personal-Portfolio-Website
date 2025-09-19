import React from 'react';
// FIX: Import the Transition type from framer-motion.
import { motion, Transition } from 'framer-motion';

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

// FIX: Explicitly type `pageTransition` with `Transition` to resolve the type error.
const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default PageTransition;