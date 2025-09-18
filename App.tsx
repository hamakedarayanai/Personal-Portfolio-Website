
import React from 'react';
// FIX: Use namespace import for react-router-dom to handle potential module resolution issues.
import * as ReactRouterDOM from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PagesPage from './pages/PagesPage';
import SitesPage from './pages/SitesPage';
import RadioPage from './pages/RadioPage';
import WhatsappChatPage from './pages/WhatsappChatPage';

const AppRoutes = () => {
  const location = ReactRouterDOM.useLocation();
  return (
    <AnimatePresence mode="wait">
      <ReactRouterDOM.Routes location={location} key={location.pathname}>
        <ReactRouterDOM.Route path="/" element={<HomePage />} />
        <ReactRouterDOM.Route path="/pages" element={<PagesPage />} />
        <ReactRouterDOM.Route path="/sites" element={<SitesPage />} />
        <ReactRouterDOM.Route path="/radio" element={<RadioPage />} />
        <ReactRouterDOM.Route path="/whatsappchatform" element={<WhatsappChatPage />} />
      </ReactRouterDOM.Routes>
    </AnimatePresence>
  );
};


function App() {
  return (
    <ReactRouterDOM.HashRouter>
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
    </ReactRouterDOM.HashRouter>
  );
}

export default App;