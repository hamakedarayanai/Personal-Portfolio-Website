import React from 'react';
// FIX: Use named import for framer-motion to resolve typing issues.
import { motion } from 'framer-motion';
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


const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <PageContainer>
        <Icon name="profile" />
        {/* FIX: Replaced FramerMotion.motion.h1 with motion.h1 to fix type error. */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-dark-text mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hamake D. Arayanai
        </motion.h1>
        {/* FIX: Replaced FramerMotion.motion.p with motion.p to fix type error. */}
        <motion.p 
          className="mb-8 text-lg md:text-xl text-dark-text-muted"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Love me or hate me, but spare me your indifference.
        </motion.p>
        <h2 className="sr-only">Social Media Connections</h2>
        {/* FIX: Replaced FramerMotion.motion.ul with motion.ul to fix type error. */}
        <motion.ul 
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            // FIX: Replaced FramerMotion.motion.li with motion.li to fix type error.
            <motion.li key={link.name} variants={itemVariants}>
              <StyledButton 
                as="a" 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </StyledButton>
            </motion.li>
          ))}
        </motion.ul>
      </PageContainer>
    </PageTransition>
  );
};

export default HomePage;