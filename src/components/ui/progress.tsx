import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-primary"
        style={{ width: `${value}%` }}
      />
    </div>
  )
)
Progress.displayName = "Progress"

export { Progress }