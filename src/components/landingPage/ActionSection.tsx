import { ArrowUpRightIcon } from "lucide-react"

const teamData = [
  {
    title: "Customer Support",
    features: [
      "Instant answers to customer questions",
      "Reduce response time by 80%",
      "24/7 self-service support",
      "Empower support teams with knowledge",
    ],
  },
  {
    title: "Sales Teams",
    features: [
      "Quick access to product information",
      "Competitive intelligence at your fingertips",
      "Close deals faster with instant answers",
      "Consistent messaging across teams",
    ],
  },
  {
    title: "Internal Knowledge",
    features: [
      "Find information instantly",
      "Reduce knowledge silos",
      "Searchable technical documentation",
      "Onboard new team members quickly",
    ],
  },
  {
    title: "HR & Operations",
    features: [
      "Centralized policy information",
      "Employee self-service portal",
      "Streamline onboarding process",
      "Quick answers to HR questions",
    ],
  },
]

export default function ActionSection() {
  return (
    <section className="flex w-full flex-col items-start gap-16 bg-[#121212] px-20 py-[100px] max-lg:px-6 max-lg:py-20">
      {/* Header */}
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h2 className="font-poppins text-5xl leading-[48px] font-semibold max-lg:text-3xl max-lg:leading-tight">
          <span className="text-white">Built for </span>
          <span className="text-[#9747ff]">Every Team</span>
        </h2>

        <p className="font-poppins max-w-2xl text-lg leading-7 text-white max-lg:text-base max-lg:leading-6 max-lg:whitespace-normal">
          From customer support to engineering, Retrievabase adapts to your workflow
        </p>
      </div>

      {/* Cards */}
      <div className="flex w-full items-center justify-between gap-5 max-lg:flex-col max-lg:items-center">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex h-[322px] w-[300px] flex-col justify-center gap-4 rounded-xl border border-[#9747ff40] bg-[#08080b] px-6 py-5 shadow-[0px_1px_2px_#0000000d] max-lg:h-auto max-lg:w-full max-lg:max-w-md"
          >
            <div className="flex w-full flex-col gap-4">
              <h3 className="font-poppins text-lg font-semibold text-[#9747ff]">{team.title}</h3>

              <div className="flex w-full flex-col gap-2">
                {team.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-2">
                    <div className="pt-1">
                      <div className="h-2 w-2 rounded-full bg-[#9546fd0d] shadow-[inset_-2px_-2px_4px_#ffffff40,inset_0px_1px_1px_#ffffff40]" />
                    </div>
                    <p className="font-poppins text-sm leading-5 text-white max-lg:whitespace-normal">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-1 self-start rounded-md px-2 py-1">
                <span className="font-poppins text-sm font-medium text-[#9747ff]">Learn more</span>
                <ArrowUpRightIcon className="h-4 w-4 text-[#9747ff]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
