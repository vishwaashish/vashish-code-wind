import Input from "@/components/lib/input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="mx-auto flex min-h-40 w-full max-w-xs items-center space-y-4 py-5">
      <div className="w-full space-y-1">
        <Label htmlFor="required-input" required>
          Required input
        </Label>
        <Input id="required-input" placeholder="Enter text here" />
      </div>
    </div>
  );
};

const title = " Required input";
const react = `
import Input from "@/components/lib/Input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="space-y-1 w-full">
        <Label htmlFor="required-input" required>Required input</Label>
        <Input id="required-input" placeholder="Enter text here" />
    </div>
  );
};
`;
export { InputDemo, react, title };
