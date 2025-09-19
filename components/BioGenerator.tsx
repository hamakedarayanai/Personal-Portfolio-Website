import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

// FIX: Assign motion components to variables to help TypeScript resolve their types correctly.
const MotionDiv = motion.div;
const MotionButton = motion.button;

const BioGenerator: React.FC = () => {
  const [bio, setBio] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const generateBio = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = "Generate a short, creative, and professional bio for a web developer named Hamake D. Arayanai. The tone should be inspiring and slightly mysterious. Mention skills in AI, modern web technologies, and UI/UX design. Keep it under 25 words.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setBio(response.text);

    } catch (err) {
      console.error("Error generating bio:", err);
      setError("Failed to generate a bio. Please try again.");
      // Fallback bio
      setBio("A creative developer shaping the web with code and coffee.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    generateBio();
  }, [generateBio]);

  const bioContainerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <div className="mb-8 text-lg md:text-xl text-light-text-muted dark:text-dark-text-muted min-h-[80px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <MotionDiv
          key={bio} // Animate when bio text changes
          className="relative"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={bioContainerVariants}
        >
            <p className="italic">"{bio}"</p>
        </MotionDiv>
      </AnimatePresence>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

      <MotionButton
        onClick={generateBio}
        disabled={isLoading}
        className="mt-4 px-3 py-1 text-sm bg-light-surface-elevated dark:bg-dark-surface-elevated border border-light-border dark:border-dark-border rounded-full flex items-center gap-2 hover:bg-light-border dark:hover:bg-dark-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001a10.988 10.988 0 00-1.292-3.842 10.962 10.962 0 00-3.54-3.54 10.988 10.988 0 00-3.842-1.292v-.001H9.348m-3.008 0h4.992v.001a10.988 10.988 0 011.292 3.842 10.962 10.962 0 013.54 3.54 10.988 10.988 0 013.842 1.292v.001h3.008m-4.992 0h-4.992v-.001a10.988 10.988 0 01-1.292-3.842 10.962 10.962 0 01-3.54-3.54 10.988 10.988 0 01-3.842-1.292v-.001H9.348" />
        </svg>
        <span>{isLoading ? 'Generating...' : 'Regenerate'}</span>
      </MotionButton>
    </div>
  );
};

export default BioGenerator;