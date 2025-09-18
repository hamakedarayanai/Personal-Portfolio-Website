import React from 'react';
// FIX: Use namespace import for react-router-dom to handle potential module resolution issues.
import * as ReactRouterDOM from 'react-router-dom';
// FIX: Use namespace import for framer-motion to handle potential module resolution issues with TypeScript.
import * as FramerMotion from 'framer-motion';


type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  as?: 'button';
};

type ButtonAsLink = BaseProps & Omit<ReactRouterDOM.LinkProps, keyof BaseProps> & {
  as: 'Link';
};

type ButtonAsAnchor = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
  as: 'a';
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;


// Create motion-compatible components
const MotionButton = FramerMotion.motion.button;
const MotionA = FramerMotion.motion.a;
// For React Router's Link, we need to forward the ref for Framer Motion to work correctly
const ForwardedLink = React.forwardRef<HTMLAnchorElement, ReactRouterDOM.LinkProps>(
    (props, ref) => <ReactRouterDOM.Link {...props} ref={ref} />
);
const MotionLink = FramerMotion.motion(ForwardedLink);


const StyledButton: React.FC<ButtonProps> = (props) => {
  const baseClasses = "w-full max-w-md mx-auto inline-flex items-center justify-center gap-2 px-4 py-3 font-medium text-center whitespace-nowrap border border-primary text-primary bg-transparent rounded-lg transition-colors duration-200 ease-in-out hover:bg-primary hover:text-dark-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-primary-hover shadow-sm hover:shadow-md";

  const animationProps = {
    whileHover: { y: -3, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  };

  const allClasses = `${baseClasses} ${props.className || ''}`;

  if (props.as === 'Link') {
    const { as, ...rest } = props;
    return <MotionLink {...rest} className={allClasses} {...animationProps} />;
  }

  if (props.as === 'a') {
    const { as, ...rest } = props;
    return <MotionA {...rest} className={allClasses} {...animationProps} />;
  }

  const { as, ...rest } = props;
  return <MotionButton {...rest} className={allClasses} {...animationProps} />;
};

export default StyledButton;