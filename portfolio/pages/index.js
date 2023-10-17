import NavBar from "@/components/navbar.js";
import Header from "@/components/header.js";
import About from "@/components/about.js";
import Experience from "@/components/experience.js";
import Achievements from "@/components/achievements";
import Projects from "@/components/projects.js";
import Contact from "@/components/contact.js";
import Footer from "@/components/footer.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/react-logo.png" type="image/png"></link>
        <title>Yohan&apos;s Portfolio</title>
      </Head>
      <NavBar />
      <Header />
      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
