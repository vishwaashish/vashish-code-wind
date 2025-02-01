import { Input } from "@/components/lib/input";
import { useState } from "react";

const InputDemo = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Input value={value} placeholder="Enter text here" onChange={(e)=> setValue(e.target.value)}/>
    </div>
  );
};

const title = "Controlled Input with useState";
const react = `
import { Input } from "@/components/lib/input";
import { useState } from "react";

const InputDemo = () => {
 const [value, setValue] = useState("");
  return (
    <Input value={value} placeholder="Enter text here" onChange={(e)=> setValue(e.target.value)}/>
  );
};
`;
export { InputDemo, title, react };
