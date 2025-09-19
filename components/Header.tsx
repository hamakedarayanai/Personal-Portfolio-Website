import React from 'react';
import { NavLink } from 'react-router-dom';
import useScroll from '../hooks/useScroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/pages', text: 'Pages' },
  { to: '/sites', text: 'Sites' },
];

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hamakedarayanai', icon: FaLinkedin },
    { name: 'X', href: 'https://x.com/hamakedarayanai', icon: FaXTwitter },
    { name: 'GitHub', href: 'https://github.com/hamakedarayanai', icon: FaGithub },
];

const Header: React.FC = () => {
  const isScrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const baseNavStyle = "px-4 py-2 transition-colors duration-200 ease-in-out font-medium";
  const activeStyle = { color: '#4a6fa5', fontWeight: '600' };
  const inactiveStyle = { color: '#b0b0b0' };

  return (
    <header 
      className={`sticky top-0 z-50 bg-dark-surface transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-dark-text">
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
                  style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                >
                  {link.text}
                </NavLink>
              ))}
              <div className="border-l border-dark-border h-6"></div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-text-muted hover:text-primary transition-colors duration-200"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-dark-surface-elevated inline-flex items-center justify-center p-2 rounded-md text-dark-text-muted hover:text-dark-text hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-surface focus:ring-primary"
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
                style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="border-t border-dark-border mt-2 mb-2 px-2 sm:px-3"></div>
          <div className="px-2 pt-2 pb-3 flex justify-center space-x-6 sm:px-3">
             {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text-muted hover:text-primary transition-colors duration-200"
                aria-label={`Visit my ${social.name} profile`}
                onClick={() => setIsMenuOpen(false)}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;