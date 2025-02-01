import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with helper text</Label>
        <Input id={id} placeholder="Enter text here" />
        <small
          className="text-muted-foreground"
          role="region"
          aria-live="polite"
        >
          Full name as on official documents
        </small>
      </div>
    </div>
  );
};

const title = "Input with helper text";
const react = `
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { useId } from "react";

const InputDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with helper text</Label>
        <Input id={id} placeholder="Enter text here" />
        <small
          className="text-muted-foreground"
          role="region"
          aria-live="polite"
        >
          Full name as on official documents
        </small>
      </div>
    </div>
  );
};
`;
export { InputDemo, react, title };
