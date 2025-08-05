import Image from "next/image";
import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[0]);
  console.log(images);
  setTimeout(() => {
    setImage(images[index]);
    console.log(index);
    setIndex(index == images.length - 1 ? 0 : index + 1);
  }, 5000);

  return (
    <div className="relative">
      <Image
        src={image}
        alt="Images"
        width={300}
        height={600}
        className="h-[80vh] w-full object-cover rounded-2xl"
      />
      <div className="dots flex gap-2 absolute bottom-4 right-[50%] ">
        {images.map((e, i) => (
          <div
            key={i}
            className={`h-3  ${
              index == i ? "bg-[#8DD3BB] w-8" : "bg-white w-3"
            } rounded-4xl `}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
