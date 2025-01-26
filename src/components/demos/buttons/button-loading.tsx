import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-5">
      {/* Default Loading at Start */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" loading>
          Loading...
        </Button>
      </div>

      {/* Loading at End */}
      <div className="flex gap-3">
        <Button
          variant="contained"
          color="primary"
          loading
          loadingPosition="end"
        >
          Submit
        </Button>
      </div>

      {/* Custom Loading Indicator */}
      <div className="flex gap-3">
        <Button
          variant="contained"
          color="primary"
          loading
          loadingIndicator={
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          }
        >
          Custom Spinner
        </Button>
      </div>
    </div>
  );
};

const title = "Button Loading States Example";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5 items-center justify-center">
      {/* Default Loading at Start */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" loading>
          Loading...
        </Button>
      </div>

      {/* Loading at End */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" loading loadingPosition="end">
          Submit
        </Button>
      </div>

      {/* Custom Loading Indicator */}
      <div className="flex gap-3">
        <Button
          variant="contained"
          color="primary"
          loading
          loadingIndicator={
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          }
        >
          Custom Spinner
        </Button>
      </div>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
