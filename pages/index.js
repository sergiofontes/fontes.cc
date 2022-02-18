import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';

import Symbol from '../public/images/symbol.svg';

import style from './index.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=IBM+Plex+Sans:ital@0;1&family=Playfair+Display:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav>
        <ol>
          <li>
            <Link href="#experience">
              <a>Experience</a>
            </Link>
          </li>
          <li>
            <Link href="#traits">
              <a>Traits</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="#Work">
              <a>Work</a>
            </Link>
          </li>
        </ol>
      </nav>
      <header>
        <Symbol className={style.logo} />
        <section>
          <h1>
            <span>Sérgio Fontes: </span>Product Designer
          </h1>
        </section>
        <section id="intro">
          <h2>Intro</h2>
          <p>
            Hi, I‘m<i></i> Sérgio Fontes.
          </p>
          <div>
            <p>I‘m a Brazilian digital designer with 12+ years of experience.</p>
            <p>I help companies design, build, and validate digital products.</p>
          </div>
        </section>
      </header>

      <main>
        <section id="experience">
          <h2>Experience</h2>
          <p>
            I'm Sérgio, a daydreamer, designer &amp; enthusiast about great products.
            Currently, I'm <em>Staff Product Designer</em> at{' '}
            <a href="https://vtex.com" target="_blank">
              VTEX
            </a>
            , helping shape the present and future of worldwide commerce by building a
            cutting-edge framework for stores and developers.
          </p>
          <p>
            Previously, as{' '}
            <a href="https://guava.software" target="_blank">
              Guava
            </a>
            's Lead Designer, I've helped to envision and execute a design strategy;
            fostered the design culture; and grew and trained the designers' squad—from
            an army of one to a diverse and tightly-knit team of six people.
          </p>
          <p>
            During my{' '}
            <a href="https://guava.software" target="_blank">
              Guava
            </a>{' '}
            years, as a Consultant Designer, I've collaborated with more than 18
            clients—small and mid companies from the USA and Brazil—to transform their
            business by revamping their digital products' user experience.
          </p>
        </section>

        <figure id="testimonial">
          <blockquote>
            <p>
              I have been working with Sergio for the past two years, and it's been a
              great opportunity to see his leadership and product design expertise in
              action. He's responsible for guiding the design team without compromising
              any natural talent from his peers, not to mention his vast experience in
              the design spectrum, always looking forward to improving the company's
              design process and strategy. His natural skills go from CSS mastery
              (inspiring every designer to be a better coder), architectural thinking,
              user's best friend, and meme hunter. He's a loose laugher as well, has
              great humor sense, and won't miss the chance to pet your cat.
            </p>
          </blockquote>
          <figcaption>
            Filipe Soares
            <br />
            <small>Staff Product Designer @ VTEX</small>
          </figcaption>
        </figure>

        <section id="traits">
          <h2>Traits</h2>
          <section>
            <h3>Multidisciplinary</h3>
            <p>
              I love researching. I love prototyping. I love visual design. And I love
              HTML/CSS. This mixture put me in a particular situation of being a
              product's designer from day one. And, guess what, I love them all.
            </p>
          </section>
          <section>
            <h3>Craftsman</h3>
            <p>
              I have a keen eye to details and can sometimes be obsessive about
              pursuing the best possible solution. But it's not only about pixels: it
              also matters to me the overall use experience and its subjectivities.
            </p>
          </section>
          <section>
            <h3>Energetic</h3>
            <p>
              I'm an optimistic and energetic person. I always try to bring in my
              enthusiasm and motivation to teammates, and can elevate the people's
              spirit when needed. I can fearlessly go down the rabbit hole to overcome
              any challenge.
            </p>
          </section>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            <em>Email:</em>
            <a href="mailto:sergio@fontes.cc">sergio@fontes.cc</a>
          </p>
          <p>I usually reply emails in no more than one business day.</p>
          <p>
            Alternatively, you can find me on{' '}
            <a href="" target="_blank">
              LinkedIn
            </a>{' '}
            and{' '}
            <a href="" target="_blank">
              GitHub
            </a>
          </p>
        </section>

        <section id="work">
          <h2>(Some) Work</h2>
          <section id="petplate">
            <h3>PetPlate</h3>
            <small>2020–2021</small>
            <p>
              <ul>
                <li>Design system development;</li>
                <li>Requirements gathering;</li>
                <li>Low &amp; hi-fi prototyping;</li>
                <li>Usability testing;</li>
                <li>HTML/CSS coding.</li>
              </ul>
            </p>
            <a href="https://petplate.com" target="_blank">
              PetPlate
            </a>
          </section>
          <section id="tropicalruby">
            <h3>TropicalRuby</h3>
            <small>2015</small>
            <p>
              <ul>
                <li>Visual identity;</li>
                <li>Website design;</li>
                <li>HTML/CSS coding;</li>
                <li>Conference organization.</li>
              </ul>
            </p>
            <a href="https://tropicalrb.com" target="_blank">
              PetPlate
            </a>
          </section>
        </section>
      </main>
      <footer>
        <small>Sérgio Fontes, 2022. Copy, design &amp; code by me.</small>
        <small>
          No cookies, no tracking, just the beauty of HTML &amp; CSS (shh, there's some
          JS too).
        </small>
      </footer>
    </Layout>
  );
}
