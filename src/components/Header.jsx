import Logo from "./Logo";
import NavList from "./NavList";
import CartSection from "./CartSection";
import imgAvatar from "../assets/images/image-avatar.png";

export default function Header() {
  return (
    <header>
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <div className="flex items-center gap-12 border-b-2">
          <Logo />
          <NavList />
          <CartSection />
          <img
            className="cursor-pointer size-12 rounded-full hover:outline outline-2 outline-[var(--color-primary)]"
            src={imgAvatar}
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
}
