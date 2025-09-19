import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // FIX: Use `as const` to ensure TypeScript infers literal types for transition properties like `type`, resolving a type mismatch with Framer Motion's `Variants` type.
  const iconVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.5, rotate: -90 },
    visible: { y: 0, opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
    exit: { y: 20, opacity: 0, scale: 0.5, rotate: 90, transition: { duration: 0.2 } },
  } as const;

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 p-2 rounded-full flex items-center justify-center transition-colors duration-200 text-light-text-muted hover:text-light-text hover:bg-light-border dark:text-dark-text-muted dark:hover:text-dark-text dark:hover:bg-dark-border"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaMoon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaSun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
