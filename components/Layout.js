import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" relative min-h-screen bg-indigo-50 overflow-hidden">
        {router.pathname === "/login" || router.pathname === "/register" ? null : <Header />}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Ivana Test",
  description: "Here is a solution to Ivana test",
  keywords: "Ivana, test, Ivana test",
};
