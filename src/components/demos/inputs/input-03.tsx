import Input from "@/components/lib/input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="mx-auto flex min-h-40 max-w-xs items-center space-y-4 py-5 w-full">
      <div className="space-y-1 w-full">
        <Label htmlFor="input-with-label">Simple input</Label>
        <Input id="input-with-label" placeholder="Enter text here" />
      </div>
    </div>
  );
};

const title = "Input with label";
const react = `
import Input from "@/components/lib/Input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="space-y-1 w-full">
        <Label htmlFor="input-with-label">Input with label</Label>
        <Input id="input-with-label" placeholder="Enter text here"  />
    </div>
  );
};
`;
export { InputDemo, react, title };
