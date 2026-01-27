import { Suspense } from "react"
import { Navbar } from "@/components/layout/navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { JsonLd } from "@/components/seo/json-ld"
import { AboutSectionSkeleton, ProjectsSectionSkeleton } from "@/components/ui/skeleton"
import {
  getPersonSchema,
  getWebSiteSchema,
  getProfessionalServiceSchema,
  getFAQSchema
} from "@/lib/seo"

export default function Page() {
  // Combine all schemas into one array
  const jsonLdData = [
    getPersonSchema(),
    getWebSiteSchema(),
    getProfessionalServiceSchema(),
    getFAQSchema(),
  ]

  return (
    <>
      {/* Client-side JSON-LD for crawlers that execute JS */}
      <JsonLd data={jsonLdData} />

      <div className="relative">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<AboutSectionSkeleton />}>
            <About />
          </Suspense>
          <Services />
          <Suspense fallback={<ProjectsSectionSkeleton />}>
            <Projects />
          </Suspense>
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
