import { Button } from "../ui/button";

const footerLinks = [
  { label: "Privacy Policy" },
  { label: "Terms" },
  { label: "Contact" },
];

const socialIcons = [
  { alt: "Linked in", src: "/linked-in.svg" },
  { alt: "Twitter", src: "/twitter.svg" },
  { alt: "Git hub", src: "/git-hub.svg" },
  { alt: "Mail", src: "/mail-9.svg" },
];

export default function FinalCallToActionSection () {
  return (
    <footer className="flex flex-col items-start pt-[49px] pb-12 px-28 w-full bg-[#08080b]">
      <div className="flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-2">
          <div className="flex w-8 h-8 items-center justify-center rounded-md bg-[linear-gradient(135deg,rgba(102,126,234,1)_0%,rgba(118,75,162,1)_100%)]">
            <div className="inline-flex flex-col items-start">
              <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap">
                R
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start">
            <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-lg tracking-[0] leading-7 whitespace-nowrap">
              © 2025 Retrievabase
            </div>
          </div>
        </div>

        <nav className="inline-flex flex-wrap items-center gap-[0px_32px]">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex flex-col items-center justify-center px-2 py-1 rounded-md h-auto hover:bg-transparent"
            >
              <span className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                {link.label}
              </span>
            </Button>
          ))}
        </nav>

        <div className="flex w-[196px] items-center justify-between">
          {socialIcons.map((icon, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="w-10 h-10 p-0 hover:bg-transparent"
            >
              <img className="w-10 h-10" alt={icon.alt} src={icon.src} />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};