"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteChatModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  isPending?: boolean
}

export function DeleteChatModal({ isOpen, onClose, onConfirm, isPending }: DeleteChatModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] rounded-[32px] border border-[#DDDDDD] bg-black p-8 text-center text-white">
        <DialogHeader className="flex flex-col items-center gap-2">
          <DialogTitle className="text-2xl font-semibold">Delete Chat</DialogTitle>
          <DialogDescription className="text-center text-lg text-zinc-400">
            Are you sure, you want to delete this chat permanently?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-12 flex-1 rounded-full border-zinc-800 bg-transparent text-lg font-medium text-white hover:bg-zinc-900 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isPending}
            className="h-12 flex-1 rounded-full border-none bg-[#EF4444] text-lg font-medium text-white hover:bg-[#DC2626]"
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
