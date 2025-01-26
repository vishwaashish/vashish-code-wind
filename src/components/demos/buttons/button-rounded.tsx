import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-5">
      {/* None */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="none">
          None
        </Button>
      </div>

      {/* Small */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="sm">
          Small
        </Button>
      </div>

      {/* Medium */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="md">
          Medium
        </Button>
      </div>

      {/* Large */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="lg">
          Large
        </Button>
      </div>

      {/* Full */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="full">
          Full
        </Button>
      </div>
    </div>
  );
};

const title = "Button Example";
const react = `
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5 items-center justify-center">
      {/* None */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="nonene">
          None
        </Button>
      </div>

      {/* Small */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="sm">
          Small
        </Button>
      </div>

      {/* Medium */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="md">
          Medium
        </Button>
      </div>

      {/* Large */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="lg">
          Large
        </Button>
      </div>

      {/* Full */}
      <div className="flex gap-3">
        <Button variant="contained" color="primary" rounded="full">
          Full
        </Button>
      </div>
    </div>
  );
};
`;

export { ButtonDemo, react, title };
