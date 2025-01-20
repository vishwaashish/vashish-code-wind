import Input from "@/components/lib/input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="mx-auto flex min-h-40 max-w-xs items-center space-y-4 py-5 w-full">
      <div className="space-y-1 w-full">
        <Label htmlFor="filled-input">Filled Input</Label>
        <Input id="filled-input" placeholder="Enter text here" variant="filled" />
      </div>
    </div>
  );
};

const title = "Filled input with label";
const react = `
import Input from "@/components/lib/Input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="space-y-1 w-full">
        <Label htmlFor="filled-input">Filled Input</Label>
        <Input id="filled-input" placeholder="Enter text here" variant="filled" />
    </div>
  );
};
`;
export { InputDemo, react, title };

