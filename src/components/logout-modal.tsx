"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  isPending?: boolean
}

export function LogoutModal({ isOpen, onClose, onConfirm, isPending }: LogoutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] rounded-[32px] border border-[#DDDDDD] bg-black p-8 text-center">
        <DialogHeader className="flex flex-col items-center gap-2">
          <DialogTitle className="text-2xl font-semibold text-white">Logout</DialogTitle>
          <DialogDescription className="text-lg text-zinc-400">
            Are you sure, you want to logout?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-12 flex-1 rounded-full border-zinc-800 bg-transparent text-lg font-medium text-white hover:bg-zinc-900"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isPending}
            className="h-12 flex-1 rounded-full border-none bg-[#8B5CF6] text-lg font-medium text-white hover:bg-[#7C3AED]"
          >
            {isPending ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
