"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { GlassButton } from "@/components/ui/GlassButton"
import { Dropdown } from "@/components/ui/Dropdown"

export default function SignUpPage() {
  const router = useRouter()
  const [profession, setProfession] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    startTransition(async () => {
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (!response.ok) {
          setError(data.error || "Registration failed.")
          return
        }

        router.push("/")
        router.refresh()
      } catch {
        setError("An error occurred. Please try again.")
      }
    })
  }

  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 py-12">
      {/* Header */}
      <div className="flex flex-col items-center">
        <Image
          src="/svgs/logo.svg"
          alt="Retrivabase Logo"
          width={120}
          height={40}
          className="mb-4"
          priority
        />
        <h1 className="text-2xl font-semibold text-white md:text-[32px]">Create an Account</h1>
        <p className="text-center text-xs text-white/80 md:text-sm">
          Create an account to unlock fast document uploads, AI-driven answers, and searchable
          insights across all your files.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-5 md:p-8">
        {error && (
          <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        <Input
          label="Full name"
          type="text"
          placeholder="Full name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          minLength={6}
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          minLength={6}
          required
        />

        <Dropdown
          label="Select Your Profession"
          value={profession}
          onChange={e => setProfession(e.target.value)}
          options={[
            { label: "Choose a profession", value: "" },
            { label: "Developer", value: "developer" },
            { label: "Designer", value: "designer" },
            { label: "Student", value: "student" },
            { label: "Writer", value: "writer" },
            { label: "Other", value: "other" },
          ]}
        />

        <GlassButton type="submit" disabled={isPending}>
          {isPending ? "Creating account..." : "Sign up"}
        </GlassButton>
      </form>

      {/* Footer */}
      <div className="flex justify-center">
        <Link href="/sign-in" className="text-sm font-semibold text-white hover:underline">
          Already have an account? <span className="text-[#9747FF]">Sign in</span>
        </Link>
      </div>
    </section>
  )
}
