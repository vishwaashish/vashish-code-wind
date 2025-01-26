import Input from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Simple input</Label>
        <Input id={id} placeholder="Enter text here" />
      </div>
    </div>
  );
};

const title = "Input with label";
const react = `
import Input from "@/components/lib/Input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
 const id = useId()
  return (
    <div className="space-y-1">
        <Label htmlFor="input-with-label">Input with label</Label>
        <Input id="input-with-label" placeholder="Enter text here"  />
    </div>
  );
};
`;
export { InputDemo, react, title };
