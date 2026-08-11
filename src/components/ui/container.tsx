import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Horizontal content container: centered, max-width, responsive gutters.
 * Use inside every section so page content lines up consistently.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
