"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInSchema, type SignInInput } from "@/lib/validations/auth"
import { Input } from "@/components/ui/input"
import { useSignIn } from "@/lib/api/auth"
import Image from "next/image"
import { GlassButton } from "@/components/ui/GlassButton"

export default function SignInPage() {
  const router = useRouter()
  const signInMutation = useSignIn()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInInput) => {
    try {
      await signInMutation.mutateAsync(data)
      router.push("/chats")
      router.refresh()
    } catch {
      // handled by react-query
    }
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
        <h1 className="text-2xl font-semibold text-white md:text-[32px]">Welcome Back!</h1>
        <p className="text-sm text-white/80">Sign in to your account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl p-0 md:p-8">
        {/* API Error */}
        {signInMutation.isError && (
          <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            {signInMutation.error instanceof Error ? signInMutation.error.message : "Login failed."}
          </div>
        )}

        {/* Email */}
        <div className="space-y-1">
          <Input label="Email" type="email" placeholder="Enter your email" {...register("email")} />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <p className="text-xs text-red-400">{errors.password.message}</p>}

          <Link
            href="/forgot-password"
            className="block text-right text-sm font-semibold text-[#9747FF] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <GlassButton type="submit" disabled={isSubmitting || signInMutation.isPending}>
          {isSubmitting || signInMutation.isPending ? "Signing in..." : "Sign in"}
        </GlassButton>
      </form>

      {/* Footer */}
      <div className="flex justify-center">
        <Link href="/sign-up" className="text-sm font-semibold text-white hover:underline">
          Don&apos;t have an account? <span className="text-[#9747FF]">Sign up</span>
        </Link>
      </div>
    </section>
  )
}
