import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "lxm1elmu",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const writeClient = createClient({
  projectId: "lxm1elmu",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "skR9SmId9DkIIPld6rksZQpOSZAZfBRGFVwKPlONllwwRbK0MR6VRk9RYYgvy2wNa7eE6NbubOaySMAeNlNL9P7DeFxZ4WiW6xb2iZo7cQB5ajoA2K3QjYRAlFCnwnaiH4guMb1nuTMnQYDklYB6p8fKawsj50aDlbK01tCmlyzwoa9x0KJS",
  useCdn: false
});

export { client as c, urlFor as u, writeClient as w };
