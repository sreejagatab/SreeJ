import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface SectionWrapperProps {
  id: string
  title?: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-24", className)}
    >
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-muted-foreground">
                {subtitle}
              </p>
            )}
            <Separator className="mx-auto mt-6 w-16" />
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
