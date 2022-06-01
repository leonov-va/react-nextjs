import Link from "next/link";
import styles from "./AppLink.module.css";

function AppLink({ text, href }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}

export default AppLink;
