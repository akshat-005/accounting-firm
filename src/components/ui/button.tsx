import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.15em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-soft hover:bg-navy-900",
        accent: "bg-accent text-accent-foreground shadow-soft hover:bg-gold-600",
        outline:
          "border border-navy-800/25 bg-transparent text-navy-800 hover:bg-navy-50",
        subtle: "bg-muted text-foreground hover:bg-border",
        ghost: "text-navy-800 hover:bg-navy-50",
        link: "text-navy-800 underline-offset-4 hover:underline hover:text-gold-600",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button primitive. Renders a Next.js <Link> when `href` is provided,
 * otherwise a native <button>. Shares one variant system either way.
 */
export function Button(props: ButtonProps) {
  const { variant, size, className } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, ...linkProps } = props;
    return <Link className={classes} {...linkProps} />;
  }

  const { variant: _v, size: _s, className: _c, href: _h, ...buttonProps } =
    props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
