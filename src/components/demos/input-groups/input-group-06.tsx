import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { Clock, DollarSign, Mail, Star } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with multiple add-on icon</Label>
        <div className="flex">
          <div className={"rounded-lg rounded-e-none border border-e-0 px-2"}>
            <Clock size={18} className="h-full text-muted-foreground" />
          </div>
          <div className={"border border-e-0 px-2"}>
            <Star size={18} className="h-full text-muted-foreground" />
          </div>
          <Input
            className="max-w-32 rounded-none"
            id={id}
            placeholder="Enter text here"
          />
          <div className={"border border-s-0 px-2"}>
            <DollarSign size={18} className="h-full text-muted-foreground" />
          </div>
          <div className={"rounded-lg rounded-s-none border border-s-0 px-2"}>
            <Mail size={18} className="h-full text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

const title = "Input with multiple add-on icon";
const react = `
import { Input } from "@/components/lib/input";
import Label from "@/components/lib/label";
import { Clock, DollarSign, Mail, Star } from "lucide-react";
import { useId } from "react";

const InputGroupDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center px-5 py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Input with multiple add-on icon</Label>
        <div className="flex">
          <div className={"rounded-lg rounded-e-none border border-e-0 px-2"}>
            <Clock size={18} className="h-full text-muted-foreground" />
          </div>
          <div className={"border border-e-0 px-2"}>
            <Star size={18} className="h-full text-muted-foreground" />
          </div>
          <Input
            className="max-w-32 rounded-none"
            id={id}
            placeholder="Enter text here"
          />
          <div className={"border border-s-0 px-2"}>
            <DollarSign size={18} className="h-full text-muted-foreground" />
          </div>
          <div className={"rounded-lg rounded-s-none border border-s-0 px-2"}>
            <Mail size={18} className="h-full text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
`;
export { InputGroupDemo, react, title };
