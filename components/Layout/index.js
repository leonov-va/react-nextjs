import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta keywords="nextjs, react" />
        <title>Главная страница | React nextjs</title>
      </Head>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
