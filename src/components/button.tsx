import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const { children, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ''} text-white bg-lavender-500 disabled:bg-lavender-200 disabled:text-lavender-700 py-3 px-6 rounded-md`}
    >
      {children}
    </button>
  );
}

export default Button;
