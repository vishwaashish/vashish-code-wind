import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" loading>
        Saving...
      </Button>
    </div>
  );
};

const title = "Default Start Loading";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" loading>
        Saving...
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
