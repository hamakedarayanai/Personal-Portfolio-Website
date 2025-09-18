import React, { useState, SyntheticEvent, useEffect } from 'react';
// FIX: Use named import for framer-motion to resolve typing issues.
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const streamUrl = 'http://i.klikhost.com:8228/stream';

const RadioPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isHttps, setIsHttps] = useState(false);

  useEffect(() => {
    // This check runs only on the client-side after the component mounts
    setIsHttps(window.location.protocol === 'https:');
  }, []);

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
          if (isHttps) {
            errorMessage += ' This can happen on secure sites (HTTPS) when the stream is not secure. You can try opening the stream in a new tab.';
          }
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
        {/* FIX: Replaced FramerMotion.motion.div with motion.div to fix type error. */}
        <motion.div 
          className="max-w-xl mx-auto p-4 sm:p-6 bg-dark-surface rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isHttps && (
            <div className="mb-4 p-3 bg-yellow-900/50 text-yellow-200 border border-yellow-700 rounded-md text-sm text-left" role="status">
              <p className="font-bold">Security Information</p>
              <p className="mt-1">This radio stream is loaded over an insecure connection (HTTP). Most modern browsers will block this on a secure page (HTTPS) for your safety.</p>
              <p className="mt-1">If the player doesn't work, you can listen by opening the stream directly.</p>
              <a href={streamUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-yellow-100 mt-2 inline-block">
                Open Stream in a New Tab
              </a>
            </div>
          )}
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
            <source src={streamUrl} type="audio/mpeg" />
            Your browser does not support the audio element. Please use a modern browser to listen.
          </audio>
          {error && (
             <p className="mt-3 text-sm text-red-500 text-left" role="alert">
                <strong>Playback Error:</strong> {error}
             </p>
          )}
        </motion.div>
      </PageContainer>
    </PageTransition>
  );
};

export default RadioPage;