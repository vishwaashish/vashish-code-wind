import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { User } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with end add-on icon</Label>
        <div className="flex">
          <Input
            className="rounded-e-none"
            id={id}
            placeholder="Enter username"
          />
          <div className={"rounded-lg rounded-s-none border border-s-0 px-2"}>
            <User size={18} className="h-full text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

const title = "Input with end add-on icon";
const react = `
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { User } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with end add-on icon</Label>
        <div className="flex">
          <Input
            className="rounded-e-none"
            id={id}
            placeholder="Enter username"
          />
          <div className={"rounded-lg rounded-s-none border border-s-0 px-2"}>
            <User size={18} className="h-full text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
`;
export { InputGroupDemo, react, title };

