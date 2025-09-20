
import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower, FaWhatsapp } from 'react-icons/fa';
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
        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-2">Explore Our Pages</h1>
        <p className="mb-8 text-lg md:text-xl text-light-text-muted dark:text-dark-text-muted">
          Discover the different sections and services of our website.
        </p>
        <h2 className="sr-only">Available Pages</h2>
        {/* FIX: Replaced MotionUl with standard motion.ul to resolve TypeScript type errors. */}
        <motion.ul 
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {/* FIX: Replaced MotionLi with standard motion.li to resolve TypeScript type errors. */}
          <motion.li variants={itemVariants}>
            <StyledButton as="Link" to="/radio">
              <FaBroadcastTower aria-hidden="true" className="w-5 h-5" />
              <span>Radio Page</span>
            </StyledButton>
          </motion.li>
          {/* FIX: Replaced MotionLi with standard motion.li to resolve TypeScript type errors. */}
          <motion.li variants={itemVariants}>
            <StyledButton as="Link" to="/whatsappchatform">
              <FaWhatsapp aria-hidden="true" className="w-5 h-5" />
              <span>WhatsApp Chat Form Page</span>
            </StyledButton>
          </motion.li>
        </motion.ul>
      </PageContainer>
    </PageTransition>
  );
};

export default PagesPage;
