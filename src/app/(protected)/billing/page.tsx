"use client"

import {  CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassButton } from "@/components/ui/GlassButton"
import { Progress } from "@/components/ui/progress"

export default function Billing() {
  return (
    <div className="flex h-full w-full flex-col gap-8 p-8">
      <h1 className="text-xl font-semibold text-[#8B5CF6]">Billing Plan</h1>

      <div className="flex flex-col items-center gap-8">
        <div className="">
          {" "}
          <h2 className="text-center text-4xl font-bold">
            {" "}
            Power Up Your <span className="text-[#A855F7]">Knowledge Engine</span>
          </h2>
          <p>
            Upgrade your plan to process more documents, ask more questions, and access smarter,
            faster responses.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Free Plan */}
          <div className="flex flex-col rounded-[32px] border border-white/10 bg-[#1a1a1a]/80 p-8 text-white shadow-[inset_0px_1px_1px_rgba(255,255,255,0.10),inset_-2px_-2px_4px_rgba(255,255,255,0.10)] backdrop-blur-[25px]">
            <div className="mb-4">
              <span className="rounded-full border border-white/20 px-4 py-1.5 text-sm">Free</span>
            </div>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold">$0</span>
              <span className="ml-1 text-lg font-normal text-gray-300">/month</span>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">50 monthly queries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">2 document uploads</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">Max 10 pages per document</span>
              </div>
            </div>

            <GlassButton>Upgrade Now</GlassButton>
          </div>

          {/* Monthly Plan */}
          <div className="relative flex flex-col rounded-4xl border border-[#9747FF] bg-[#1a1a1a] p-8 text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <span className="rounded-full bg-[#9747FF] px-6 py-1.5 text-sm font-medium text-white">
                Most Popular
              </span>
            </div>
            <div className="mt-2 mb-4">
              <span className="rounded-full border border-white/20 px-4 py-1.5 text-sm">
                Monthly
              </span>
            </div>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold">$15</span>
              <span className="ml-1 text-lg font-normal text-gray-300">/month</span>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">5,000 monthly queries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">20 document uploads</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">Max 100 pages per document</span>
              </div>
            </div>

            <Button className="mt-8 h-13 w-full cursor-pointer rounded-full bg-[#9747FF80] text-lg font-medium text-white hover:bg-[#4C1D95]">
              Upgrade Now
            </Button>
          </div>

          {/* Yearly Plan */}
          <div className="flex flex-col rounded-4xl border border-[#9747FF] bg-[#1a1a1a]/80 p-8 text-white shadow-[inset_0px_1px_1px_rgba(255,255,255,0.10),inset_-2px_-2px_4px_rgba(255,255,255,0.10)] backdrop-blur-[25px]">
            <div className="mb-4">
              <span className="rounded-full border border-white/20 px-4 py-1.5 text-sm">
                Yearly
              </span>
            </div>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold">$120</span>
              <span className="ml-1 text-lg font-normal text-gray-300">/year</span>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">10,000 monthly queries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">50 document uploads</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A855F7]" />
                <span className="text-gray-200">Max 200 pages per document</span>
              </div>
            </div>

            <Button className="mt-8 h-13 w-full cursor-pointer rounded-full bg-[#9747FF80] text-lg font-medium text-white hover:bg-[#4C1D95]">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
      {/* Current Plan Section */}
      <div className="mt-8 w-full max-w-6xl">
        <h2 className="mb-4 text-xl font-semibold text-[#9747FF]">Current Plan</h2>
        <div className="w-full rounded-[30px] border border-gray-200 p-8">
          <h2 className="mb-2 text-xl font-semibold text-[#FFFFFF]">Free Plan</h2>
          <p className="mb-8 text-gray-300">
            Includes 50 monthly queries, 2 documents upload and 10 pages per document support.
          </p>

          <div className="space-y-6">
            <div className="relative pt-1">
              <div className="">1 of 50 queries</div>
              <Progress value={20} className="h-4 rounded-[10px]" />
            </div>

            <div className="relative pt-1">
              <div className="">1 of 2 documents</div>
              <Progress value={40} className="h-4 rounded-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
