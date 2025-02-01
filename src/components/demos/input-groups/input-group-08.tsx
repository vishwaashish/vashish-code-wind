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
        <Label htmlFor={id}>Input with end add-on button</Label>
        <div className="flex">
          <Input
            className="rounded-e-none"
            id={id}
            placeholder="Search something..."
          />
          <Button
            variant={"contained"}
            color={"primary"}
            size={"icon"}
            className={"rounded-s-none border border-s-0"}
          >
            <Search size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const title = "Input with end add-on button";
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
        <Label htmlFor={id}>Input with end add-on button</Label>
        <div className="flex">
          <Input
            className="rounded-e-none"
            id={id}
            placeholder="Search something..."
          />
          <Button
            variant={"contained"}
            color={"primary"}
            size={"icon"}
            className={"rounded-s-none border border-s-0"}
          >
            <Search size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};
`;
export { InputGroupDemo, react, title };
