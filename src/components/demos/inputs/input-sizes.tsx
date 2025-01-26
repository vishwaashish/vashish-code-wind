import Input from "@/components/lib/input";

const InputDemo = () => {
  return (
    <div className="flex w-full flex-col gap-3 items-center justify-center py-5">
      {/* Small Input */}
      <Input placeholder="Small input" size="sm" />

      {/* Medium Input (default) */}
      <Input placeholder="Medium input" size="md" />

      {/* Large Input */}
      <Input placeholder="Large input" size="lg" />
    </div>
  );
};

const title = "Input Sizes";
const react = `
import Input from "@/components/lib/Input";

const InputDemo = () => {
  return (
    <div>
      {/* Small Input */}
      <Input placeholder="Small input" size="sm" />

      {/* Medium Input (default) */}
      <Input placeholder="Medium input" size="md" />

      {/* Large Input */}
      <Input placeholder="Large input" size="lg" />
    </div>
  );
};
`;
export { InputDemo, react, title };
