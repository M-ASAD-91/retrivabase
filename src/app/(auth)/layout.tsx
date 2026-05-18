import Image from "next/image"

/**
 * AuthLayout
 * Reusable auth layout for Login / Signup pages.
 * You only change the form (children).
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0B0B0F] p-4">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E0E14] to-[#0A0A0F] shadow-2xl lg:grid-cols-2">
        {/* Left Section */}
        <div className="relative hidden flex-col justify-between bg-gradient-to-br from-[#1B1B2A] via-[#141420] to-[#0E0E14] p-10 lg:flex">
          {/* Top Glow */}
          <div className="absolute inset-x-0 top-0 h-40">
            <Image
              src="/svgs/authtopGradient.svg"
              alt="Retrivabase Logo"
              fill
              className="rounded-l-2xl object-cover"
              priority
            />
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">

            <div className="relative h-[285px] w-full">
              <Image
                src="/svgs/loginimage.svg"
                alt="Retrivabase Logo"
                fill
                className=" object-contain"
                priority
              />
            </div>

            <h2 className="mb-4 text-3xl font-semibold text-white">
              Your <span className="text-purple-400">AI Assistant</span> for
              <br /> Every Document
            </h2>

            <p className="max-w-sm text-gray-400">
              Create your account in 2 minutes and join who use
              <span className="font-medium text-white"> Retrivabase.ai</span>
              &nbsp;to simplify their work.
            </p>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32">
            <Image
              src="/svgs/authbottomGradient.svg"
              alt="Retrivabase Logo"
              fill
              className="rounded-l-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Section (Form Slot) */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  )
}

