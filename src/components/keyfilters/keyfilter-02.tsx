import { useState } from "react";
import { KeyFilter } from "@/components/lib/keyfilter";

const KeyfilterDemo = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    KeyFilter.validate(e, "pint"); // Positive integers only
    setValue(e.currentTarget.value);
  };

  return (
    <div className="mx-auto flex min-h-40 w-full max-w-xs items-center space-y-4 py-5">
      <div className="space-y-1">
        <label className="text-sm" htmlFor="keyfilter-with-input"></label>
        <input
          id="keyfilter-with-input"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          value={value}
          onInput={handleInput}
          aria-label="Positive Integer Input"
          placeholder="Enter positive integers"
        />
      </div>
    </div>
  );
};

const title = "KeyFilter with simple input";
const react = `
import { useState } from "react";
import { KeyFilter } from "@/components/lib/keyfilter";

const KeyfilterDemo = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    KeyFilter.onBeforeInput(e, "pint", false); // Positive integers only
    setValue(e.currentTarget.value);
  };

  return (
    <div className="space-y-1">
      <label className="text-sm" htmlFor="keyfilter-with-input"></label>
      <input
        id="keyfilter-with-input"
        value={value}
        onInput={handleInput}
        aria-label="Positive Integer Input"
        placeholder="Enter positive integers"
      />
    </div>
  );
};
`;
export { KeyfilterDemo, react, title };
