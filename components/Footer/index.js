import AppLink from "../UI/AppLink/AppLink";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <AppLink href="/" text="Logo" />
          <span>Copyright © 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
