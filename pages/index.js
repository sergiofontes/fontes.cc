import Layout from '../components/layout';
import Seo from '../components/seo';
import seo from '../data/seo/home.json';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Footer from '../components/footer';
import AboutExperience from '../components/about/experience';
import AboutTestimonial from '../components/about/testimonial';
import AboutTraits from '../components/about/traits';
import AboutContact from '../components/about/contact';
import Work from '../components/work';
import Motion from '../components/motion';

export default function Home() {
  return (
    <Layout>
      <Seo {...seo} />
      <Motion />

      <div className="index">
        <Nav />
        <Hero />

        <main className="index_main" id="content">

          <AboutExperience />

          <Work />

          <AboutContact />
          <AboutTestimonial />
          <AboutTraits />
        </main>

        <Footer />
      </div>
    </Layout>
  );
}
