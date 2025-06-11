import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"
import Logo from "@/components/logo"
import IconLogo from "@/components/icon-logo-component"

export default function Footer() {
  return (
    <footer className="bg-[#4A148C] text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <IconLogo width={40} height={40} className="invert" />
              </Link>
              <Logo className="invert" width={120} height={40} />
            </div>
            <p className="text-sm text-white/80">Connecting businesses with high-quality talent from Southeast Asia.</p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/gobigscaleup" className="text-white hover:text-white/80">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/gobigscaleup/" className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-sm text-white/80 hover:text-white">
                  Accounting & Finance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-white/80 hover:text-white">
                  Marketing & Sales
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-white/80 hover:text-white">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-white/80 hover:text-white">
                  Administration
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-sm text-white/80 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Go Big Scale Up. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
