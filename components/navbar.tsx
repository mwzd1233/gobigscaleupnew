"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import IconLogo from "@/components/icon-logo-component"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <IconLogo width={40} height={40} />
          </Link>
          <Logo width={120} height={40} showText={true} className="hidden md:block" />
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4">
            Jobs
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button asChild className="bg-[#E41B17] hover:bg-[#E41B17]/90 text-white font-semibold shadow-sm">
            <Link href="/#contact">Get Started</Link>
          </Button>
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Button
              asChild
              className="w-full bg-[#E41B17] hover:bg-[#E41B17]/90 text-white font-semibold shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/#contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
