import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src="/images/menu-01.png" />
      </div>
      <div>
        <img src="/images/menu-02.png" />
      </div>
      <div>
        <img src="/images/menu-03.png" />
      </div>
    </Carousel>
  );
}
