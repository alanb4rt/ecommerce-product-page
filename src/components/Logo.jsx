import iconLogo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <a className="flex-1 md:flex-none" href="#">
      <img src={iconLogo} alt="Logo" />
    </a>
  );
}
