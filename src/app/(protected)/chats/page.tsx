// "use client"

// import ChatRoom from "@/components/chats/ChatRoom"
// import FileUpload from "@/components/chats/FileUpload"

// export default function Chats() {
//   return (
//     <div className=" flex justify-center items-center h-full">
//       <FileUpload />
//       <ChatRoom/> 
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import ChatRoom from "@/components/chats/ChatRoom"
import FileUpload from "@/components/chats/FileUpload"

export default function Chats() {
  const [fileUploaded, setFileUploaded] = useState(false)

  return (
    <div className="flex justify-center items-center h-full">
      {!fileUploaded ? (
        <FileUpload onUploadSuccess={() => setFileUploaded(true)} />
      ) : (
        <ChatRoom />
      )}
    </div>
  )
}
