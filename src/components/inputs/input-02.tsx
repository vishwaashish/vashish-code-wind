import Input from "@/components/lib/input";
import { useState } from "react";

const InputDemo = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mx-auto flex min-h-40 max-w-xs items-center space-y-4 py-5 w-full">
      <Input value={value} placeholder="Enter text here" onChange={(e)=> setValue(e.target.value)}/>
    </div>
  );
};

const title = "Controlled Input with useState";
const react = `
import Input from "@/components/lib/Input";
import { useState } from "react";

const InputDemo = () => {
 const [value, setValue] = useState("");
  return (
    <Input value={value} placeholder="Enter text here" onChange={(e)=> setValue(e.target.value)}/>
  );
};
`;
export { InputDemo, title, react };
