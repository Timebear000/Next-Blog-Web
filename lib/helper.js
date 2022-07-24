const baseURL = "http://localhost:3000/";
// endPoint : http://localhost:3000/api/posts
export default async function getPosts() {
  const res = await fetch(`${baseURL}api/posts`);
  const posts = await res.json();
  return posts;
}

export async function getPost(id) {
  const res = await fetch(`${baseURL}api/posts/${id}`);
  const post = await res.json();
  return post;
}
