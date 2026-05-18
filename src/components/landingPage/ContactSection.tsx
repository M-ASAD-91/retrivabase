"use client"

import { GlassButton } from "../ui/GlassButton"
import { Input } from "../ui/input"

export default function ContactSection() {
  return (
    <section className="flex w-full flex-col items-center border border-solid border-[#9646fe40] bg-[#08080b] px-5 pt-[120px] pb-20 md:px-20">
      <div className="flex min-h-[600px] w-full max-w-[1000px] flex-col items-center justify-center gap-10 rounded-[32px] border border-solid border-[#b983ff] bg-[#ffffff0d] px-5 py-10 shadow-[inset_0px_1px_1px_#ffffff1a,inset_-2px_-2px_4px_#ffffff1a,0px_0px_12px_#9747ff] backdrop-blur-[12.5px] md:flex-row md:gap-[49px] md:px-20">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-6">
            <h2 className="text-center text-4xl leading-[48px] font-semibold md:text-5xl">
              <span className="text-white">Contact </span>
              <span className="text-[#9747ff]">Us</span>
            </h2>

            <p className="max-w-md text-center text-lg text-white md:max-w-2xl md:text-xl">
              We&apos;re here to answer your questions and help you with anything you need.
            </p>
          </div>

          {/* FORM */}
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-5 md:flex-row">
              {/* NAME */}
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm font-medium text-white">Name</label>
                <Input
                  type="text"
                  className="h-[52px] rounded-[30px] border border-white bg-transparent px-5 text-white"
                />
              </div>

              {/* EMAIL */}
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm font-medium text-white">Email</label>
                <Input
                  type="email"
                  className="h-[52px] rounded-[30px] border border-white bg-transparent px-5 text-white"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium text-white">Message</label>
              <textarea className="h-[150px] resize-none rounded-[30px] border border-white bg-transparent px-5 py-3 text-white" />
            </div>

            <div className="flex w-full justify-center">
              <GlassButton className="w-full">Send Message</GlassButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
