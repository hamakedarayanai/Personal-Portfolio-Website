import React from 'react';
// FIX: Use namespace import for framer-motion to handle potential module resolution issues with TypeScript.
import * as FramerMotion from 'framer-motion';
import PageContainer from '../components/PageContainer';
import StyledButton from '../components/StyledButton';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const sites = [
    { name: 'Harapan Baru Service', href: 'http://harapanbaruservice.biz.id/' },
    { name: 'Gemini Prompt Engine', href: 'https://gpe.hamakedarayanai.my.id/' },
    { name: 'Image Detailer AI', href: 'https://id.hamakedarayanai.my.id/' },
    { name: 'InstaCaption AI', href: 'https://ica.hamakedarayanai.my.id/' },
    { name: 'Video Detailer AI', href: 'https://vda.hamakedarayanai.my.id/' },
    { name: 'InstaVid Text Generator', href: 'https://ivtg.hamakedarayanai.my.id/' },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


const SitesPage: React.FC = () => {
  return (
    <PageTransition>
      <PageContainer>
        <Icon name="sites" />
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-2">Explore Our Sites</h1>
        <p className="mb-8 text-lg md:text-xl text-dark-text-muted">
          Discover online projects by Hamake D. Arayanai
        </p>
        <h2 className="sr-only">Available Websites</h2>
        <FramerMotion.motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {sites.map((site) => (
            <FramerMotion.motion.div key={site.name} variants={itemVariants}>
             <StyledButton
                as="a"
                href={site.href}
                target="_blank"
                rel="noopener noreferrer external"
                aria-label={`Visit ${site.name} website`}
                className="w-full"
              >
                {site.name}
              </StyledButton>
            </FramerMotion.motion.div>
          ))}
        </FramerMotion.motion.div>
      </PageContainer>
    </PageTransition>
  );
};

export default SitesPage;