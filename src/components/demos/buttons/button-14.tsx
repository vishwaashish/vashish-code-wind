import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" loading loadingPosition="end">
        Processing Payment...
      </Button>
    </div>
  );
};

const title = "Default End Loading";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="contained" color="primary" loading loadingPosition="end">
        Processing Payment...
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
