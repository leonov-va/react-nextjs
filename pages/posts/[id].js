import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import AppLink from "../../components/UI/AppLink/AppLink";
import styles from "../../styles/Post.module.scss";

const Post = ({ post }) => {
  const { query } = useRouter();

  return (
    <Layout>
      <div className="container">
        <div className={styles.post}>
          <hr />
          <AppLink
            className={styles.postLink}
            href="/posts"
            text="<- Back to posts"
          />
          <hr />
          <div className={styles.postId}>{`#${query.id}`}</div>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postText}>{post.body}</p>
        </div>
      </div>
    </Layout>
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
