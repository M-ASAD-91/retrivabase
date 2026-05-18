// "use client"

// import Link from "next/link"

// const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <Link
//     href={href}
//     className="group relative px-4 py-2 text-sm font-medium text-white transition-colors hover:text-white"
//   >
//     {children}
//     <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
//   </Link>
// )

// const Separator = () => (
//   <div className="flex w-8 items-center justify-center">
//     <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50" />
//   </div>
// )

// export default function Navbar() {
//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-6">
//       <div className="tex-twhite flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <img src="/svgs/headrlogo.svg" alt="" />

//           <span className="text-lg font-bold tracking-tight text-white">Retrievabase.ai</span>
//         </Link>

//         {/* Center Nav Links */}
//         <div className="hidden items-center rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-6 py-3 shadow-lg backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-[var(--background)]/10 md:flex">
//           <NavLink href="#how-it-works">How It Works</NavLink>
//           <Separator />
//           <NavLink href="#use-cases">Use Cases</NavLink>
//           <Separator />
//           <NavLink href="#demo">Demo</NavLink>
//           <Separator />
//           <NavLink href="#features">Features</NavLink>
//         </div>

//         {/* Right CTA */}
//         <div className="flex items-center gap-4">
//           <Link
//             href="/sign-in"
//             className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--background)]/80 bg-[var(--primary)] px-6 py-4 text-sm font-medium text-white shadow-lg shadow-md backdrop-blur-md backdrop-saturate-150 transition-all hover:bg-[var(--primary)]/90 hover:shadow-[var(--primary)]/25 hover:shadow-lg focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:outline-none supports-[backdrop-filter]:bg-[var(--background)]/10"
//           >
//             <span className="relative z-10">Try RAG Demo</span>
//             <div className="pointer-events-none absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-[-100%]" />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group relative px-4 py-2 text-sm font-medium text-white transition-colors hover:text-white"
  >
    {children}
    <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-[var(--primary)] transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
)

const Separator = () => (
  <div className="flex w-8 items-center justify-center">
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50" />
  </div>
)

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-6">
      <div className="flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/svgs/headrlogo.svg" alt="" />
          <span className="text-lg font-bold tracking-tight text-white">Retrievabase.ai</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-6 py-3 shadow-lg backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-[var(--background)]/10 md:flex">
          <NavLink href="#how-it-works">How It Works</NavLink>
          <Separator />
          <NavLink href="#use-cases">Use Cases</NavLink>
          <Separator />
          <NavLink href="#demo">Demo</NavLink>
          <Separator />
          <NavLink href="#features">Features</NavLink>
        </div>

        {/* Right CTA + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <Link
            href="/sign-in"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--primary)] px-6 py-4 text-sm font-medium text-white shadow-lg shadow-md backdrop-blur-md backdrop-saturate-150 transition-all hover:bg-[var(--primary)]/90 hover:shadow-[var(--primary)]/25 hover:shadow-lg focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:outline-none md:inline-flex"
          >
            <span className="relative z-10">Try RAG Demo</span>
            <div className="pointer-events-none absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-[-100%]" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            ref={buttonRef}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="mt-4 flex flex-col gap-2 rounded-xl border border-[var(--border)] px-6 py-4 shadow-lg backdrop-blur-md md:hidden"
        >
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#use-cases">Use Cases</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#features">Features</NavLink>
          <Link
            href="/sign-in"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 font-medium text-white hover:bg-[var(--primary)]/90"
          >
            Try RAG Demo
          </Link>
        </div>
      )}
    </nav>
  )
}
