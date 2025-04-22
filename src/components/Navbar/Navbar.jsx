import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-4 md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">LOGO</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="ml-auto rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Desktop Navigation - Centered */}
        <div className="hidden flex-1 justify-center md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className=" transition-colors "
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className=" transition-colors "
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className=" transition-colors "
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex md:items-center md:gap-2">
          <Link href="/login">
            <button className="rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile right-side spacer */}
        <div className="flex-1 md:hidden"></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50  shadow-md md:hidden">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-2  transition-colors "
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className="py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full rounded-md border px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Login
                  </button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Sign Up
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
