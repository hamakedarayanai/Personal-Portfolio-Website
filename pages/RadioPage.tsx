import React, { useState, SyntheticEvent } from 'react';
// FIX: Use namespace import for framer-motion to handle potential module resolution issues with TypeScript.
import * as FramerMotion from 'framer-motion';
import PageContainer from '../components/PageContainer';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const RadioPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    const audio = e.currentTarget;
    let errorMessage = "Unable to stream audio. Please check your connection or try again later.";
    
    if (audio.error) {
      switch (audio.error.code) {
        case audio.error.MEDIA_ERR_ABORTED:
          errorMessage = 'The playback was aborted.';
          break;
        case audio.error.MEDIA_ERR_NETWORK:
          errorMessage = 'A network error caused the audio download to fail.';
          break;
        case audio.error.MEDIA_ERR_DECODE:
          errorMessage = 'The audio playback was aborted due to a corruption problem or because the audio used features your browser did not support.';
          break;
        case audio.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = 'The audio could not be loaded, either because the server or network failed or because the format is not supported.';
          break;
        default:
          break;
      }
    }
    setError(errorMessage);
  };

  const handlePlay = () => {
    setError(null);
  };

  return (
    <PageTransition>
      <PageContainer>
        <Icon name="radio" />
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-2">Streaming Radio</h1>
        <p className="mb-8 text-lg md:text-xl text-dark-text-muted">
          Listen to Radio Al-Fatah Trangkil Temboro live
        </p>
        <h2 className="sr-only">Radio Player</h2>
        <FramerMotion.motion.div 
          className="max-w-xl mx-auto p-4 sm:p-6 bg-dark-surface rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <audio 
            controls 
            className="w-full"
            id="radio-player" 
            aria-label="Streaming Radio Al-Fatah Trangkil Temboro" 
            preload="none"
            onError={handleError}
            onPlay={handlePlay}
            onPlaying={handlePlay}
          >
            <source src="https://i.klikhost.com/8228/;stream.mp3" type="audio/mpeg" />
            Your browser does not support the audio element. Please use a modern browser to listen.
          </audio>
          {error && (
             <p className="mt-3 text-sm text-red-500" role="alert">
                {error}
             </p>
          )}
        </FramerMotion.motion.div>
      </PageContainer>
    </PageTransition>
  );
};

export default RadioPage;