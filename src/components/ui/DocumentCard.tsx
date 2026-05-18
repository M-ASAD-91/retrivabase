"use client"

import { useState } from "react"
import { MoreHorizontal, RefreshCcw, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import Word from "../../../public/svgs/word.svg"
import Pdf from "../../../public/svgs/pdf.svg"
import Docx from "../../../public/svgs/group.svg"

interface DocumentCardProps {
  filename: string
  type: "pdf" | "docx" | "txt" | "md"
  status: "processed" | "pending" | "error"
}

const fileTypeIconMap = {
  pdf: Pdf,
  docx: Docx,
  txt: Word,
  md: Word,
}

const statusColorMap = {
  processed: "text-green-500 bg-green-500/10 border border-green-500/30",
  pending: "text-[#FF8D28] bg-[#40382C] border border-yellow-500/30",
  error: "text-[#FF383C] bg-[#3F2C2C] border border-red-500/30",
}

export const DocumentCard = ({ filename, type, status }: DocumentCardProps) => {
  const Icon = fileTypeIconMap[type]
  const statusClasses = statusColorMap[status]
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const handleDelete = () => {
    // Implement delete logic here
    setIsDeleteOpen(false)
    console.log("Deleted:", filename)
  }

  return (
    <>
      <div className="group w-[300px] h-[200px] flex flex-col justify-between rounded-xl border border-[#4F4F4F]  bg-card  transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">

        {/* File Icon */}
        <div className="pt-4">
          <div className="mb-4 flex justify-center">
            <Image src={Icon} alt={type} width={48} height={48} />
          </div>

          {/* Filename */}
          <p className="mb-3 text-sm  font-medium text-foreground truncate text-center">
            {filename}
          </p>
        </div>


        {/* Footer */}
        <div className="flex items-center justify-between p-5 bg-black rounded-b-xl">
          <span
            className={`px-4 py-1 rounded-md text-xs font-medium capitalize ${statusClasses}`}
          >
            {status}
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded cursor-pointer hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100 outline-none">
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl text-white p-1" align="end">
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2 px-3 py-2 text-sm focus:bg-white/5 focus:text-white rounded-xl">
                <RefreshCcw className="h-4 w-4 text-gray-400" />
                <span>Reprocess</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#2A2A2A] my-1" />
              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-2 px-3 py-2 text-sm text-[#FF6B6B] focus:bg-[#FF6B6B]/10 focus:text-[#FF6B6B] rounded-xl"
                onSelect={() => setIsDeleteOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="bg-black border border-[#2A2A2A] sm:rounded-3xl max-w-sm p-0 overflow-hidden text-white [&>button]:hidden">
          <div className="p-8 pb-4 flex flex-col items-center text-center">
            <DialogHeader className="flex flex-col items-center">
              <DialogTitle className="text-xl font-medium text-white text-center">Delete Document</DialogTitle>
              <DialogDescription className="text-gray-400 text-center mt-2 font-normal text-base leading-relaxed">
                Are you sure, you want to delete this<br />document permanently?
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="flex items-center gap-3 p-8 pt-2 justify-center w-full">
            <Button
              variant="outline"
              onClick={() => setIsDeleteOpen(false)}
              className="flex-1 bg-[#1A1A1A] hover:bg-[#2A2A2A] hover:text-white border-none text-white rounded-full h-12 text-base font-normal"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="flex-1 bg-[#EA4335] hover:bg-[#D3382C] text-white rounded-full h-12 text-base font-normal shadow-none"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
