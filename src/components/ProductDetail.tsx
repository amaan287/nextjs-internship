export default function ProductDetail() {
  return (
    <div className="flex gap-8 px-8 py-6">
      {/* Left: Images */}
      <div className="flex flex-col space-y-4">
        {[1, 2, 3, 4].map((_, index) => (
          <img
            key={index}
            src="/placeholder.png"
            alt="Product Thumbnail"
            className="w-16 h-16 border rounded"
          />
        ))}
      </div>

      {/* Right: Main Product */}
      <div className="flex-1">
        <h2 className="text-xl font-bold">
          Cheese – appareil à raclette 1/2 roue
        </h2>
        <p className="text-gray-700 text-2xl font-semibold my-2">
          39,50€ / pièce
        </p>
        <div className="flex gap-4 text-gray-600 my-4">
          <span>20cm</span>
          <span>50cm</span>
        </div>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Location appareil à raclette - Raclette traditionnelle 1/2 roue
          </li>
          <li>Réglable en hauteur</li>
          <li>Appareil à raclette professionnel</li>
          <li>Boîtier de chauffe horizontal réglable en hauteur</li>
          <li>220V</li>
          <li>900W</li>
        </ul>
      </div>
    </div>
  );
}
