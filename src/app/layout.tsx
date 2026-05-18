import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/providers/query-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://retrivabase.com"),
  title: "Retrivabase",
  description:
    "Retrivabase is a document management system that allows users to store and manage their documents in a secure and efficient way.",
  keywords: ["Next.js", "Tailwind CSS",],
  icons: {
    icon: "/svgs/logo.svg",
  },
}

// Primary font → Poppins
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

// Secondary font → Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "600"],
  display: "swap",
})

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#08080B] text-[var(--foreground)] antialiased font-primary"
        suppressHydrationWarning
      >
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
