import axios from "axios";

interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}

fetchPosts()
  .then((posts) => {
    console.log(posts[0]?.title);
  })
  .catch((err) => {
    if (axios.isAxiosError(err)) {
      console.error("Request failed:", err.message);
    } else {
      console.error(err);
    }
  });
