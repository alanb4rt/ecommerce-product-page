import IconClose from "./icons/IconClose";
import { navigations } from "../data/navigations";

export default function NavListMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  return (
    <section className={isMobileMenuOpen ? "block" : "hidden"}>
      {isMobileMenuOpen && (
        <div className="z-10 fixed inset-0 bg-black/75">
          <nav className="w-3/4 h-full p-6 bg-white">
            <button
              className="text-[var(--dark-grayish-blue)] hover:text-[var(--color-primary)] mb-10"
              onClick={() => setIsMobileMenuOpen(false)}
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
      )}
    </section>
  );
}
