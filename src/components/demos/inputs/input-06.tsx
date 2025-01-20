import Input from "@/components/lib/input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="mx-auto flex min-h-40 max-w-xs items-center space-y-4 py-5 w-full">
      <div className="space-y-1 w-full">
        <Label htmlFor="input-with-helper-text">
          Input with helper text
        </Label>
        <Input id="input-with-helper-text" placeholder="Enter text here" />
        <small className="text-muted-foreground">
        Full name as on official documents
        </small>
      </div>
    </div>
  );
};

const title = "Input with helper text";
const react = `
import Input from "@/components/lib/Input";
import Label from "@/components/lib/label";

const InputDemo = () => {
  return (
    <div className="space-y-1 w-full">
        <Label htmlFor="input-with-helper-text">Input with helper text</Label>
        <Input id="input-with-helper-text" placeholder="Enter text here" />
    </div>
  );
};
`;
export { InputDemo, react, title };
