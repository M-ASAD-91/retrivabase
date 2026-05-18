"use client"

export default function ChatRoom() {
  return (
    <div className="flex h-screen w-full max-w-7xl flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-end border-white/10 px-6 py-4">
        <div />
        <div className="flex items-center gap-3 rounded-lg bg-[#1a1a1a] px-4 py-2">
          <img src="/svgs/pdf.svg" alt="" />
          <span className="text-sm text-gray-200">myfile.pdf</span>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
          RM
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6 pb-28">
        {/* Assistant */}
        <div className="flex max-w-4xl items-start gap-4">
          <img src="/svgs/profile.svg" alt="" />
          <p className="text-gray-200">
            Hello! I am your multilingual document assistant, here to help you with information
            related to the uploaded document.
          </p>
        </div>

        {/* User */}
        <div className="flex justify-end">
          <div className="flex max-w-3xl items-start gap-4">
            <div className="rounded-2xl bg-[#1f1f1f] px-5 py-3 text-gray-200">
              I want to know about the Details in the file what is this for and which technology it
              uses for development.
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
              RM
            </div>
          </div>
        </div>

        {/* Assistant */}
        <div className="flex max-w-5xl items-start gap-4">
          <img src="/svgs/profile.svg" alt="" />
          <p className="text-sm leading-relaxed text-gray-300">
            The document is a Statement of Work (SOW) detailing the development of a sports betting
            recommendation app using Flutter and Firebase.
          </p>
        </div>

        {/* User */}
        <div className="flex justify-end">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-[#1f1f1f] px-5 py-3 text-gray-200">
              Ok Thanks a lot for the information
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
              RM
            </div>
          </div>
        </div>

        {/* Assistant */}
        <div className="flex items-start gap-4">
          <img src="/svgs/profile.svg" alt="" />
          <p className="text-gray-200">I am happy to help you.</p>
        </div>
      </div>

      {/* Bottom Input */}
      <div className="fixed right-0 bottom-0 left-[280px] border-white/10 py-4 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex items-center gap-4 rounded-full bg-[#1f1f1f] px-5 py-3">
            <button
              className="text-gray-400 transition hover:text-white"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <img src="/svgs/attach.svg" alt="" />
            </button>

            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={e => {
                const file = e.target.files?.[0]
                if (file) {
                  const inputField = document.querySelector(
                    'input[placeholder="Ask anything"]'
                  ) as HTMLInputElement
                  if (inputField) {
                    inputField.value = file.name
                  }
                }
              }}
              accept="image/*"
            />

            <input
              type="text"
              placeholder="Ask anything"
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
            />

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 transition hover:bg-gray-600">
              <img src="/svgs/send.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
