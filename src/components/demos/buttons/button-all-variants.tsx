import { Button } from "@/components/lib/button";
import Link from "next/link";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-5">
      {/* Contained Variant */}
      <Button variant="contained" color="primary">
        Contained
      </Button>

      {/* Outlined Variant */}
      <Button variant="outlined" color="primary">
        Outlined
      </Button>

      {/* Ghost Variant */}
      <Button variant="ghost" color="primary">
        Ghost
      </Button>

      {/* Text Variant */}
      <Button variant="text" color="primary">
        Text
      </Button>

      {/* Link Variant */}
      <Button variant="link" color="primary" asChild>
        <Link href="#link">Link</Link>
      </Button>
    </div>
  );
};

const title = "All Button Variants Example";
const react = `
import { Button } from "@/components/lib/button";
import Link from "next/link";

const ButtonDemo = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      {/* Contained Variant */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Contained Button</h2>
        <Button variant="contained" color="primary">
          Primary Contained
        </Button>
      </div>

      {/* Outlined Variant */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Outlined Button</h2>
        <Button variant="outlined" color="primary">
          Primary Outlined
        </Button>
      </div>

      {/* Ghost Variant */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Ghost Button</h2>
        <Button variant="ghost" color="primary">
          Primary Ghost
        </Button>
      </div>

      {/* Text Variant */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Text Button</h2>
        <Button variant="text" color="primary">
          Primary Text
        </Button>
      </div>

      {/* Link Variant */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Link Button</h2>
        <Button variant="link" color="primary" asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
