import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5">
      <Button variant="text">Default</Button>
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="text" color="destructive">
        Destructive
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
    </div>
  );
};

const title = "Text Button Example";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5">
      <Button variant="text">Default</Button>
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="text" color="destructive">
        Destructive
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
