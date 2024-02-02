import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-white bg-lavender-500 hover:bg-lavender-600 active:bg-lavender-700 disabled:bg-lavender-200 disabled:text-lavender-700 py-3 px-6 rounded-md"
    >
      {children}
    </button>
  );
}

export default Button;
