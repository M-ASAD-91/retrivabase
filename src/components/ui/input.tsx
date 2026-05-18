"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

function Input({
  className,
  type,
  label,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full space-y-2">
      {/* Label */}
      {label && (
        <label
          className="
            font-poppins
            text-[14px]
            font-medium
            leading-[20px]
            text-white
          "
        >
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative w-full">
        <input
          type={isPassword && showPassword ? "text" : type}
          data-slot="input"
          className={cn(
            "w-full",
            "h-[44px]",
            "rounded-[30px]",
            "border border-white",
            "bg-transparent",
            "px-[20px] py-[10px]",
            "text-[#DDDDDD]",
            "placeholder:text-white/50",
            "outline-none",
            "transition-all",
            "focus:ring-1 focus:ring-white/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            isPassword && "pr-12",
            className
          )}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              text-white
              hover:opacity-80
              focus:outline-none
            "
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff size={16} color="#FFFFFF" />
            ) : (
              <Eye size={16} color="#FFFFFF" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export { Input };

