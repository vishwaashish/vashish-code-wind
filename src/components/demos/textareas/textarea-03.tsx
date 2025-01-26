import Textarea from "@/components/lib/textarea";
import Label from "@/components/lib/label";
import { useId } from "react";

const TextareaDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Disabled textarea</Label>
        <Textarea id={id} disabled placeholder="Leave a comment" />
      </div>
    </div>
  );
};

const title = "Disabled Textarea";
const react = `
import Textarea from "@/components/lib/textarea";
import Label from "@/components/lib/label";
import { useId } from "react";

const TextareaDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Disabled textarea</Label>
        <Textarea id={id} disabled placeholder="Leave a comment" />
      </div>
    </div>
  );
};
`;
export { TextareaDemo, title, react };
