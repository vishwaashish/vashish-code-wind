import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
      <Button variant="ghost">Default</Button>
      <Button variant="ghost" color="primary">
        Primary
      </Button>
      <Button variant="ghost" color="destructive">
        Destructive
      </Button>
      <Button variant="ghost" color="success">
        Success
      </Button>
    </div>
  );
};

const title = "Ghost Button Example";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5">
      <Button variant="ghost">Default</Button>
      <Button variant="ghost" color="primary">
        Primary
      </Button>
      <Button variant="ghost" color="destructive">
        Destructive
      </Button>
      <Button variant="ghost" color="success">
        Success
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
