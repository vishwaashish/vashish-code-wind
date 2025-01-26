import { Button } from "@/components/lib/button";
import Link from "next/link";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="link" color="primary" asChild>
        <Link href="#home" aria-label="Go to Homepage">
          Go to Homepage
        </Link>
      </Button>
    </div>
  );
};

const title = "Redirect Links";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button variant="link" color="primary" asChild>
        <Link href="#home" aria-label="Go to Homepage">
          Go to Homepage
        </Link>
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
