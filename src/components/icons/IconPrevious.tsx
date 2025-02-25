import { IconProps } from "../../types/icon";

export default function IconPrevious({ color }: IconProps) {
  return (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke={color}
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
