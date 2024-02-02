import { HomeIcon, PlusIcon } from '@heroicons/react/24/solid';

interface FooterProps {
  onAddClick: () => void;
  onHomeClick: () => void;
}

function Footer(props: FooterProps) {
  const { onAddClick, onHomeClick } = props;

  return (
    <nav className="flex flex-row h-16">
      <button
        className="w-1/2 bg-slate-300 border border-slate-400 border-r-0"
        onClick={onHomeClick}
      >
        <HomeIcon className="h-8 w-8 text-lavender-700 m-auto" />
      </button>
      <button className="w-1/2 bg-slate-300 border border-slate-400" onClick={onAddClick}>
        <PlusIcon className="h-8 w-8 text-lavender-700 m-auto" />
      </button>
    </nav>
  );
}

export default Footer;
