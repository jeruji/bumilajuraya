import { Container } from "react-bootstrap";
import Header from "components/Header";
import ImageCarousel from "components/ImageCarousel";
import Footer from "components/Footer";
import { getCarouselImages } from "lib/api";

export default function Home({ images }) {
  return (
    <>
      <Container className="mw-100">
        <Header />
        <ImageCarousel images={images[0].images} />
      </Container>
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
