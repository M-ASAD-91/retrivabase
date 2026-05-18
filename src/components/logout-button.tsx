"use client"

import { useRouter } from "next/navigation"
import { useTransition, useState } from "react"
import { LogoutModal } from "./logout-modal"

export function LogoutButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLogout = () => {
    startTransition(async () => {
      try {
        await fetch("/api/auth/session", { method: "DELETE" })
        router.push("/sign-in")
        router.refresh()
      } catch (error) {
        console.error("Logout failed:", error)
      } finally {
        setIsModalOpen(false)
      }
    })
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold disabled:opacity-50"
        title="Sign out"
      >
        Sign out
      </button>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
        isPending={isPending}
      />
    </>
  )
}
