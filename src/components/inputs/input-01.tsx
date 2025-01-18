import Input from "@/components/lib/input";

const InputDemo = () => {
  return (
    <div className="mx-auto flex min-h-40 max-w-xs items-center space-y-4 py-5 w-full">
      <Input placeholder="Enter text here" />
    </div>
  );
};

const title = "Default";
const react = `
import Input from "@/components/lib/Input";

const InputDemo = () => {
  return (
      <Input placeholder="Enter text here" />
  );
};
`;
export { InputDemo, title, react };
