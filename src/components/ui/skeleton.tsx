import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-[var(--sleleton-bg)] animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
