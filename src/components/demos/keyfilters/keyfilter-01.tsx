import Input from "@/components/lib/input";
import Label from "@/components/lib/label";

const KeyfilterDemo = () => {
  return (
    <div className="mx-auto grid grid-cols-1 place-content-center gap-5 p-5 sm:gap-10 sm:p-10 md:grid-cols-2">
      {/* Numeric Input */}
      <div className="space-y-1">
        <Label htmlFor="numeric-input">Numeric Input (Numbers Only)</Label>
        <Input
          id="numeric-input"
          placeholder="Enter numbers only"
          keyfilter={"num"}
          className="w-full"
        />
      </div>

      {/* Alphanumeric Input */}
      <div className="space-y-1">
        <Label htmlFor="alphanumeric-input">
          Alphanumeric Input (Letters and Numbers)
        </Label>
        <Input
          id="alphanumeric-input"
          placeholder="Enter letters and numbers"
          keyfilter={"alphanum"}
          className="w-full"
        />
      </div>

      {/* Alphabetic Input */}
      <div className="space-y-1">
        <Label htmlFor="alphabetic-input">
          Alphabetic Input (Letters Only)
        </Label>
        <Input
          id="alphabetic-input"
          placeholder="Enter letters only"
          keyfilter={"alpha"}
          className="w-full"
        />
      </div>

      {/* Custom Validation */}
      <div className="space-y-1">
        <Label htmlFor="custom-input">
          Custom Validation (Uppercase Letters Only)
        </Label>
        <Input
          id="custom-input"
          placeholder="Enter uppercase letters only"
          keyfilter={/^[A-Z]*$/}
          className="w-full"
        />
      </div>
    </div>
  );
};

const title = "KeyFilter Example";
const react = `
import Input from "@/components/lib/Input";

const KeyfilterDemo = () => {
  return (
   <div className="mx-auto grid grid-cols-1 place-content-center gap-5 p-5 sm:gap-10 sm:p-10 md:grid-cols-2 lg:grid-cols-3">
      {/* Numeric Input */}
      <div className="space-y-1">
        <Label htmlFor="numeric-input">Numeric Input (Numbers Only)</Label>
        <Input
          id="numeric-input"
          placeholder="Enter numbers only"
          keyfilter={"num"}
        />
      </div>

      {/* Alphanumeric Input */}
      <div className="space-y-1">
        <Label htmlFor="alphanumeric-input">
          Alphanumeric Input (Letters and Numbers)
        </Label>
        <Input
          id="alphanumeric-input"
          placeholder="Enter letters and numbers"
          keyfilter={"alphanum"}
        />
      </div>

      {/* Alphabetic Input */}
      <div className="space-y-1">
        <Label htmlFor="alphabetic-input">
          Alphabetic Input (Letters Only)
        </Label>
        <Input
          id="alphabetic-input"
          placeholder="Enter letters only"
          keyfilter={"alpha"}
        />
      </div>

      {/* Custom Validation */}
      <div className="space-y-1">
        <Label htmlFor="custom-input">
          Custom Validation (Uppercase Letters Only)
        </Label>
        <Input
          id="custom-input"
          placeholder="Enter uppercase letters only"
          keyfilter={/^[A-Z]*$/}
        />
      </div>
    </div>
  );
};
`;
export { KeyfilterDemo, react, title };
