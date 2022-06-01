import Link from "next/link";
import AppLink from "../components/UI/AppLink/AppLink";

const Index = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <AppLink href="/" text="Главная" />
          </li>
          <li className="nav__item">
            <AppLink href="/posts" text="Посты" />
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
      `}</style>
    </div>
  );
};

export default Index;
