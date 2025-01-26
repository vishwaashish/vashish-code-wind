import { useState } from "react";
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button
        variant="contained"
        color={isFollowing ? "destructive" : "primary"}
        onClick={toggleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </div>
  );
};

const title = "Toggle States - Follow/Unfollow";
const react = `
import { useState } from "react";
import { Button } from "@/components/lib/button";

const ButtonDemo = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center py-5">
      <Button
        variant="contained"
        color={isFollowing ? "destructive" : "primary"}
        onClick={toggleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </div>
  );
};
`;

export { ButtonDemo, title, react };
