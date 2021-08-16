import { getSearchContent, getAllContents } from "lib/api";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import { Container, Row, Col, Table } from "react-bootstrap";
import BlogContent from "components/BlogContent";
import DetectWidth from "components/DetectWidth";
import HeadTitle from "components/HeadTitle";
import Footer from "components/Footer";

const SearchContent = ({ contents, searchParam }) => {
  const router = useRouter();

  if (!router.isFallback && !contents) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <>
        <HeadTitle
          title={`Bumi Laju Raya - ${searchParam}`}
          description="Bumi Laju Raya - Search Page"
        />
        <DetectWidth />
        <Container className="mw-100">
          <span>Loading</span>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <DetectWidth />
      <Container className="mw-100">
        <Row style={{ padding: "50px" }}>
          <Col>Search Results for : {searchParam}</Col>
        </Row>
        <Row style={{ padding: "50px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Content</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content, index) => {
                return (
                  <tr key={`row_contents_${index}`}>
                    <td>{index + 1}</td>
                    <td>{content.name}</td>
                    <td>
                      {content.description && (
                        <BlogContent content={content.description} />
                      )}
                    </td>
                    <td>
                      <Link href={`/content/${content.slug}`}>View</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const searchParam = params.keyword;
  const contents = await getSearchContent({ searchParam });

  return {
    props: {
      contents,
      searchParam,
    },
    revalidate: false,
  };
}

export async function getStaticPaths() {
  const contents = await getAllContents();
  const paths = contents?.map((content) => ({
    params: { keyword: content.name },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default SearchContent;
