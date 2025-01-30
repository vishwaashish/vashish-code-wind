import Input from "@/components/lib/input";
import Label from "@/components/lib/label";
import Textarea from "@/components/lib/textarea";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  age: string;
  email: string;
  address: string;
}

interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  address?: string;
}

const FormDemo = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateField = (
    field: keyof FormData,
    value: string,
  ): string | undefined => {
    if (field === "name") {
      if (!value.trim()) return "Name is required.";
    } else if (field === "age") {
      if (!value.trim()) return "Age is required.";
      if (!/^\d+$/.test(value)) return "Age must be a valid number.";
    } else if (field === "email") {
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Invalid email format.";
    } else if (field === "address") {
      if (!value.trim()) return "Address is required.";
    }
    return undefined;
  };

  const validateAllFields = (): FormErrors => {
    const errors: FormErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      const key = field as keyof FormData;
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    return errors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateAllFields();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation failed:", errors);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name as keyof FormData, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <form
      className="sm:mx-auto mx-2 my-5 max-w-md space-y-5 rounded-md border p-4 shadow md:p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold">Basic Form</h2>

      {/* Name Field */}
      <div className="space-y-1">
        <Label htmlFor="name" required>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          invalid={!!formErrors.name}
          className="w-full"
        />
        {formErrors.name && (
          <small className="text-destructive">{formErrors.name}</small>
        )}
      </div>

      {/* Age Field */}
      <div className="space-y-1">
        <Label htmlFor="age" required>
          Age (Numbers Only)
        </Label>
        <Input
          id="age"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          keyfilter={"num"}
          onChange={handleChange}
          invalid={!!formErrors.age}
          className="w-full"
        />
        {formErrors.age && (
          <small className="text-destructive">{formErrors.age}</small>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          invalid={!!formErrors.email}
          className="w-full"
        />
        {formErrors.email && (
          <small className="text-destructive">{formErrors.email}</small>
        )}
      </div>
      {/* Address Field */}
      <div className="space-y-1">
        <Label htmlFor="address" required>
          Address
        </Label>
        <Textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          invalid={!!formErrors.address}
          className="w-full"
        />
        {formErrors.address && (
          <small className="text-destructive">{formErrors.address}</small>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={Object.values(formErrors).some(Boolean)}
        className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        Submit
      </button>
    </form>
  );
};

const title = "Basic form";
const react = `
import Input from "@/components/lib/input";
import Label from "@/components/lib/label";
import Textarea from "@/components/lib/textarea";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  age: string;
  email: string;
  address: string;
}

interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  address?: string;
}

const FormDemo = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateField = (
    field: keyof FormData,
    value: string,
  ): string | undefined => {
    if (field === "name") {
      if (!value.trim()) return "Name is required.";
    } else if (field === "age") {
      if (!value.trim()) return "Age is required.";
      if (!/^\d+$/.test(value)) return "Age must be a valid number.";
    } else if (field === "email") {
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Invalid email format.";
    } else if (field === "address") {
      if (!value.trim()) return "Address is required.";
    }
    return undefined;
  };

  const validateAllFields = (): FormErrors => {
    const errors: FormErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      const key = field as keyof FormData;
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });
    return errors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateAllFields();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation failed:", errors);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name as keyof FormData, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <form
      className="mx-auto my-5 max-w-md space-y-5 rounded-md border p-4 shadow md:p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold">Basic Form</h2>

      {/* Name Field */}
      <div className="space-y-1">
        <Label htmlFor="name" required>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          invalid={!!formErrors.name}
          className="w-full"
        />
        {formErrors.name && (
          <small className="text-destructive">{formErrors.name}</small>
        )}
      </div>

      {/* Age Field */}
      <div className="space-y-1">
        <Label htmlFor="age" required>
          Age (Numbers Only)
        </Label>
        <Input
          id="age"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          keyfilter={"num"}
          onChange={handleChange}
          invalid={!!formErrors.age}
          className="w-full"
        />
        {formErrors.age && (
          <small className="text-destructive">{formErrors.age}</small>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          invalid={!!formErrors.email}
          className="w-full"
        />
        {formErrors.email && (
          <small className="text-destructive">{formErrors.email}</small>
        )}
      </div>
      {/* Address Field */}
      <div className="space-y-1">
        <Label htmlFor="address" required>
          Address
        </Label>
        <Textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          invalid={!!formErrors.address}
          className="w-full"
        />
        {formErrors.address && (
          <small className="text-destructive">{formErrors.address}</small>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={Object.values(formErrors).some(Boolean)}
        className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        Submit
      </button>
    </form>
  );
};
`;
export { FormDemo, react, title };
