// import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from "next/head";

// interface LayoutProps {
//   children: ReactNode;
// }
export default function Layout(props) {
  const { children, pageTitle } = props
  return (
    <div>
      <Head>
        <title>Next JS | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic"></meta>
      </Head>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}
