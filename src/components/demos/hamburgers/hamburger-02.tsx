const HamburgerDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <button aria-label="Toggle menu">
        <svg
          aria-label="Hamburger menu icon"
          viewBox="0 0 24 24"
          className="group h-10 w-10 stroke-foreground transition-transform duration-300 ease-in-out"
        >
          <line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            strokeWidth="2"
            strokeLinecap="round"
            className="origin-center transition-all duration-300 group-hover:-translate-x-[4px] group-hover:translate-y-[5px] group-hover:rotate-45"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 group-hover:-translate-x-[5px] group-hover:opacity-0"
          />
          <line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            strokeWidth="2"
            strokeLinecap="round"
            className="origin-center transition-all duration-300 group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] group-hover:-rotate-45"
          />
        </svg>
      </button>
    </div>
  );
};

const title = "Hamburger Slider";
const react = `
const HamburgerDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <button aria-label="Toggle menu">
        <svg
          aria-label="Hamburger menu icon"
          viewBox="0 0 24 24"
          className="group h-10 w-10 stroke-foreground transition-transform duration-300 ease-in-out"
        >
          <line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 origin-center group-hover:-translate-x-[4px] group-hover:translate-y-[5px] group-hover:rotate-45"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 group-hover:-translate-x-[5px] group-hover:opacity-0"
          />
          <line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 origin-center group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] group-hover:-rotate-45"
          />
        </svg>
      </button>
    </div>
  );
};
`;

const html = `
     <button aria-label="Toggle menu">
        <svg
          aria-label="Hamburger menu icon"
          viewBox="0 0 24 24"
          className="group h-10 w-10 stroke-foreground transition-transform duration-300 ease-in-out"
        >
          <line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 origin-center group-hover:-translate-x-[4px] group-hover:translate-y-[5px] group-hover:rotate-45"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 group-hover:-translate-x-[5px] group-hover:opacity-0"
          />
          <line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 origin-center group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] group-hover:-rotate-45"
          />
        </svg>
      </button>
`;

export { HamburgerDemo, react, title, html };
