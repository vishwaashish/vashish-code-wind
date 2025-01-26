import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="ghost" color="destructive">
        Cancel
      </Button>
    </div>
  );
};

const title = "Form Reset or Cancel";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="ghost" color="destructive">
        Cancel
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
