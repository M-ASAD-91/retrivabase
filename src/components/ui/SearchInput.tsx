"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <Search className="absolute top-1/2 left-5 -translate-y-1/2 text-white/50" size={20} />
        <input
          type="text"
          className={cn(
            "h-[44px] w-full rounded-[30px]",
            "border",
            "bg-transparent",
            "py-[10px] pr-[20px] pl-[50px]",
            "text-[#DDDDDD] placeholder:text-white/50",
            "outline-none",
            "transition-all",
            "focus:ring-1 focus:ring-white/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
