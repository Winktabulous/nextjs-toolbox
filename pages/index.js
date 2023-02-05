import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Big-Cranium Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sanium Craniums" />
        <hr />
        <p className="description">
          Form test, should send email to mike.winkler90@gmail.com.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
