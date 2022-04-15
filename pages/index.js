import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutExperience from '../components/about/experience';
import AboutTestimonial from '../components/about/testimonial';
import AboutTraits from '../components/about/traits';
import AboutContact from '../components/about/contact';
import Work from '../components/work';
import WorkPetPlate from '../components/work/petplate';
import WorkTropical from '../components/work/tropical';

import style from './index.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Brazilian digital designer. I help companies design, build, and validate digital products."
          key="desc"
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fontes.cc" />
        <meta property="og:image" content="https://fontes.cc/images/preview.png" />
        <meta
          property="og:description"
          content="Brazilian digital designer. I help companies design, build, and validate digital products."
        />
      </Head>

      <div className={style.index}>
        <Nav />
        <Header />

        <main className={style.main}>

          <AboutExperience />
          <AboutTestimonial />
          <AboutTraits />
          <AboutContact />

          <Work>
            <WorkPetPlate />
            <WorkTropical />
          </Work>
        </main>

        <Footer />
      </div>
    </Layout>
  );
}
