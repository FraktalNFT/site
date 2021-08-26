import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Guide from "../components/Guide";
import Benefits from "../components/Benefits";
import Values from "../components/Values";
import Footer from "../components/Footer";
import Why from "../components/Why";

const Index = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Why />
      <Guide />
      <Benefits />
      <Footer />
    </Layout>
  );
};

export default Index;
