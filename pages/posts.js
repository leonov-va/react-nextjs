import { useRouter } from "next/router";
import { Button, Card } from "react-bootstrap";
import Layout from "../components/Layout";
import styles from "../styles/Posts.module.scss";

const Posts = ({ posts }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/posts/${id}`);
  };

  return (
    <Layout>
      <div className={styles.posts}>
        <div className="container">
          <h1>Страница постов</h1>
          <ul className={styles.postsList}>
            {posts.map((post) => (
              <Card key={post.id}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleClick(post.id)}
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
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
