import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <span>Logo</span>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
