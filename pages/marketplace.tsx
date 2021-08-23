import Layout from '../components/Layout'
import Header from '../components/Header'
import MarketGuide from '../components/MarketGuide'
import MarketIntro from '../components/MarketIntro'
import Footer from '../components/Footer'

const Index = () => {
  return(
    <Layout>
      <Header />
      <MarketIntro />
      <MarketGuide />
      <Footer />
    </Layout>
  );
}

export default Marketplace;
