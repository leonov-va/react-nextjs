import Navigation from "../Navigation";
import AppLink from "../UI/AppLink/AppLink";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <AppLink href="/" text="Logo" />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
