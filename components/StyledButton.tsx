import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
// FIX: Import HTMLMotionProps to use for prop typing.
// FIX: Import Transition to correctly type animation properties.
// FIX: Removed `Transition` import as it was causing a build error.
import { motion, HTMLMotionProps } from 'framer-motion';


type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

// FIX: Base props on HTMLMotionProps to avoid type conflicts with React's HTMLAttributes.
type ButtonAsButton = BaseProps & Omit<HTMLMotionProps<'button'>, keyof BaseProps> & {
  as?: 'button';
};

// FIX: For Link, we need to combine LinkProps and motion props safely.
// We extract Link-specific props and combine them with motion props for an anchor tag.
type LinkSpecificProps = Omit<LinkProps, keyof React.AnchorHTMLAttributes<HTMLAnchorElement>>;
type ButtonAsLink = BaseProps & Omit<HTMLMotionProps<'a'>, keyof BaseProps> & LinkSpecificProps & {
  as: 'Link';
};

// FIX: Base props on HTMLMotionProps to avoid type conflicts.
type ButtonAsAnchor = BaseProps & Omit<HTMLMotionProps<'a'>, keyof BaseProps> & {
  as: 'a';
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;


// Create motion-compatible components
const MotionButton = motion.button;
const MotionA = motion.a;
// For React Router's Link, we need to forward the ref for Framer Motion to work correctly
const ForwardedLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (props, ref) => <Link {...props} ref={ref} />
);
const MotionLink = motion(ForwardedLink);


const StyledButton: React.FC<ButtonProps> = (props) => {
  const baseClasses = "w-full max-w-md mx-auto inline-flex items-center justify-center gap-2 px-4 py-3 font-medium text-center whitespace-nowrap border border-primary text-primary bg-transparent rounded-lg transition-colors duration-200 ease-in-out hover:bg-primary hover:text-light-bg dark:hover:text-dark-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg focus:ring-primary-hover shadow-sm hover:shadow-md";

  // FIX: Use `as const` to ensure TypeScript infers the literal type 'spring' for the `type` property, resolving a type mismatch with Framer Motion's `Transition` type.
  const transition = { type: 'spring', stiffness: 300, damping: 15 } as const;

  const animationProps = {
    whileHover: { y: -3, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition,
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