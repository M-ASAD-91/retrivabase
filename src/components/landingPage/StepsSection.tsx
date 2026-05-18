// "use client"

// import Image from "next/image"
// import upload from "../../../public/svgs/upload.svg"

// const stepsData = [
//   {
//     icon: upload,
//     title: "Upload Documents",
//     description:
//       "Simply drag and drop your documents,PDFs, or knowledge base files. We support all major formats.",
//   },
//   {
//     icon: "/svgs/current.svg",
//     title: "AI Processing",
//     description:
//       "Our AI instantly analyzes and indexes your content, understanding context and relationships.",
//   },
//   {
//     icon: "/svgs/search.svg",
//     title: "Instant Knowledge Base",
//     description:
//       "Get accurate answers to questions with intelligent search powered by advanced AI.",
//   },
// ]

// export default function StepsSection() {
//   return (
//     <section className="flex w-full flex-col gap-16 border-b border-[#9546fd40] bg-[#121212] px-20 py-[100px]">
//       {/* Header */}
//       <header className="flex flex-col items-center gap-4">
//         <h2 className="text-center text-5xl leading-[48px] font-semibold">
//           <span className="text-white">Get Started in </span>
//           <span className="text-[#9747ff]">3 Simple Steps</span>
//         </h2>

//         <p className="max-w-2xl text-center text-lg text-white">
//           From upload to answers in minutes. No technical expertise required
//         </p>
//       </header>

//       {/* Cards */}

//       <div className="flex justify-between gap-6">
//         {stepsData.map((step, index) => (
//           <div
//             key={index}
//             className="group relative flex h-[336px] w-96 flex-col justify-center gap-10 rounded-3xl bg-[#08080b] p-8 shadow-[1px_2px_4px_#cdaef640] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_#9747ff80]"
//           >
//             {/* Glow border */}
//             <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-[#9747ff40] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//             {/* Icon */}
//             <Image src={step.icon} alt={step.title} width={88} height={88} />

//             {/* Content */}
//             <div className="relative z-10 flex flex-col gap-3">
//               <h3 className="text-2xl font-semibold text-[#9747ff] transition-colors duration-300 group-hover:text-[#b985ff]">
//                 {step.title}
//               </h3>

//               <p className="text-base leading-[26px] text-white/80 group-hover:text-white">
//                 {step.description.split("\n").map((line, i) => (
//                   <span key={i}>
//                     {line}
//                     <br />
//                   </span>
//                 ))}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import upload from "../../../public/svgs/upload.svg"

const stepsData = [
  {
    icon: upload,
    title: "Upload Documents",
    description:
      "Simply drag and drop your documents, PDFs, or knowledge base files. We support all major formats.",
  },
  {
    icon: "/svgs/current.svg",
    title: "AI Processing",
    description:
      "Our AI instantly analyzes and indexes your content, understanding context and relationships.",
  },
  {
    icon: "/svgs/search.svg",
    title: "Instant Knowledge Base",
    description:
      "Get accurate answers to questions with intelligent search powered by advanced AI.",
  },
]

export default function StepsSection() {
  return (
    <section className="flex w-full flex-col gap-16 border-b border-[#9546fd40] bg-[#121212] px-20 py-[100px] max-lg:px-6 max-lg:py-20">
      {/* Header */}
      <header className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-5xl leading-[48px] font-semibold max-lg:text-3xl max-lg:leading-tight">
          <span className="text-white">Get Started in </span>
          <span className="text-[#9747ff]">3 Simple Steps</span>
        </h2>

        <p className="max-w-2xl text-lg text-white max-lg:text-base">
          From upload to answers in minutes. No technical expertise required
        </p>
      </header>

      {/* Cards */}
      <div className="flex justify-between gap-6 max-lg:flex-col max-lg:items-center">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="group relative flex h-[336px] w-96 flex-col justify-center gap-10 rounded-3xl bg-[#08080b] p-8 shadow-[1px_2px_4px_#cdaef640] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_#9747ff80] max-lg:h-auto max-lg:w-full max-lg:max-w-md"
          >
            {/* Glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-[#9747ff40] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <Image src={step.icon} alt={step.title} width={88} height={88} />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold text-[#9747ff] transition-colors duration-300 group-hover:text-[#b985ff]">
                {step.title}
              </h3>

              <p className="text-base leading-[26px] text-white/80 group-hover:text-white">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
