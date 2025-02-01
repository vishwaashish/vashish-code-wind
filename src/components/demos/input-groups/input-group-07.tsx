import { Button } from "@/components/lib/button";
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { Search } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with end inline button</Label>
        <div className="relative">
          <Input className="pr-9" id={id} placeholder="Search something..." />
          <Button
            variant={"link"}
            className="absolute right-0 top-0 h-full px-3 [&_svg]:hover:text-primary"
          >
            <Search size={18} className="text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const title = "Input with end inline button";
const react = `
import { Button } from "@/components/lib/button";
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { Search } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with end inline button</Label>
        <div className="relative">
          <Input className="pr-9" id={id} placeholder="Search something..." />
          <Button
            variant={"link"}
            className="absolute right-0 top-0 h-full px-3 [&_svg]:hover:text-primary"
          >
            <Search size={18} className="text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
};
`;
export { InputGroupDemo, react, title };
