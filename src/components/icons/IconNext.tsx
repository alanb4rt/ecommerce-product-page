import { IconProps } from "../../types/icon";

export default function IconNext({ color }: IconProps) {
  return (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke={color}
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
