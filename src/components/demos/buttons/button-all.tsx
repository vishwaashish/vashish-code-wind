import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  const Search = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
  return (
    <div className="flex min-h-40 w-full flex-col items-center justify-center gap-5 p-5">
      <div className="flex items-center gap-3">
        Contained:
        <Button variant={"contained"}>Default</Button>
        <Button variant={"contained"} color={"primary"}>
          Primary
        </Button>
        <Button variant={"contained"} color={"destructive"}>
          Destructive
        </Button>
        <Button variant={"contained"} color={"success"}>
          Success
        </Button>
      </div>
      <div className="flex gap-3">
        Outlined:
        <Button variant={"outlined"}>Default</Button>
        <Button variant={"outlined"} color={"primary"}>
          Primary
        </Button>
        <Button variant={"outlined"} color={"destructive"}>
          Destructive
        </Button>
        <Button variant={"outlined"} color={"success"}>
          Success
        </Button>
      </div>
      <div className="flex gap-3">
        Ghost:
        <Button variant={"ghost"}>Default</Button>
        <Button variant={"ghost"} color={"primary"}>
          Primary
        </Button>
        <Button variant={"ghost"} color={"destructive"}>
          Destructive
        </Button>
        <Button variant={"ghost"} color={"success"}>
          Success
        </Button>
      </div>
      <div className="flex items-center gap-3">
        Text:
        <Button variant={"text"}>Default</Button>
        <Button variant={"text"} color={"primary"}>
          Primary
        </Button>
        <Button variant={"text"} color={"destructive"}>
          Destructive
        </Button>
        <Button variant={"text"} color={"success"}>
          Success
        </Button>
      </div>
      <div className="flex items-center gap-3">
        Link:
        <Button variant={"link"}>Default</Button>
        <Button variant={"link"} color={"primary"}>
          Primary
        </Button>
        <Button variant={"link"} color={"destructive"}>
          Destructive
        </Button>
        <Button variant={"link"} color={"success"}>
          Success
        </Button>
      </div>
      <div className="flex items-center gap-3">
        Size:
        <Button size={"tiny"}>Small</Button>
        <Button size={"sm"}>Small</Button>
        <Button>Medium</Button>
        <Button size={"lg"}>Large</Button>
        <Button size={"icon"}>Icon</Button>
      </div>

      <div className="flex items-center gap-3">
        Icon:
        <Button
          variant={"outlined"}
          color={"destructive"}
          startIcon={<Search />}
        >
          Search
        </Button>
        <Button endIcon={<Search />}>Search</Button>
        <Button>
          <Search />
          Search
        </Button>
        <Button variant={"contained"} color={"destructive"} aria-label="Search">
          Search
          <Search />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Button loading loadingPosition="start">
          Submit
        </Button>
        <Button loading loadingPosition="end">
          Submit
        </Button>
        <Button loading loadingIndicator="Loading..."></Button>
        <Button
          loading
          loadingIndicator={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          }
        >
          Loading
        </Button>
      </div>

      <div>
        asdsada{" "}
        <Button variant={"link"} noPadding={false}>
          More
        </Button>
      </div>
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
export { ButtonDemo, react, title };
