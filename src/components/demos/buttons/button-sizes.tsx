import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5 items-center justify-center">
      {/* Tiny Button */}
      <div className="flex gap-3">
        <Button size="tiny" variant="contained" color="primary">
          Tiny
        </Button>
      </div>

      {/* Small Button */}
      <div className="flex gap-3">
        <Button size="sm" variant="contained" color="primary">
          Small
        </Button>
      </div>

      {/* Medium Button */}
      <div className="flex gap-3">
        <Button size="md" variant="contained" color="primary">
          Medium
        </Button>
      </div>

      {/* Large Button */}
      <div className="flex gap-3">
        <Button size="lg" variant="contained" color="primary">
          Large
        </Button>
      </div>

      {/* Icon Button */}
      <div className="flex gap-3">
        <Button size="icon" variant="contained" color="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

const title = "Button Sizes Example";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5 items-center justify-center">
      {/* Tiny Button */}
      <div className="flex gap-3">
        <Button size="tiny" variant="contained" color="primary">
          Tiny
        </Button>
      </div>

      {/* Small Button */}
      <div className="flex gap-3">
        <Button size="sm" variant="contained" color="primary">
          Small
        </Button>
      </div>

      {/* Medium Button */}
      <div className="flex gap-3">
        <Button size="md" variant="contained" color="primary">
          Medium
        </Button>
      </div>

      {/* Large Button */}
      <div className="flex gap-3">
        <Button size="lg" variant="contained" color="primary">
          Large
        </Button>
      </div>

      {/* Icon Button */}
      <div className="flex gap-3">
        <Button size="icon" variant="contained" color="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
