"use client"

import { ChatDocuments } from "@/components/ui/ChatDocuments"
import { SearchInput } from "@/components/ui/SearchInput"
import { Dropdown } from "@/components/ui/Dropdown"
const documentsData = {
  "Chat name 1": [
    {
      id: "1",
      filename: "myuniversityfile.pdf",
      type: "pdf" as const,
      status: "processed" as const,
    },
    {
      id: "2",
      filename: "myuniversityfile.docx",
      type: "docx" as const,
      status: "pending" as const,
    },
    { id: "3", filename: "myuniversityfile.pdf", type: "pdf" as const, status: "error" as const },
    {
      id: "4",
      filename: "myuniversityfile.txt",
      type: "txt" as const,
      status: "processed" as const,
    },
  ],
  "Chat name 2": [
    {
      id: "5",
      filename: "myuniversityfile.pdf",
      type: "pdf" as const,
      status: "processed" as const,
    },
    { id: "6", filename: "myuniversityfile.md", type: "md" as const, status: "processed" as const },
  ],
  "Chat name 3": [
    {
      id: "7",
      filename: "myuniversityfile.docx",
      type: "docx" as const,
      status: "processed" as const,
    },
    {
      id: "8",
      filename: "myuniversityfile.pdf",
      type: "pdf" as const,
      status: "processed" as const,
    },
    { id: "9", filename: "myuniversityfile.txt", type: "txt" as const, status: "error" as const },
  ],
}
export default function Documents() {
  return (
    <div>
      <div className="flex justify-between py-4">
        <div className="">
          <h1 className="bg-gradient-to-r from-[#9747FF] to-purple-400 bg-clip-text text-xl font-semibold text-transparent">
            Documents
          </h1>
          <p className=" text-white opacity-90">
            Access all your uploaded documents in one place
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full">
            <SearchInput placeholder="Search..." />
          </div>
          <div className="w-[250px]">
            <Dropdown
              options={[
                { label: "All", value: "all" },
                { label: "PDF", value: "pdf" },
                { label: "DOCX", value: "docx" },
                { label: "TXT", value: "txt" },
                { label: "MD", value: "md" },
              ]}
              defaultValue="all"
            />
          </div>
        </div>
      </div>

      {Object.entries(documentsData).map(([chatName, documents]) => (
        <ChatDocuments key={chatName} chatName={chatName} documents={documents} />
      ))}
    </div>
  )
}
