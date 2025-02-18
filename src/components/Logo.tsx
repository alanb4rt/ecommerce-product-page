import iconLogo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <a className="flex-1 md:flex-none mb-1 md:mb-0" href="#">
      <img src={iconLogo} alt="Logo" />
    </a>
  );
}
