import Logo from "./Logo";
import NavList from "./NavList";
import CartSection from "./CartSection";
import imgAvatar from "../assets/images/image-avatar.png";
import IconMenu from "./icons/IconMenu";
import { useState } from "react";
import NavListMobile from "./NavListMobile";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="w-full max-w-screen-lg mx-auto py-4 px-6 md:px-4 md:py-0">
        <div className="flex items-center gap-6 md:gap-12 md:border-b-2">
          <div className="md:hidden leading-none">
            <button
              className="text-[var(--dark-grayish-blue)] hover:text-[var(--color-primary)]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <IconMenu color="currentcolor" />
            </button>
            <NavListMobile
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
          <Logo />
          <NavList />
          <CartSection />
          <img
            className="cursor-pointer size-8 md:size-12 rounded-full hover:outline outline-2 outline-[var(--color-primary)]"
            src={imgAvatar}
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
}
