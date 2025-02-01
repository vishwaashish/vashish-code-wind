import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { Mail } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with start inline icon</Label>
        <div className="relative">
          <Mail
            size={18}
            className="absolute mx-3 h-full text-muted-foreground"
          />
          <Input className="pl-10" id={id} placeholder="Enter your email" />
        </div>
      </div>
    </div>
  );
};

const title = "Input with start inline icon";
const react = `
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { Mail } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with start inline icon</Label>
        <div className="relative">
          <Mail
            size={18}
            className="absolute mx-3 h-full text-muted-foreground"
          />
          <Input className="pl-10" id={id} placeholder="Enter your mail" />
        </div>
      </div>
    </div>
  );
};
`;
export { InputGroupDemo, react, title };
