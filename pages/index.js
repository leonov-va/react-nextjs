import Link from "next/link";

const Index = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a>Главная</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/posts">
              <a>Посты</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Главная страница</h1>
    </div>
  );
};

export default Index;
