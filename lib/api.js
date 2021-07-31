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
      `*[_type == "content" && slug == $slug]{name, images, slug, description}`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
