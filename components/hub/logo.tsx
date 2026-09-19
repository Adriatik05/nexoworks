import { cn } from '@/lib/utils'

export function NexoLogo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span
        aria-hidden
        className="relative inline-flex size-5 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-[5px] bg-foreground" />
        <span className="absolute right-1 bottom-1 size-1.5 rounded-[2px] bg-background" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        Nexo<span className="text-muted-foreground">Works</span>
      </span>
    </span>
  )
}
