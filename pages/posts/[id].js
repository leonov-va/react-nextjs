import { useRouter } from "next/router";
import styles from "../../styles/Post.module.scss";

const Post = ({ post }) => {
  const { query } = useRouter();

  return (
    <div className={styles.post}>
      <h1>Пост с id {query.id}</h1>
      <h2>{post.title}</h2>
    </div>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return {
    props: { post },
  };
}
