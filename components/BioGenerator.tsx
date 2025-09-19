import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="mb-8 text-lg md:text-xl text-dark-text-muted min-h-[80px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={bio} // Animate when bio text changes
          className="relative"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={bioContainerVariants}
        >
            <p className="italic">"{bio}"</p>
        </motion.div>
      </AnimatePresence>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

      <motion.button
        onClick={generateBio}
        disabled={isLoading}
        className="mt-4 px-3 py-1 text-sm bg-dark-surface-elevated border border-dark-border rounded-full flex items-center gap-2 hover:bg-dark-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120.5 16l-1.5 1.5M20 20l-1.5-1.5A9 9 0 003.5 8l1.5-1.5" />
        </svg>
        {isLoading ? 'Generating...' : 'Regenerate'}
      </motion.button>
    </div>
  );
};

export default BioGenerator;
