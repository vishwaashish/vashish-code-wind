import Label from "@/components/lib/label";
import Textarea from "@/components/lib/textarea";
import { useId } from "react";

const TextareaDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id} required>Required textarea</Label>
        <Textarea
          id={id}
          placeholder="Leave a comment"
          aria-describedby="textarea-error"
        />
      </div>
    </div>
  );
};

const title = "Textarea with Label and Error";
const react = `
import Label from "@/components/lib/label";
import Textarea from "@/components/lib/textarea";
import { useId } from "react";

const TextareaDemo = () => {
  const id = useId()
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id} required>Required textarea</Label>
        <Textarea
          id={id}
          placeholder="Leave a comment"
          aria-describedby="textarea-error"
        />
      </div>
    </div>
  );
};
`;
export { TextareaDemo, title, react };
