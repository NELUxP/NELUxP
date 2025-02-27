import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden", // Added overflow-hidden
  {
    variants: {
      variant: {
        default: "bg-[#3B8526] text-white shadow-[inset_0_-4px_#2A631C] hover:brightness-110 active:translate-y-[2px] active:shadow-[inset_0_-2px_#2A631C] border-b-[4px] border-[#2A631C]",
        destructive: "bg-[#B02E26] text-white shadow-[inset_0_-4px_#8C231C] hover:brightness-110 active:translate-y-[2px] active:shadow-[inset_0_-2px_#8C231C] border-b-[4px] border-[#8C231C]",
        outline: "border-2 border-[#3B8526] bg-transparent text-[#3B8526] hover:bg-[#3B8526]/10 shadow-[inset_0_-4px_#2A631C] active:translate-y-[2px] active:shadow-[inset_0_-2px_#2A631C]",
        secondary: "bg-[#5A5A5A] text-white shadow-[inset_0_-4px_#3D3D3D] hover:brightness-105 active:translate-y-[2px] active:shadow-[inset_0_-2px_#3D3D3D] border-b-[4px] border-[#3D3D3D]",
        ghost: "hover:bg-[#3B8526]/50 hover:text-white active:translate-y-[2px]",
        link: "text-[#3B8526] underline-offset-4 hover:underline",
        minecraft: "bg-[#2196F3] text-white shadow-[inset_0_-4px_#1976D2] hover:brightness-110 active:translate-y-[2px] active:shadow-[inset_0_-2px_#1976D2] border-b-[4px] border-[#1976D2]",
      },
      size: {
        default: "h-12 px-8 py-3 max-w-full", // Added max-w-full
        sm: "h-10 px-6 py-2 max-w-full", // Added max-w-full
        lg: "h-14 px-10 py-4 max-w-full", // Added max-w-full
        icon: "h-12 w-12 max-w-full", // Added max-w-full
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };