import { Carousel } from "react-responsive-carousel";
import { urlFor } from "lib/api";

export default function ImageCarousel({ images }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
    >
      {images.map((image, index) => {
        return (
          <div key={`container-carousel-${index}`}>
            <img src={urlFor(image).url()} alt={image.alt} />
          </div>
        );
      })}
    </Carousel>
  );
}
