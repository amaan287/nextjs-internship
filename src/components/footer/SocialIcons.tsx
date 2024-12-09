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
    <div className="flex space-x-4">
      {socials.map((social, index) => (
        <a key={index} href={social.link} aria-label={social.name}>
          <img src={social.icon} alt={social.name} className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
