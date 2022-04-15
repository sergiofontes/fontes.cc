import Head from 'next/head';
import dynamic from 'next/dynamic'

import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionExperience from '../components/sections/experience';
import SectionTestimonial from '../components/sections/testimonial';
import SectionTraits from '../components/sections/traits';
import SectionContact from '../components/sections/contact';

const SectionWork = dynamic(() => import('../components/work'));
const WorkPetPlate = dynamic(() => import('../components/work/petplate'));
const WorkTropical = dynamic(() => import('../components/work/tropical'));

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

          <SectionExperience />
          <SectionTestimonial />
          <SectionTraits />
          <SectionContact />

          <SectionWork>
            <WorkPetPlate />
            <WorkTropical />
          </SectionWork>
        </main>

        <Footer />
      </div>
    </Layout>
  );
}
