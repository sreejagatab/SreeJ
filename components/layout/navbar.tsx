"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navLinks, personalInfo } from "@/components/data/portfolio-data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Track active section on scroll
  useEffect(() => {
    const sections = navLinks
      .filter(link => !link.external && link.href.startsWith('#'))
      .map(link => link.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      setIsOpen(false)
      return
    }
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = !link.external && activeSection === link.href.slice(1)

            return link.external ? (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "px-3 py-2 text-sm transition-colors hover:text-foreground",
                  isActive ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            )
          })}
          <Button
            size="sm"
            className="ml-4"
            onClick={() => {
              const contact = document.querySelector("#contact")
              contact?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => {
                const isActive = !link.external && activeSection === link.href.slice(1)

                return (
                  <DropdownMenuItem key={link.href} asChild>
                    {link.external ? (
                      <Link href={link.href} onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(isActive && "text-primary font-medium")}
                      >
                        {link.label}
                      </a>
                    )}
                  </DropdownMenuItem>
                )
              })}
              <DropdownMenuItem asChild>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="font-medium text-primary"
                >
                  Hire Me
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
