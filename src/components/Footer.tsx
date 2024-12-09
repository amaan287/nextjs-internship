import React from "react";
import SocialIcons from "./footer/SocialIcons";
import LinksSection from "./footer/LinkSection";
import Logo from "../../public/Logo";

const Footer: React.FC = () => {
  const infoLinks = [
    { label: "À propos", href: "#" },
    { label: "Livraisons & Reprises", href: "#" },
    { label: "Mode d'emploi", href: "#" },
    { label: "F.A.Q", href: "#" },
  ];

  const legalLinks = [
    { label: "Mentions légales", href: "#" },
    { label: "CGU", href: "#" },
    { label: "CGV", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ];

  const accountLinks = [
    { label: "Accéder à mon compte", href: "#" },
    { label: "Ma liste d'envie", href: "#" },
    { label: "Créer un compte", href: "#" },
    { label: "Mot de passe oublié", href: "#" },
  ];

  return (
    <footer className="bg-gray-100 py-8 border-t ">
      <div className="container mx-auto px-8 grid grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">
              <Logo />
            </h2>
          </div>
          <SocialIcons />
        </div>
        <LinksSection title="INFOS PRATIQUES" links={infoLinks} />
        <LinksSection title="LÉGAL" links={legalLinks} />
        <LinksSection title="MON COMPTE" links={accountLinks} />
      </div>
    </footer>
  );
};

export default Footer;
