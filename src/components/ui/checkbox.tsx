import * as React from "react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn(
      "w-5 h-5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500",
      className
    )}
    {...props}
  />
))

Checkbox.displayName = "Checkbox"

export { Checkbox }
