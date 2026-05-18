// const features = [
//   {
//     title: "No-Code Setup",
//     description:
//       "Get started in minutes without any technical expertise. Our intuitive interface makes it easy for anyone to create a powerful knowledge base.",
//     bulletPoints: [
//       "Drag-and-drop document upload",
//       "Automatic content organization",
//       "Zero configuration required",
//     ],
//     image: "/svgs/noCode.svg",
//     imagePosition: "right",
//     shadowClass: "shadow-[2px_2px_4px_2px_#9747ff40]",
//   },
//   {
//     title: "Smart Search Capabilities",
//     description:
//       "AI-powered search that understands context and intent. Find exactly what you need, even with vague queries.",
//     bulletPoints: [
//       "Natural language queries",
//       "Contextual understanding",
//       "Instant, accurate results",
//     ],
//     image: "/svgs/capabilites.svg",
//     imagePosition: "left",
//     shadowClass: "shadow-[-2px_2px_4px_2px_#9747ff40]",
//   },
//   {
//     title: "Team Collaboration",
//     description:
//       "Share knowledge seamlessly across your organization. Keep everyone on the same page with real-time updates.",
//     bulletPoints: [
//       "Multi-user access control",
//       "Real-time collaboration",
//       "Version history tracking",
//     ],
//     image: "/svgs/team.svg",
//     imagePosition: "right",
//     shadowClass: "shadow-[2px_2px_4px_2px_#9747ff40]",
//   },
// ]

// export default function DemoSection() {
//   return (
//     <section className="relative flex w-full flex-[0_0_auto] flex-col items-center self-stretch bg-[#121212] px-20 py-[100px]">
//       <div className="relative mr-[-80.00px] ml-[-80.00px] flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-16 px-8 py-0">
//         <header className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
//           <div className="relative flex w-full flex-[0_0_auto] flex-col items-center self-stretch">
//             <h2 className="relative mt-[-1.00px] gap-2 flex items-center justify-center self-stretch text-center [font-family:'Poppins',Helvetica] text-5xl leading-[48px] font-semibold tracking-[0] text-transparent">
//               <span className="text-[#ffffff]">Everything </span>
//               <span className="text-[#9747ff]">You Need</span>
//             </h2>
//           </div>

//           <div className="relative flex w-[672px] max-w-2xl flex-[0_0_auto] flex-col items-center">
//             <p className="relative mt-[-1.00px] mr-[-11.50px] ml-[-11.50px] flex w-fit items-center justify-center text-center [font-family:'Poppins',Helvetica] text-lg leading-7 font-normal tracking-[0] whitespace-nowrap text-[#ffffff]">
//               Powerful features designed to transform how your team accesses knowledge
//             </p>
//           </div>
//         </header>

//         <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-24 self-stretch">
//           {features.map((feature, index) => (
//             <article
//               key={index}
//               className="relative flex w-full flex-[0_0_auto] items-center justify-center gap-12 self-stretch"
//             >
//               {feature.imagePosition === "left" && (
//                 <div
//                   className={`relative flex w-[584px] flex-col items-start overflow-hidden rounded-[9px] bg-[#ffffff01] ${feature.shadowClass}`}
//                 >
//                   <div
//                     className="relative h-[408.8px] w-full self-stretch bg-cover bg-[50%_50%]"
//                     style={{ backgroundImage: `url(${feature.image})` }}
//                   />
//                 </div>
//               )}

//               <div className="relative flex w-[584px] flex-col items-start gap-4">
//                 <div className="relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch">
//                   <h3 className="relative mt-[-1.00px] self-stretch [font-family:'Poppins',Helvetica] text-[28px] leading-9 font-semibold tracking-[0] text-[#ffffff]">
//                     {feature.title}
//                   </h3>
//                 </div>

//                 <div className="relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch">
//                   <p className="relative mt-[-1.00px] flex items-center justify-center self-stretch [font-family:'Poppins',Helvetica] text-base leading-[29.2px] font-normal tracking-[0] text-[#ffffff]">
//                     {feature.description}
//                   </p>
//                 </div>

//                 <ul className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-3 self-stretch px-0 pt-2 pb-0">
//                   {feature.bulletPoints.map((point, pointIndex) => (
//                     <li
//                       key={pointIndex}
//                       className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch"
//                     >
//                       <img src="/svgs/tick.svg" alt="" className="relative h-5 w-5" />
//                       <span className="relative mt-[-1.00px] flex w-fit items-center justify-center [font-family:'Poppins',Helvetica] text-base leading-6 font-medium tracking-[0] whitespace-nowrap text-[#ffffff]">
//                         {point}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {feature.imagePosition === "right" && (
//                 <div
//                   className={`relative flex w-[584px] flex-col items-start overflow-hidden rounded-[9px] bg-[#ffffff01] ${feature.shadowClass}`}
//                 >
//                   <div
//                     className="relative h-[408.8px] w-full self-stretch bg-cover bg-[50%_50%]"
//                     style={{ backgroundImage: `url(${feature.image})` }}
//                   />
//                 </div>
//               )}
//             </article>
//           ))}
//         </div>
//       </div>

//       <img
//         className="absolute  top-px  h-[400px] w-[1392px]"
//         alt="Gradient"
//         src="/svgs/Gradient.svg"
//       />
//     </section>
//   )
// }

const features = [
  {
    title: "No-Code Setup",
    description:
      "Get started in minutes without any technical expertise. Our intuitive interface makes it easy for anyone to create a powerful knowledge base.",
    bulletPoints: [
      "Drag-and-drop document upload",
      "Automatic content organization",
      "Zero configuration required",
    ],
    image: "/svgs/noCode.svg",
    imagePosition: "right",
    shadowClass: "shadow-[2px_2px_4px_2px_#9747ff40]",
  },
  {
    title: "Smart Search Capabilities",
    description:
      "AI-powered search that understands context and intent. Find exactly what you need, even with vague queries.",
    bulletPoints: [
      "Natural language queries",
      "Contextual understanding",
      "Instant, accurate results",
    ],
    image: "/svgs/capabilites.svg",
    imagePosition: "left",
    shadowClass: "shadow-[-2px_2px_4px_2px_#9747ff40]",
  },
  {
    title: "Team Collaboration",
    description:
      "Share knowledge seamlessly across your organization. Keep everyone on the same page with real-time updates.",
    bulletPoints: [
      "Multi-user access control",
      "Real-time collaboration",
      "Version history tracking",
    ],
    image: "/svgs/team.svg",
    imagePosition: "right",
    shadowClass: "shadow-[2px_2px_4px_2px_#9747ff40]",
  },
]

export default function DemoSection() {
  return (
    <section className="relative flex w-full flex-col items-center bg-[#121212] px-5 py-[100px] md:px-20">
      <div className="relative flex w-full flex-col items-center gap-16">
        <header className="flex w-full flex-col items-center gap-4">
          <h2 className="text-center [font-family:'Poppins',Helvetica] text-3xl leading-[48px] font-semibold text-transparent md:text-5xl">
            <span className="text-[#ffffff]">Everything </span>
            <span className="text-[#9747ff]">You Need</span>
          </h2>

          <p className="mt-2 max-w-md text-center text-base text-[#ffffff] md:max-w-2xl md:text-lg">
            Powerful features designed to transform how your team accesses knowledge
          </p>
        </header>

        <div className="flex w-full flex-col gap-24">
          {features.map((feature, index) => (
            <article
              key={index}
              className={`flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-12 ${
                feature.imagePosition === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full overflow-hidden rounded-[9px] bg-[#ffffff01] md:w-[584px] ${feature.shadowClass}`}
              >
                <div
                  className="h-64 w-full bg-cover bg-center md:h-[408.8px]"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
              </div>

              <div className="flex w-full flex-col gap-4 md:w-[584px]">
                <h3 className="[font-family:'Poppins',Helvetica] text-2xl font-semibold text-[#ffffff] md:text-[28px]">
                  {feature.title}
                </h3>
                <p className="text-base leading-[29.2px] text-[#ffffff] md:text-[16px]">
                  {feature.description}
                </p>
                <ul className="flex flex-col gap-3 pt-2">
                  {feature.bulletPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <img src="/svgs/tick.svg" alt="" className="h-5 w-5" />
                      <span className="text-base font-medium text-[#ffffff] md:text-[16px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <img
        className="absolute top-0 left-1/2 hidden h-[400px] w-[1392px] -translate-x-1/2 transform md:block"
        alt="Gradient"
        src="/svgs/Gradient.svg"
      />
    </section>
  )
}
