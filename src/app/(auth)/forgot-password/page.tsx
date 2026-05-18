"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { GlassButton } from "@/components/ui/GlassButton"
import Image from "next/image"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [demoOtp, setDemoOtp] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setDemoOtp(null)

    startTransition(async () => {
      try {
        const response = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })

        const data = await response.json()

        if (!response.ok) {
          setError(data.error || "Failed to send reset code.")
          return
        }

        setSuccess(true)
        if (data.demoOtp) setDemoOtp(data.demoOtp)
      } catch {
        setError("An error occurred. Please try again.")
      }
    })
  }

  if (success) {
    return (
      <section className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 py-12">
        <div className="rounded-3xl p-8 text-white">
          <p className="text-xs tracking-[0.4em] text-white/60 uppercase">Check Your Email</p>
          <h1 className="mt-2 text-3xl font-semibold">Reset code sent</h1>
          <p className="mt-2 text-sm text-white/70">
            We&apos;ve sent a 6-digit code to <strong className="text-white">{email}</strong>
          </p>

          {demoOtp && (
            <div className="mt-4 rounded-2xl border border-white/20 bg-white/5 p-4">
              <p className="mb-1 text-xs text-white/60">Demo OTP Code</p>
              <p className="font-mono text-2xl font-bold text-white">{demoOtp}</p>
            </div>
          )}
        </div>

        <GlassButton>
          <Link href={`/verify-otp?email=${encodeURIComponent(email)}`}>
            Continue to verify OTP
          </Link>
        </GlassButton>

        <Link
          href="/sign-in"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to sign in
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-6 px-6 py-12">
      <div className="flex flex-col items-center rounded-3xl text-white">
        <Image
          src="/svgs/logo.svg"
          alt="Retrivabase Logo"
          width={120}
          height={40}
          className="mb-4"
          priority
        />
        <h1 className="text-2xl font-semibold text-white md:text-[32px]">Forgot Password</h1>

        <p className="mt-2 text-center text-xs text-[#FFFFFF] md:text-sm">
          Enter your email and we’ll send you an OTP if an account exists.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-0 md:p-8">
        {error && (
          <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <GlassButton type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send OTP"}
        </GlassButton>
      </form>

      <div className="flex justify-center">
        <Link href="/sign-in" className="text-sm font-semibold text-white hover:underline">
          Remember Password? <span className="text-[#9747FF]">Sign-in</span>
        </Link>
      </div>
    </section>
  )
}
