import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
};

const title = "Primary Call-to-Action (CTA)";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
