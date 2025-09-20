
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaGithub } from 'react-icons/fa';
import PageContainer from '../components/PageContainer';
import StyledButton from '../components/StyledButton';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/hamakedarayanai/', icon: <FaFacebook aria-hidden="true" className="w-5 h-5" /> },
  { name: 'X', href: 'https://x.com/hamakedarayanai', icon: <FaTwitter aria-hidden="true" className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/hamakedarayanai/', icon: <FaInstagram aria-hidden="true" className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@hamakedarayanai', icon: <FaYoutube aria-hidden="true" className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hamakedarayanai', icon: <FaLinkedin aria-hidden="true" className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/hamakedarayanai', icon: <FaGithub aria-hidden="true" className="w-5 h-5" /> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@hamakedarayanai', icon: <FaTiktok aria-hidden="true" className="w-5 h-5" /> },
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
        {/* FIX: Replaced MotionDiv with standard motion.div to resolve TypeScript type errors. */}
        <motion.div
            ref={iconRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isIconInView ? 1 : 0, y: isIconInView ? 0 : 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Icon name="profile" disableAnimation />
        </motion.div>

        {/* FIX: Replaced MotionH1 with standard motion.h1 to resolve TypeScript type errors. */}
        <motion.h1 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: isHeadingInView ? 0 : 30, opacity: isHeadingInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Hamake D. Arayanai
        </motion.h1>
        
        <h2 className="sr-only">Social Media Connections</h2>
        {/* FIX: Replaced MotionUl with standard motion.ul to resolve TypeScript type errors. */}
        <motion.ul 
          ref={listRef}
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate={isListInView ? "visible" : "hidden"}
        >
          {socialLinks.map((link) => (
            // FIX: Replaced MotionLi with standard motion.li to resolve TypeScript type errors.
            <motion.li key={link.name} variants={itemVariants}>
              <StyledButton 
                as="a" 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span>{link.name}</span>
              </StyledButton>
            </motion.li>
          ))}
        </motion.ul>
      </PageContainer>
    </PageTransition>
  );
};

export default HomePage;
