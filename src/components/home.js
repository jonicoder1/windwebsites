import Head from "./head";
import Footer from "./footer";
import Header from "./header";
import Advanced from "./Advanced";
import Services from "./services";
import Info1 from "./info-1";
import Features from "./features";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Shop from "./shop";
import FAQ from "./faq";
import NewsLetter from "./new-sletter";

const Home = () => {
  return (
    <>
      <Head />
      <Header />
      <Advanced />
      <Services />
      <Info1 />
      <Features />
      <Gallery />
      <Testimonials />
      <Shop />
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
