import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getCarouselImages(title) {
  const result = await client.fetch(
    `*[_type=="carousel" && name match $title]{images}`,
    { title }
  );
  return result;
}

export async function getAllPages() {
  const results = await client.fetch(`*[_type == "content"] {slug}`);
  return results;
}

export async function getPageBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "content" && slug == $slug]{name, images, images_mobile, slug, description}`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}

export async function getSearchContent({ searchParam }) {
  const results = await client.fetch(
    `*[_type == "content" && (name match $searchParam || keyword_search match $searchParam)]{name, images, slug, description}`,
    { searchParam }
  );
  return results;
}

export async function getAllContents() {
  const results = await client.fetch(
    `*[_type == "content"] {name, images, slug, description}`
  );
  return results;
}
