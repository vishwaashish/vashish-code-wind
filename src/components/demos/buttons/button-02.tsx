import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="outlined" color="primary">
        Learn More
      </Button>
    </div>
  );
};

const title = "Secondary Action";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="outlined" color="primary">
        Learn More
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
