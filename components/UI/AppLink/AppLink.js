import Link from "next/link";
import styles from "./AppLink.module.css";

function AppLink({ className = "", text, href }) {
  return (
    <Link href={href}>
      <a className={`${className} ${styles.link}`}>{text}</a>
    </Link>
  );
}

export default AppLink;
