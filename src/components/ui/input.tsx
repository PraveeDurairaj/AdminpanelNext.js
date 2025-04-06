import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, label, type, ...props }: React.ComponentProps<"input">) {
  const input = 'border-[var(--input-border)] rounded-[4px] focus:border-[var(--input-border-focus)] h-[50px]'
  return (
    <div>
      {label && <label className="mb-1.5 inline-block text-[16px] font-[500]">{label}</label>}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex  w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file: file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible: focus-visible:ring-ring/50 ",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className, input
        )}
        {...props}
      />
    </div>

  )
}

export { Input }
