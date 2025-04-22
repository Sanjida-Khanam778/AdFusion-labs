import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#475569] py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Copyright */}
          <div className="text-sm">&copy; 2023 Wrapp. All rights reserved</div>

          {/* Right side with links and social icons */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            {/* Navigation links */}
            <nav className="flex space-x-6">
              <Link href="/terms" className="text-sm hover:text-[#0f172a]">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm hover:text-[#0f172a]">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm hover:text-[#0f172a]">
                Contact
              </Link>
            </nav>

            {/* Social icons */}
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-[#0f172a]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className=" hover:text-[#0f172a]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className=" hover:text-[#0f172a]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className=" hover:text-[#0f172a]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className=" hover:text-[#0f172a]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
