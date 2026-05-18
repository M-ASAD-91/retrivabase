// "use client";

// import { Input } from "../ui/input";
// import { GlassButton } from "../ui/GlassButton";
// import { Button } from "../ui/button";
// import Image from "next/image";

// const footerLinks = [
//   { label: "Privacy Policy" },
//   { label: "Terms" },
//   { label: "Contact" },
// ];

// const socialIcons = [
//   { alt: "LinkedIn", src: "/svgs/linkedin.svg" },
//   { alt: "Twitter", src: "/svgs/twitter.svg" },
//   { alt: "GitHub", src: "/svgs/gitHub.svg" },
//   { alt: "Mail", src: "/svgs/mail.svg" },
// ];

// export default function FooterSection() {
//   return (
//     <footer className="relative w-full bg-[#08080b] overflow-hidden">
//       {/* CTA SECTION */}
//       <div className="px-20 py-[100px] flex flex-col items-center">
//         <div className="flex flex-col max-w-4xl items-center gap-6 px-8 w-full z-10">
//           <h2 className="font-semibold text-5xl text-center leading-[48px]">
//             <span className="text-white">
//               Ready to Transform Your
//               <br />
//             </span>
//             <span className="text-[#9747ff]">Knowledge Management?</span>
//           </h2>

//           <p className="text-white text-xl text-center max-w-2xl">
//             Join hundreds of teams already using Retrievabase to unlock the
//             <br />
//             power of their company knowledge. Start your journey today.
//           </p>

//           <div className="flex gap-3 items-center">
//             <Input
//               type="email"
//               placeholder="Enter your work email"
//               className="w-full h-11 px-5 rounded-[30px] border border-white bg-transparent text-white placeholder:text-white"
//             />

//             <GlassButton>Get Early Access</GlassButton>
//           </div>
//         </div>
//       </div>

//       {/* GRADIENT */}
//       <Image
//         src="/svgs/footerGradient.svg"
//         alt="Gradient"
//         width={1392}
//         height={400}
//         className="absolute bottom-40 left-1/2 -translate-x-1/2"
//       />

//       {/* BOTTOM FOOTER BAR */}
//       <div className="px-28 pt-[49px] pb-12 flex items-center justify-between w-full relative z-10">
//         {/* LOGO */}
//         <div className="flex items-center gap-2">

//           <img src="/svgs/headrlogo.svg" alt="" className="w-8 h-8" />
//           <span className="text-white font-semibold text-lg">
//             © 2025 Retrievabase
//           </span>
//         </div>

//         {/* LINKS */}
//         <nav className="flex gap-8">
//           {footerLinks.map((link, index) => (
//             <Button
//               key={index}
//               variant="ghost"
//               className="hover:underline text-white text-sm font-medium"
//             >
//               {link.label}
//             </Button>
//           ))}
//         </nav>

//         {/* SOCIAL ICONS */}
//         <div className="flex gap-4">
//           {socialIcons.map((icon, index) => (
//             <Button
//               key={index}
//               variant="ghost"
//               size="icon"
//               className="hover:bg-transparent"
//             >
//               <Image
//                 src={icon.src}
//                 alt={icon.alt}
//                 width={40}
//                 height={40}
//               />
//             </Button>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client"

import { Input } from "../ui/input"
import { GlassButton } from "../ui/GlassButton"
import { Button } from "../ui/button"
import Image from "next/image"

const footerLinks = [{ label: "Privacy Policy" }, { label: "Terms" }, { label: "Contact" }]

const socialIcons = [
  { alt: "LinkedIn", src: "/svgs/linkedin.svg" },
  { alt: "Twitter", src: "/svgs/twitter.svg" },
  { alt: "GitHub", src: "/svgs/gitHub.svg" },
  { alt: "Mail", src: "/svgs/mail.svg" },
]

export default function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#08080b]">
      {/* CTA SECTION */}
      <div className="relative z-10 flex flex-col items-center px-5 py-[100px] md:px-20">
        <div className="flex w-full max-w-4xl flex-col items-center gap-6 px-5 md:px-8">
          <h2 className="text-center text-3xl leading-[40px] font-semibold md:text-5xl md:leading-[48px]">
            <span className="text-white">
              Ready to Transform Your
              <br className="hidden md:block" />
            </span>
            <span className="text-[#9747ff]">Knowledge Management?</span>
          </h2>

          <p className="max-w-md text-center text-base text-white md:max-w-2xl md:text-xl">
            Join hundreds of teams already using Retrievabase to unlock the
            <br className="hidden md:block" />
            power of their company knowledge. Start your journey today.
          </p>

          <div className="mt-4 flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <Input
              type="email"
              placeholder="Enter your work email"
              className="h-11 w-full rounded-[30px] border border-white bg-transparent px-5 text-white placeholder:text-white md:w-[300px]"
            />
            <GlassButton className="w-full">Get Early Access</GlassButton>
          </div>
        </div>
      </div>

      {/* GRADIENT */}

      <Image
        src="/svgs/footerGradient.svg"
        alt="Gradient"
        width={1392}
        height={400}
        className="absolute bottom-90 left-1/2 h-auto w-full -translate-x-1/2 md:bottom-40 md:h-[400px] md:w-[1392px]"
      />

      {/* BOTTOM FOOTER BAR */}
      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-5 pt-10 pb-12 md:flex-row md:justify-between md:gap-0 md:px-28 md:pt-[49px]">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/svgs/headrlogo.svg" alt="" className="h-8 w-8" />
          <span className="text-base font-semibold text-white md:text-lg">
            © 2025 Retrievabase
          </span>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-3 text-center md:flex-row md:gap-8">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-sm font-medium text-white hover:underline md:text-base"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 md:justify-start">
          {socialIcons.map((icon, index) => (
            <Button key={index} variant="ghost" size="icon" className="hover:bg-transparent">
              <Image src={icon.src} alt={icon.alt} width={40} height={40} />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}
