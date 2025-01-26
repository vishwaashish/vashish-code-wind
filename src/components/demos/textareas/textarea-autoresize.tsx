import Textarea from "@/components/lib/textarea";

const TextareaDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Textarea autoResize placeholder="Type your text here..." />
    </div>
  );
};

const title = "Auto-Resize Textarea";
const react = `
import Textarea from "@/components/lib/textarea";

const TextareaDemo = () => {
  return (
      <div className="flex w-full flex-wrap items-center justify-center py-5">
        <Textarea autoResize placeholder="Type your text here..." />
      </div>
  );
};
`;
export { TextareaDemo, title, react };
