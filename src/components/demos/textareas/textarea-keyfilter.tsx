import Textarea from "@/components/lib/textarea";

const TextareaDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Textarea keyfilter="int" placeholder="Enter numbers only..." />
    </div>
  );
};

const title = "Keyfilter for Integer Input";
const react = `
import Textarea from "@/components/lib/textarea";

const TextareaDemo = () => {
  return (
      <div className="flex w-full flex-wrap items-center justify-center py-5">
        <Textarea keyfilter="int" placeholder="Enter numbers only..." />
      </div>
  );
};
`;
export { TextareaDemo, title, react };
