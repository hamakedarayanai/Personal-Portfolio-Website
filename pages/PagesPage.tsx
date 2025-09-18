import React from 'react';
// FIX: Use named import for framer-motion to resolve typing issues.
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import StyledButton from '../components/StyledButton';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const PagesPage: React.FC = () => {
  return (
    <PageTransition>
      <PageContainer>
        <Icon name="pages" />
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-2">Explore Our Pages</h1>
        <p className="mb-8 text-lg md:text-xl text-dark-text-muted">
          Discover the different sections and services of our website.
        </p>
        <h2 className="sr-only">Available Pages</h2>
        {/* FIX: Replaced FramerMotion.motion.ul with motion.ul to fix type error. */}
        <motion.ul 
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {/* FIX: Replaced FramerMotion.motion.li with motion.li to fix type error. */}
          <motion.li variants={itemVariants}>
            <StyledButton as="Link" to="/radio">Radio Page</StyledButton>
          </motion.li>
          {/* FIX: Replaced FramerMotion.motion.li with motion.li to fix type error. */}
          <motion.li variants={itemVariants}>
            <StyledButton as="Link" to="/whatsappchatform">WhatsApp Chat Form Page</StyledButton>
          </motion.li>
        </motion.ul>
      </PageContainer>
    </PageTransition>
  );
};

export default PagesPage;