import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

const Wrap = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col justify-center max-w-screen-xl mx-auto px-2.5 md:px-25",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrap;
