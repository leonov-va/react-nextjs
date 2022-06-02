import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords="nextjs, react" />
        <title>Главная страница</title>
      </Head>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
