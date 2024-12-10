export default function Navigation() {
  const links = [
    "ART DE LA TABLE",
    "MOBILIER",
    "NAPPAGE",
    "MATÉRIEL DE SALLE",
    "CUISINE",
    "BARBECUE",
    "TENTE",
    "CHAUFFAGE",
    "Podium - Piste de danse",
    "Son et lumière",
    "Packs",
    "Consommables",
  ];

  return (
    <nav className=" py-2 px-8">
      <ul className="flex space-x-[38px]">
        {links.map((link, index) => (
          <li key={index} className="text-sm font-light  ">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
