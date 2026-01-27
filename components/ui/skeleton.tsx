import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

// Project card skeleton
function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-2/3" />
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <div className="mt-4 flex gap-3">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </div>
  )
}

// Projects section skeleton
function ProjectsSectionSkeleton() {
  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Skeleton className="mx-auto h-10 w-64" />
          <Skeleton className="mx-auto mt-4 h-5 w-80" />
        </div>
        <div className="mt-8 text-center">
          <Skeleton className="mx-auto h-6 w-96" />
        </div>
        {/* DVE Highlight Skeleton */}
        <Skeleton className="mt-8 h-64 w-full rounded-lg" />
        {/* Featured Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    </section>
  )
}

// About section skeleton
function AboutSectionSkeleton() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Skeleton className="mx-auto h-10 w-48" />
          <Skeleton className="mx-auto mt-4 h-5 w-72" />
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Image Skeleton */}
          <div className="flex justify-center lg:justify-start">
            <Skeleton className="h-80 w-80 rounded-2xl" />
          </div>
          {/* Content Skeleton */}
          <div className="space-y-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Skeleton className="h-24 rounded-lg" />
              <Skeleton className="h-24 rounded-lg" />
              <Skeleton className="h-24 rounded-lg" />
              <Skeleton className="h-24 rounded-lg" />
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Skeleton, ProjectCardSkeleton, ProjectsSectionSkeleton, AboutSectionSkeleton }
