import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: DOB"
        description="Welcome to Dob Marketing Homepage."
        canonical="https://simple-site-henna.vercel.app/"
        openGraph={{
          url: "https://simple-site-henna.vercel.app/",
        }}
      />
      <Head>
        <title>DOB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
