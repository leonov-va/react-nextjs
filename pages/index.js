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

      <style jsx>{`
        .nav {
          padding: 15px;
          background-color: bisque;
        }
        .nav__list {
          display: flex;
          list-style: none;
        }
        .nav__item a {
          display: inline-block;
          margin: 10px;
          color: #000;
          font-size: 20px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
