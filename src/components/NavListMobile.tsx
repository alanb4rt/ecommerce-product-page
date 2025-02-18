import { useEffect, useState } from "react";
import IconClose from "./icons/IconClose";
import { navigations } from "../data/navigations";

interface NavListMobileProps {
  isMobileMenuOpen: boolean,
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavListMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavListMobileProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) setIsAnimating(true);
  }, [isMobileMenuOpen]);

  const handleMenuClose = () => {
    setIsAnimating(false);
    const animationDuration = 500;
    setTimeout(() => setIsMobileMenuOpen(false), animationDuration);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <section className="z-50 relative">
          <div
            className={`fixed inset-0 bg-black transition-colors duration-500 ${
              isAnimating ? "bg-opacity-75" : "bg-opacity-0"
            }`}
          >
            <nav
              className={`w-3/4 h-full p-6 bg-white transition-transform duration-500 ${
                isAnimating ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                className="text-[var(--dark-grayish-blue)] hover:text-[var(--color-primary)] mb-10"
                onClick={handleMenuClose}
              >
                <IconClose color="currentcolor" />
              </button>
              <ul className="flex flex-col gap-4 text-[var(--dark-grayish-blue)]">
                {navigations.map(({ name, url }) => (
                  <li key={name} className="nav-list w-fit pb-1">
                    <a
                      className="flex items-center h-full font-bold text-[var(--very-dark-blue)]"
                      href={url}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      )}
    </>
  );
}
