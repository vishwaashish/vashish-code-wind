import { Button } from "@/components/lib/button";
import Link from "next/link";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
      <Button variant="link" asChild>
        <Link href="/">Default</Link>
      </Button>
      <Button variant="link" color="primary" asChild>
        <Link href="/">Primary</Link>
      </Button>
      <Button variant="link" color="destructive" asChild>
        <Link href="/">Destructive</Link>
      </Button>
      <Button variant="link" color="success" asChild>
        <Link href="/">Success</Link>
      </Button>
    </div>
  );
};

const title = "Link Button Example";
const react = `
import { Button } from "@/components/lib/button";
import Link from "next/link";

const ButtonDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-5 p-5">
      <Button variant="link" asChild>
        <Link href="/">Default</Link>
      </Button>
      <Button variant="link" color="primary" asChild>
        <Link href="/">Primary</Link>
      </Button>
      <Button variant="link" color="destructive" asChild>
        <Link href="/">Destructive</Link>
      </Button>
      <Button variant="link" color="success" asChild>
        <Link href="/">Success</Link>
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
