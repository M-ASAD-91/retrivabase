"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteAccountModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[516px] rounded-[30px] border border-[#DDDDDD] bg-[#09090b] p-8 text-center sm:rounded-[30px]">
        <DialogHeader className="flex flex-col items-center gap-2">
          <DialogTitle className="font-poppins text-center text-[28px] leading-tight font-semibold text-white">
            Are you sure you want to delete your account?
          </DialogTitle>
          <DialogDescription className="font-poppins text-center text-lg leading-relaxed font-light text-[#ffffff] opacity-80">
            This action cannot be undone and will permanently remove all your data, including
            documents, chats, and personal information. If you're sure, please confirm below.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-8 flex flex-row items-center justify-center gap-4 sm:justify-center">
          <Button
            variant="outline"
            onClick={onClose}
            className="h-[56px] w-[180px] rounded-[30px] border-[#4f4f4f] bg-transparent text-xl font-medium text-white hover:bg-white/5"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="h-[56px] w-[180px] rounded-[30px] bg-[#dc2c2c] text-xl font-medium text-white hover:bg-[#dc2c2c]/90"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
