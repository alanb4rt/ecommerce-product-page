import { IconProps } from "../../types/icon";

export default function IconMenu({ color }: IconProps) {
  return (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
