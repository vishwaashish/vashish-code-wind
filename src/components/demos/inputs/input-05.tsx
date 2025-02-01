import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id} required>
          Required input
        </Label>
        <Input id={id} placeholder="Enter text here" />
      </div>
    </div>
  );
};

const title = " Required input";
const react = `
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id} required>
          Required input
        </Label>
        <Input id={id} placeholder="Enter text here" />
      </div>
    </div>
  );
};
`;
export { InputDemo, react, title };
