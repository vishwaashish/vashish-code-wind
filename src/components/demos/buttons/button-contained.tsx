import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="destructive">
        Destructive
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
};

const title = "Contained Button";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="destructive">
        Destructive
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
