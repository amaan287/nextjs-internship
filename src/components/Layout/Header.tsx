import Logo from "../../../public/Logo";
import Navigation from "../Navigation";
import Bulb from "../../../public/Bulb";
import Heart from "../../../public/Heart";
import CartLogo from "../../../public/CartLogo";
export default function Header() {
  return (
    <nav className="h-[168px] w-full  justify-between flex flex-col border ">
      <div className="flex items-center justify-between p-4 w-full  ">
        <Logo />
        <input
          type="text"
          placeholder="Rechercher un produit"
          className="border rounded-md px-4 py-2 flex-1 mx-8"
        />
        <nav className="flex items-center space-x-6">
          <a className="flex gap-1 items-center" href="#">
            <Bulb />
            Inspirations
          </a>
          <a className="flex gap-[8px] items-center" href="#">
            <Heart /> Mes favoris
            <p className="w-[28px] h-[18px] rounded-[30px] bg-[#CAD2D566] text-xs font-semibold text-center">
              24
            </p>
          </a>
          <button className="bg-[#0093D0] text-white px-4 py-2 flex gap-[8px] items-center rounded">
            <CartLogo />
            Panier
          </button>

          <div className="flex items-center gap-2 ">
            <div className="bg-[#EAEDEE] w-10 h-10 rounded-full"></div>
            <div>
              <label htmlFor="">FR</label>
              <select name="Fr" id="">
                Fr
              </select>
            </div>
          </div>
        </nav>
      </div>
      <Navigation />
    </nav>
  );
}
