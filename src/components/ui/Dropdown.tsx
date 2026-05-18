"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: {
    label: string
    value: string
  }[]
}

function Dropdown({ label, options, className, ...props }: DropdownProps) {
  return (
    <div className="w-full space-y-2">
      {/* Label */}
      {label && (
        <label className="font-poppins text-[14px] leading-[20px] font-medium text-white">
          {label}
        </label>
      )}

      {/* Dropdown */}
      <div className="relative w-full">
        <select
          className={cn(
            "h-[44px] w-full rounded-[30px]",
            "border",
            "bg-transparent",
            "px-[20px] py-[10px] pr-12",
            "text-[#DDDDDD]",
            "cursor-pointer appearance-none outline-none",
            "focus:ring-1 focus:ring-white/50",
            className
          )}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value} className="bg-black text-white">
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white">
          <ChevronDown size={16} />
        </span>
      </div>
    </div>
  )
}

export { Dropdown }
