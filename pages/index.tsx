import Header from "components/Header";
import ImageCarousel from "components/ImageCarousel";
import Footer from "components/Footer";
import { getCarouselImages } from "lib/api";

export default function Home({ images }) {
  return (
    <>
      <Header />
      <ImageCarousel images={images[0].images} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const images = await getCarouselImages("carousel");
  return {
    props: { images },
    revalidate: false,
  };
}
