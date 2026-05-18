"use client"

import React, { useState } from "react"
import { GlassButton } from "../ui/GlassButton"

type FileUploadProps = {
  onUploadSuccess: (file: File) => void
}

export default function FileUpload({ onUploadSuccess }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (!file) return

    setFileName(file.name)
    onUploadSuccess(file)
  }

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return

    const file = files[0]
    if (!file) return

    setFileName(file.name)
    onUploadSuccess(file)
  }

  const handleClick = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".pdf,.docx,.txt,.md"
    input.multiple = false

    input.onchange = e => handleFileSelect((e.target as HTMLInputElement).files)

    input.click()
  }

  return (
    <div className="flex w-[700px] flex-col">
      <h1 className="mb-12 text-center text-2xl font-semibold text-white">
        Welcome back, Robert Miller
      </h1>

      <div className="flex flex-col items-center justify-center rounded-xl bg-black p-8 text-white">
        <div
          className={`mx-auto w-[600px] cursor-pointer rounded-2xl border-2 border-dashed transition-colors ${
            isDragging ? "border-purple-500 bg-purple-950/20" : "border-purple-800 bg-black"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-lg bg-[#9747FF0D] p-8 text-zinc-400 shadow-[inset_0px_1px_1px_#FFFFFF1A,inset_-2px_-2px_4px_#FFFFFF1A] backdrop-blur-[25px] transition-all hover:bg-[#9747FF1A] hover:text-white">
              <img src="/svgs/cloud.svg" alt="Upload" className="h-20 w-20 object-contain" />
            </div>

            {fileName ? (
              <p className="mt-6 text-lg font-medium text-purple-400">{fileName}</p>
            ) : (
              <>
                <p className="mt-6 mb-2 text-xl">
                  <span className="font-medium">Drag & Drop</span> or{" "}
                  <span className="text-purple-400 underline">Click to Upload</span>
                </p>

                <p className="mb-12 text-sm text-gray-400">Supported: PDF, DOCX, TXT, MD</p>
              </>
            )}

            <GlassButton
              type="button"
              onClick={e => {
                e.stopPropagation()
                handleClick()
              }}
            >
              Upload Document
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  )
}
