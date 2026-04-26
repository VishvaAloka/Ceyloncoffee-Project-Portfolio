import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = React.useState<Array<{
    id: string;
    left: number;
    delay: string;
    duration: string;
  }>>([]);

  React.useEffect(() => {
    const count = number || 20;
    const meteorArr = Array.from({ length: count }, (_, idx) => ({
      id: `meteor-${idx}-${Math.random()}`,
      left: Math.floor(Math.random() * (400 - -400) + -400),
      delay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      duration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteors(meteorArr);
  }, [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: meteor.left + "px",
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        ></span>
      ))}
    </>
  );
};
