import Header from "./header";
import Advanced from "./Advanced";
import Services from "./services";
import Info1 from "./info-1";
import Features from "./features";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Shop from "./shop";
import FAQ from "./faq";
import NewsLetter from "./news-letter";
import Navigation from "./navigation";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Navigation />
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
