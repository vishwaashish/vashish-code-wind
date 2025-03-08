import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  itemClassName?: string;
  children: ReactNode;
  vertical?: boolean;
  speed?: number;
  reverse?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
}

const Marquee = ({
  className,
  children,
  vertical = false,
  speed = 50,
  reverse = false,
  repeat = 4,
  pauseOnHover = false,
  style,
  itemClassName,
  ...rest
}: MarqueeProps) => {
  return (
    <>
      <div
        className={cn(
          "group relative flex overflow-hidden",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className,
        )}
        style={
          {
            "--duration": `${speed}s`,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex shrink-0 gap-3 justify-around",
                {
                  "animate-marquee flex-row": !vertical,
                  "animate-marquee-vertical flex-col": vertical,
                  "group-hover:[animation-play-state:paused]": pauseOnHover,
                  "[animation-direction:reverse]": reverse,
                },
                itemClassName,
              )}
            >
              {children}
            </div>
          ))}
      </div>
    </>
  );
};

export { Marquee };
