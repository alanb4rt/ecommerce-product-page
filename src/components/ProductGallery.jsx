export default function ProductGallery() {
  const listImage = [1, 2, 3, 4];

  return (
    <section>
      <img
        className="rounded-2xl mb-8"
        src="./src/assets/images/image-product-1.jpg"
        alt="Image 1"
      />
      <ul className="flex gap-8">
        {listImage.map((img, index) => (
          <ThumbnailImage key={index} src={img} />
        ))}
      </ul>
    </section>
  );
}

export function ThumbnailImage({ src }) {
  return (
    <li>
      <img
        className="rounded-lg"
        src={`./src/assets/images/image-product-${src}-thumbnail.jpg`}
        alt={`Image ${src}`}
      />
    </li>
  );
}
