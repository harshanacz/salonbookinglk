import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300",
        className
      )}
      {...props}
    />
  )
)

Input.displayName = "Input"

export { Input }
