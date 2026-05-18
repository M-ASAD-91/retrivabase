import { Input } from "../ui/input"
import { GlassButton } from "../ui/GlassButton"

export default function HeroSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-7 overflow-hidden bg-[#08080b] px-20 py-[150px] max-lg:px-6 max-lg:pt-29">
      {/* Gradient */}

      <img
        src="/svgs/topGradient.svg"
        alt="Gradient"
        className="pointer-events-none absolute top-0 h-[400px] w-[1392px] select-none max-lg:top-[-80px] max-lg:left-1/2 max-lg:w-[1000px] max-lg:-translate-x-1/2"
      />

      {/* Badge */}
      <div className="inline-flex items-center justify-center rounded-full bg-[#c8a4f726] px-4 py-[6.5px] shadow-[inset_0px_4px_4px_#ffffff1a]">
        <span className="font-poppins text-sm font-semibold text-[#9747ff]">
          AI-Powered Knowledge Management
        </span>
      </div>

      {/* Headings */}
      <div className="relative flex w-full flex-col items-center gap-5 text-center">
        <h1 className="font-poppins text-7xl leading-[79.2px] font-semibold text-white max-lg:text-4xl max-lg:leading-tight">
          Transform Your Documents
        </h1>

        <h2 className="font-poppins text-7xl leading-[79.2px] font-semibold max-lg:text-4xl max-lg:leading-tight">
          <span className="text-white">Into </span>
          <span className="text-[#9747ff]">Instant Answers</span>
        </h2>

        <p className="font-inter max-w-screen-md text-xl leading-7 text-white max-lg:px-2 max-lg:text-base max-lg:leading-6">
          Turn company documents into AI-powered knowledge bases in minutes. No coding required. Get
          instant, accurate answers from your team&apos;s knowledge.
        </p>
      </div>

      {/* CTA */}
      <div className="relative flex w-full flex-col items-center gap-3">
        <div className="inline-flex items-start gap-3 max-lg:w-full max-lg:max-w-md max-lg:flex-col">
          <Input type="email" placeholder="Enter your work email" className="max-lg:w-full" />

          <GlassButton className="h-11 rounded-[30px] bg-[#9747ff0d] px-5 py-3 shadow-[inset_0px_1px_1px_#ffffff1a,inset_-2px_-2px_4px_#ffffff1a] backdrop-blur-[12.5px] hover:bg-[#9747ff1a] max-lg:w-full">
            <span className="font-poppins text-base font-medium text-white">Get Early Access</span>
          </GlassButton>
        </div>

        <p className="font-inter text-center text-sm leading-5 text-white">
          Join 100+ companies already on the waitlist
        </p>
      </div>
    </section>
  )
}
