import Label from "@/components/lib/label";
import Textarea from "@/components/lib/textarea";
import { useId } from "react";

const TextareaDemo = () => {
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Textarea with error</Label>
        <Textarea
          id={id}
          invalid
          placeholder="Leave a comment"
          aria-describedby="textarea-error"
        />
        <small
          id="textarea-error"
          className="text-destructive"
          role="alert"
          aria-live="polite"
        >
          This field is required.
        </small>
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
  const id = useId();
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <div className="space-y-1">
        <Label htmlFor={id}>Textarea with error</Label>
        <Textarea
          id={id}
          invalid
          placeholder="Leave a comment"
          aria-describedby="textarea-error"
        />
        <small
          id="textarea-error"
          className="text-destructive"
          role="alert"
          aria-live="polite"
        >
          This field is required.
        </small>
      </div>
    </div>
  );
};
`;
export { TextareaDemo, title, react };
