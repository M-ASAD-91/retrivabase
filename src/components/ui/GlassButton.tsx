"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

function GlassButton({
  className,
  fullWidth = true,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-2 cursor-pointer",
        "h-[56px] rounded-[30px] px-5 py-3",
        fullWidth && "w-[479px] max-w-full",
        "text-white text-base font-medium",
        "bg-[#9747FF0D]",
        "backdrop-blur-[25px]",
        "shadow-[inset_0_1px_1px_#FFFFFF1A,inset_-2px_-2px_4px_#FFFFFF1A]",
        "transition-all duration-200",
        "hover:bg-[#9747FF1A]",
        "active:scale-[0.98]",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
    >
      {children}
    </button>
  );
}

export { GlassButton };
