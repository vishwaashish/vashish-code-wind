import { Input } from "@/components/lib/input";

const InputDemo = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Input placeholder="Enter text here" />
    </div>
  );
};

const title = "Default";
const react = `
import { Input } from "@/components/lib/input";

const InputDemo = () => {
  return (
      <Input placeholder="Enter text here" />
  );
};
`;
export { InputDemo, title, react };
