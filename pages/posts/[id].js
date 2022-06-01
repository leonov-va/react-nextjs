import { useRouter } from "next/router";
import styles from "../../styles/Post.module.scss";

const Posts = () => {
  const { query } = useRouter();

  return (
    <div className={styles.post}>
      <h1>Пост с id {query.id}</h1>
    </div>
  );
};

export default Posts;
