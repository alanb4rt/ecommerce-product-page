export default function NavList() {
  const navItems = [
    { name: "Collections", url: "#" },
    { name: "Men", url: "#" },
    { name: "Women", url: "#" },
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
  ];

  return (
    <nav className="flex-1">
      <ul className="h-28 flex items-center gap-8 text-[var(--dark-grayish-blue)]">
        {navItems.map(({ name, url }) => (
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
