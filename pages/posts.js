import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Страница постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <span>{post.title}</span>
                <span>{post.body}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
}
