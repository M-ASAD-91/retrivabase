"use client"

import { useState } from "react"
import { AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@radix-ui/react-avatar"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Separator } from "@radix-ui/react-separator"
import { DeleteAccountModal } from "@/components/settings/DeleteAccountModal"

export default function Frame() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleDeleteAccount = () => {
    // Add deletion logic here
    console.log("Account deletion initiated")
    setIsDeleteModalOpen(false)
  }

  return (
    <div className="flex w-full flex-col items-start gap-[84px]">
      <header className="flex w-full max-w-[401px] flex-col items-start gap-1">
        <h1 className="[font-family:'Poppins',Helvetica] text-xl leading-6 font-semibold tracking-[0] text-[#9747ff]">
          Settings
        </h1>
        <p className="[font-family:'Poppins',Helvetica] text-base leading-7 font-normal tracking-[0] text-[#ffffff]">
          Manage and customize your account
        </p>
      </header>

      <div className="flex w-full flex-col items-start gap-8">
        <section className="flex w-full flex-col items-end gap-6">
          <div className="flex w-full items-start justify-between">
            <div className="flex w-full max-w-[401px] flex-col items-start gap-1">
              <h2 className="[font-family:'Poppins',Helvetica] text-xl leading-6 font-medium tracking-[0] text-[#ffffff]">
                Profile Picture
              </h2>
              <p className="[font-family:'Poppins',Helvetica] text-base leading-7 font-light tracking-[0] text-[#ffffff]">
                Upload your profile picture in JPG, PNG, SVG
              </p>
            </div>

            <div className="relative h-20 w-20">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-[linear-gradient(180deg,rgba(156,34,209,1)_0%,rgba(61,17,119,1)_100%)] [font-family:'Poppins',Helvetica] text-[28px] font-semibold text-[#ffffff]">
                  RM
                </AvatarFallback>
              </Avatar>
              <button className="absolute top-14 left-14 flex h-6 w-6 items-center justify-center rounded-xl border border-solid border-[#fafbfc] bg-[#ffffff]">
                <img className="h-3 w-3" alt="Camera" src="/svgs/camera.svg" />
              </button>
            </div>
          </div>
        </section>

        <Separator className="bg-[#ffffff] opacity-20" />

        <section className="flex w-full flex-col items-end gap-6">
          <div className="flex w-full items-start justify-between">
            <div className="flex w-full max-w-[401px] flex-col items-start gap-1">
              <h2 className="[font-family:'Poppins',Helvetica] text-xl leading-6 font-medium tracking-[0] text-[#ffffff]">
                Personal Information
              </h2>
              <p className="[font-family:'Poppins',Helvetica] text-base leading-7 font-light tracking-[0] text-[#ffffff]">
                Manage your profile information.
              </p>
            </div>

            <div className="flex items-center justify-end gap-4">
              <div className="flex w-[434px] items-start gap-3">
                <div className="flex flex-1 flex-col items-start gap-2">
                  <Label className="[font-family:'Poppins',Helvetica] text-sm leading-5 font-medium tracking-[0] text-[#ffffff]">
                    Full Name
                  </Label>
                  <Input
                    defaultValue="Robert Miller"
                    className="font-14-btn-small h-[52px] rounded-[30px] border border-solid border-[#ffffff] bg-transparent px-5 py-2.5 text-[length:var(--14-btn-small-font-size)] leading-[var(--14-btn-small-line-height)] font-[number:var(--14-btn-small-font-weight)] tracking-[var(--14-btn-small-letter-spacing)] text-[#dddddd] [font-style:var(--14-btn-small-font-style)]"
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <Label className="[font-family:'Poppins',Helvetica] text-sm leading-5 font-medium tracking-[0] text-[#ffffff]">
                    Email
                  </Label>
                  <Input
                    defaultValue="robertmiller123@gmail.com"
                    disabled
                    className="font-14-btn-small h-[52px] w-[227px] rounded-[30px] border border-solid border-[#4f4f4f] bg-transparent px-5 py-2.5 text-[length:var(--14-btn-small-font-size)] leading-[var(--14-btn-small-line-height)] font-[number:var(--14-btn-small-font-weight)] tracking-[var(--14-btn-small-letter-spacing)] text-[#4f4f4f] [font-style:var(--14-btn-small-font-style)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Button
              variant="secondary"
              className="h-10 w-[100px] rounded-[30px] border border-solid bg-[#4f4f4f] px-8 py-3 hover:bg-[#4f4f4f]/90"
            >
              <span className="[font-family:'Poppins',Helvetica] text-base font-medium text-[#ffffff]">
                Cancel
              </span>
            </Button>
            <Button className="h-10 w-[100px] rounded-[30px] bg-[#9747ff] px-8 py-3 hover:bg-[#9747ff]/90">
              <span className="[font-family:'Poppins',Helvetica] text-base font-medium text-white">
                Save
              </span>
            </Button>
          </div>
        </section>

        <Separator className="bg-[#ffffff] opacity-20" />

        <section className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            <h2 className="[font-family:'Poppins',Helvetica] text-xl leading-6 font-medium tracking-[0] text-[#ffffff]">
              Password
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base leading-7 font-light tracking-[0] text-[#ffffff]">
              Secure Your Account
            </p>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Button className="h-10 w-48 rounded-[30px] bg-[#9747ff] px-8 py-3 hover:bg-[#9747ff]/90">
              <span className="[font-family:'Poppins',Helvetica] text-base font-medium text-white">
                Change Password
              </span>
            </Button>
          </div>
        </section>

        <Separator className="bg-[#ffffff] opacity-20" />

        <section className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            <h2 className="[font-family:'Poppins',Helvetica] text-xl leading-6 font-medium tracking-[0] text-[#ffffff]">
              Delete Account
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base leading-7 font-light tracking-[0] text-[#ffffff]">
              Permanently remove your account along with all documents,
              <br />
              chats, and personal data.
            </p>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Button
              onClick={() => setIsDeleteModalOpen(true)}
              className="h-10 rounded-[30px] bg-[#dc2c2c] px-8 py-3 hover:bg-[#dc2c2c]/90"
            >
              <span className="[font-family:'Poppins',Helvetica] text-base font-medium text-white">
                Delete Account
              </span>
            </Button>
          </div>
        </section>
      </div>

      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteAccount}
      />
    </div>
  )
}
