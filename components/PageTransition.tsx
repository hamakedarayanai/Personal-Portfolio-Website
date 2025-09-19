import React from 'react';
// FIX: Import the Transition type from framer-motion.
// FIX: Removed `Transition` import as it was causing a build error.
import { motion } from 'framer-motion';

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

// FIX: Use `as const` to ensure TypeScript infers literal types for `type` and `ease`, resolving a type mismatch with Framer Motion's `Transition` type.
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
} as const;

// FIX: Assign motion component to a variable to help TypeScript resolve its type correctly.
const MotionDiv = motion.div;

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <MotionDiv
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </MotionDiv>
);

export default PageTransition;
