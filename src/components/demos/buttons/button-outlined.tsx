import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5">
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="destructive">
        Destructive
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
    </div>
  );
};

const title = "Outlined Button Example";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5">
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="destructive">
        Destructive
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
