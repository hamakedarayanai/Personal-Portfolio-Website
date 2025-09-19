
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PagesPage from './pages/PagesPage';
import SitesPage from './pages/SitesPage';
import RadioPage from './pages/RadioPage';
import WhatsappChatPage from './pages/WhatsappChatPage';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/sites" element={<SitesPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/whatsappchatform" element={<WhatsappChatPage />} />
      </Routes>
    </AnimatePresence>
  );
};


function App() {
  return (
    <HashRouter>
      <a href="#main-content" className="sr-only sr-only-focusable z-[999] absolute top-4 left-4 p-3 bg-primary text-dark-text rounded-lg">
        Skip to main content
      </a>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;