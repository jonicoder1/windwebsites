import Head from "./header";
import Info1 from "./info-1";
import Services from "./services";
import Info2 from "./info-2";
import Features from "./features";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Shop from "./shop";
import FAQ from "./faq";
import NewsLetter from "./new-sletter";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Head />
      <Info1 />
      <Services />
      <Info2 />
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
