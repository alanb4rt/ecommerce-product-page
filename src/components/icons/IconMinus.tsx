import { IconProps } from "../../types/icon";

export default function IconMinus({ color }: IconProps) {
  return (
    <div className="cursor-pointer">
      <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          id="a"
          fill={color}
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
}
