import AppLink from "../UI/AppLink/AppLink";

const Navigation = () => {
  return (
    <>
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
      <style jsx>{`
        .nav__list {
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .nav__item {
          margin-right: 20px;
        }
        .nav__item:last-child {
          margin-right: 0;
        }
      `}</style>
    </>
  );
};

export default Navigation;
