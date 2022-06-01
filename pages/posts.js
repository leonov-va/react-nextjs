import Link from "next/link";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([
    { id: 1, body: "aaaa" },
    { id: 2, body: "bbbb" },
  ]);
  return (
    <div>
      <h1>Страница постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.body}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
