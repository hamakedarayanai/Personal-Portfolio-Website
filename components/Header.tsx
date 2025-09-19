import React from 'react';
import { NavLink } from 'react-router-dom';
import useScroll from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/pages', text: 'Pages' },
  { to: '/sites', text: 'Sites' },
];

const Header: React.FC = () => {
  const isScrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const baseNavStyle = "px-4 py-2 transition-colors duration-200 ease-in-out font-medium";
  const activeStyle = { color: '#4a6fa5', fontWeight: '600' };
  const inactiveStyleLight = { color: '#6c757d' };
  const inactiveStyleDark = { color: '#b0b0b0' };


  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-light-surface-elevated dark:bg-dark-surface-elevated shadow-lg' : 'bg-light-surface dark:bg-dark-surface shadow-sm'}`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-light-text dark:text-dark-text">
              Hamake D. Arayanai
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={baseNavStyle}
                  style={({ isActive }) => {
                      const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                      if (isActive) return activeStyle;
                      return theme === 'dark' ? inactiveStyleDark : inactiveStyleLight;
                  }}
                >
                  {link.text}
                </NavLink>
              ))}
              <ThemeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="ml-2 bg-light-surface dark:bg-dark-surface-elevated inline-flex items-center justify-center p-2 rounded-md text-light-text-muted dark:text-dark-text-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border dark:hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface dark:focus:ring-offset-dark-surface focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base"
                style={({ isActive }) => {
                      const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                      if (isActive) return activeStyle;
                      return theme === 'dark' ? inactiveStyleDark : inactiveStyleLight;
                  }}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;