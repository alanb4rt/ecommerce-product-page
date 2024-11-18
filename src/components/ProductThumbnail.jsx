import { getImageURL } from "../utils/getImageURL";

export default function ProductThumbnail({ src, isActive, onClick }) {
  return (
    <li
      className={`overflow-hidden cursor-pointer rounded-lg bg-white ${
        isActive ? "active-image" : ""
      }`}
      onClick={onClick}
    >
      <img
        className="hover:opacity-50"
        src={getImageURL(`${src}-thumbnail.jpg`)}
        alt={src}
      />
    </li>
  );
}
