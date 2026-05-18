// const featureSteps = [
//   {
//     title: "Upload",
//     time: "0:00 - 0:30",
//     description: "Drag & drop your documents",
//   },
//   {
//     title: "Process",
//     time: "0:30 - 1:00",
//     description: "AI analyzes your content",
//   },
//   {
//     title: "Search",
//     time: "1:00 - 2:00",
//     description: "Get instant answers",
//   },
// ];

// export default function FeaturesSection  (){
//   return (
//     <section className="gap-16 px-20 py-[100px] self-stretch w-full flex-[0_0_auto] bg-[#08080b] flex flex-col items-center relative">
//       <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
//         <div className="flex items-center self-stretch w-full flex-col relative flex-[0_0_auto]">
//           <h2 className="relative flex gap-2 items-center justify-center self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-transparent text-5xl text-center tracking-[0] leading-[48px]">
//             <span className="text-[#ffffff]">See it in </span>
//             <span className="text-[#9747ff]">Action</span>
//           </h2>
//         </div>

//         <div className="flex flex-col max-w-2xl w-[672px] items-center relative flex-[0_0_auto]">
//           <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-lg text-center tracking-[0] leading-7">
//             Watch how Retrievabase transforms your documents into a powerful
//             <br />
//             knowledge base in minutes
//           </p>
//         </div>
//       </header>

//       <div className="flex flex-col max-w-screen-lg w-[1024px] items-start gap-8 relative flex-[0_0_auto]">
//         <div className="flex flex-col items-start p-px relative self-stretch w-full flex-[0_0_auto] bg-neutral-50 rounded-xl overflow-hidden border border-solid shadow-[0px_1px_2px_#0000000d]">
//           <div className="flex items-center justify-center px-0 py-[217.44px] relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(162deg,rgba(102,126,234,0.2)_0%,rgba(118,75,162,0.2)_100%)] p-0">
//             <div className="absolute w-full h-full top-0 left-0 bg-[#0000001a]" />

//             <div className="inline-flex flex-col items-start px-3 py-1 absolute top-4 right-[15px] bg-red-500 rounded-full hover:bg-red-500">
//               <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-xs tracking-[0] leading-4 whitespace-nowrap">
//                 LIVE DEMO
//               </span>
//             </div>

//             <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
//               <img
//                 className="relative w-[156px] h-[156px] mt-[-13.00px] mb-[-3.00px]"
//                 alt="Overlay shadow"
//                 src="/svgs/playbutton.svg"
//               />

//               <div className="inline-flex flex-col items-start px-4 py-2 relative flex-[0_0_auto] bg-[#00000066] rounded-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] hover:bg-[#00000080] border-0">
//                 <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-lg tracking-[0] leading-7 whitespace-nowrap">
//                   Launch Live RAG Demo
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
//           {featureSteps.map((step, index) => (
//             <div
//               key={index}
//               className="min-w-[325.33px] inline-flex flex-col items-start gap-2 p-[17px] relative flex-[0_0_auto] rounded-[9px] border border-solid border-[#b983ff] bg-transparent"
//             >
//               <div className="p-0 w-full">
//                 <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mb-2">
//                   <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
//                     <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#9747ff] text-sm tracking-[0] leading-5 whitespace-nowrap">
//                       {step.title}
//                     </h3>
//                   </div>

//                   <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
//                     <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-xs tracking-[0] leading-4 whitespace-nowrap">
//                       {step.time}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="relative flex items-center justify-center w-fit [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const featureSteps = [
  {
    title: "Upload",
    time: "0:00 - 0:30",
    description: "Drag & drop your documents",
  },
  {
    title: "Process",
    time: "0:30 - 1:00",
    description: "AI analyzes your content",
  },
  {
    title: "Search",
    time: "1:00 - 2:00",
    description: "Get instant answers",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-16 self-stretch bg-[#08080b] px-20 py-[100px] max-lg:px-6 max-lg:py-20">
      {/* Header */}
      <header className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-4 self-stretch">
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center self-stretch">
          <h2 className="relative mt-[-1.00px] flex items-center justify-center gap-2 self-stretch text-center text-5xl leading-[48px] font-semibold max-lg:text-3xl max-lg:leading-tight">
            <span className="text-[#ffffff]">See it in </span>
            <span className="text-[#9747ff]">Action</span>
          </h2>
        </div>

        <div className="relative flex w-[672px] max-w-2xl flex-[0_0_auto] flex-col items-center max-lg:w-full">
          <p className="relative mt-[-1.00px] flex w-fit items-center justify-center text-center text-lg leading-7 text-[#ffffff] max-lg:text-base max-lg:leading-6 max-lg:whitespace-normal">
            Watch how Retrievabase transforms your documents into a powerful
            <br />
            knowledge base in minutes
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="relative flex w-[1024px] max-w-screen-lg flex-[0_0_auto] flex-col items-start gap-8 max-lg:w-full">
        {/* Demo */}
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch overflow-hidden rounded-xl border border-solid bg-neutral-50 p-px shadow-[0px_1px_2px_#0000000d]">
          <div className="relative flex w-full flex-[0_0_auto] items-center justify-center self-stretch bg-[linear-gradient(162deg,rgba(102,126,234,0.2)_0%,rgba(118,75,162,0.2)_100%)] px-0 py-[217.44px] max-lg:py-32">
            <div className="absolute top-0 left-0 h-full w-full bg-[#0000001a]" />

            <div className="absolute top-4 right-[15px] inline-flex flex-col items-start rounded-full bg-red-500 px-3 py-1">
              <span className="text-xs whitespace-nowrap text-white">LIVE DEMO</span>
            </div>

            <div className="relative inline-flex flex-[0_0_auto] flex-col items-center gap-4">
              <img
                className="relative h-[156px] w-[156px] max-lg:h-24 max-lg:w-24"
                alt="Overlay shadow"
                src="/svgs/playbutton.svg"
              />

              <div className="relative inline-flex flex-[0_0_auto] flex-col items-start rounded-full bg-[#00000066] px-4 py-2 backdrop-blur-[2px] hover:bg-[#00000080]">
                <span className="text-lg whitespace-nowrap text-white max-lg:text-sm">
                  Launch Live RAG Demo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative flex w-full flex-[0_0_auto] items-start gap-6 self-stretch max-lg:flex-col">
          {featureSteps.map((step, index) => (
            <div
              key={index}
              className="relative inline-flex min-w-[325.33px] flex-[0_0_auto] flex-col items-start gap-2 rounded-[9px] border border-solid border-[#b983ff] bg-transparent p-[17px] max-lg:w-full max-lg:min-w-0"
            >
              <div className="w-full p-0">
                <div className="mb-2 flex w-full items-center justify-between">
                  <h3 className="text-sm font-semibold whitespace-nowrap text-[#9747ff]">
                    {step.title}
                  </h3>

                  <span className="text-xs whitespace-nowrap text-white">{step.time}</span>
                </div>

                <p className="text-sm whitespace-nowrap text-white max-lg:whitespace-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
