import React from "react";

interface SocialIcon {
  name: string;
  icon: string;
  link: string;
}

const SocialIcons: React.FC = () => {
  const socials: SocialIcon[] = [
    { name: "Twitter", icon: "/twitter.svg", link: "#" },
    { name: "Instagram", icon: "/instagram.svg", link: "#" },
    { name: "LinkedIn", icon: "/linkedin.svg", link: "#" },
  ];

  return (
    <div className="flex justify-end space-x-4">
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[10px]">
          {socials.map((social, index) => (
            <a
              key={index}
              className="p-[10px]  border-[0.5px] border-[#bebebe] rounded-[6px]"
              href={social.link}
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-[22px] h-[22px]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
