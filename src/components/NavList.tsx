import { navigations } from "../data/navigations";

export default function NavList() {
  return (
    <nav className="hidden md:block flex-1">
      <ul className="h-28 flex items-center gap-8 text-[var(--dark-grayish-blue)]">
        {navigations.map(({ name, url }) => (
          <li key={name} className="nav-list">
            <a className="flex items-center h-full hover:text-black" href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
