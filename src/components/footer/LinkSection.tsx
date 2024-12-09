import React from "react";

interface Link {
  label: string;
  href: string;
}

interface LinksSectionProps {
  title: string;
  links: Link[];
}

const LinksSection: React.FC<LinksSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;
