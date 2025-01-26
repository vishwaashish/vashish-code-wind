import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" rounded="full">
        Sign In
      </Button>
    </div>
  );
};

const title = "Full rounded SignIn Button";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" rounded="full">
        Sign In
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
