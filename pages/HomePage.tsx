
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import StyledButton from '../components/StyledButton';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/hamakedarayanai/' },
  { name: 'X', href: 'https://x.com/hamakedarayanai' },
  { name: 'Instagram', href: 'https://www.instagram.com/hamakedarayanai/' },
  { name: 'YouTube', href: 'https://www.youtube.com/@hamakedarayanai' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hamakedarayanai' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@hamakedarayanai' },
];

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

const motionViewConfig = {
    once: true,
    amount: 0.3
}

// FIX: Assign motion components to variables to help TypeScript resolve their types correctly.
const MotionH1 = motion.h1;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionDiv = motion.div;

const HomePage: React.FC = () => {
  const iconRef = useRef(null);
  const isIconInView = useInView(iconRef, { once: true, amount: 0.5 });

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });

  const listRef = useRef(null);
  const isListInView = useInView(listRef, motionViewConfig);
  
  return (
    <PageTransition>
      <PageContainer>
        {/* Wrap Icon to control its entry animation via scroll */}
        <MotionDiv
            ref={iconRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isIconInView ? 1 : 0, y: isIconInView ? 0 : 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Icon name="profile" disableAnimation />
        </MotionDiv>

        <MotionH1 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: isHeadingInView ? 0 : 30, opacity: isHeadingInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Hamake D. Arayanai
        </MotionH1>
        
        <h2 className="sr-only">Social Media Connections</h2>
        <MotionUl 
          ref={listRef}
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate={isListInView ? "visible" : "hidden"}
        >
          {socialLinks.map((link) => (
            <MotionLi key={link.name} variants={itemVariants}>
              <StyledButton 
                as="a" 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </StyledButton>
            </MotionLi>
          ))}
        </MotionUl>
      </PageContainer>
    </PageTransition>
  );
};

export default HomePage;