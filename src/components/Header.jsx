import Logo from "./Logo";
import iconCart from "../assets/images/icon-cart.svg";
import imgAvatar from "../assets/images/image-avatar.png";

export default function Header() {
  return (
    <header>
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <div className="flex items-center gap-12 py-8 border-b-2">
          <Logo />
          <nav className="flex items-center gap-8 flex-1 text-[var(--dark-grayish-blue)]">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <img src={iconCart} alt="Icon cart" />
          <img className="size-12" src={imgAvatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
