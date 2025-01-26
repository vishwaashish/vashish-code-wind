import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" rounded="full" size="icon">
        +
      </Button>
    </div>
  );
};

const title = "Floating Action Button (FAB)";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" rounded="full" size="icon">
        +
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
