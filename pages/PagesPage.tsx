import React from 'react';
// FIX: Use namespace import for framer-motion to handle potential module resolution issues with TypeScript.
import * as FramerMotion from 'framer-motion';
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
        <FramerMotion.motion.ul 
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <FramerMotion.motion.li variants={itemVariants}>
            <StyledButton as="Link" to="/radio">Radio Page</StyledButton>
          </FramerMotion.motion.li>
          <FramerMotion.motion.li variants={itemVariants}>
            <StyledButton as="Link" to="/whatsappchatform">WhatsApp Chat Form Page</StyledButton>
          </FramerMotion.motion.li>
        </FramerMotion.motion.ul>
      </PageContainer>
    </PageTransition>
  );
};

export default PagesPage;