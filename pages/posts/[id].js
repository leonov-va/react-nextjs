import { useRouter } from "next/router";

const Posts = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Пост с id {query.id}</h1>
    </div>
  );
};

export default Posts;
