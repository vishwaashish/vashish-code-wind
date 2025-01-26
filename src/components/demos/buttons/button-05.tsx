import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" disabled>
        Submit
      </Button>
    </div>
  );
};

const title = "Disabled Submit Button";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" disabled>
        Submit
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
