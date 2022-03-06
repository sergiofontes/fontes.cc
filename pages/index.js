import Head from 'next/head';
import cn from 'classnames';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav';
import Anchor from '../components/anchor';

import LogoClearworks from '../public/images/logos/clearworks.svg';
import LogoGuava from '../public/images/logos/guava.svg';
import LogoPetPlate from '../public/images/logos/petplate.svg';
import LogoStorenvy from '../public/images/logos/storenvy.svg';
import LogoTropical from '../public/images/logos/tropical.svg';
import LogoTrue from '../public/images/logos/true.svg';
import LogoVtex from '../public/images/logos/vtex.svg';

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

        <header id="hi" className={style.header}>
          <section className={cn(style.title, style.container, 'grid')}>
            <h1 aria-label="Product, U.X., Digital Designer">
              <b>
                <Typewriter
                  options={{
                    strings: ['Product', 'U.X.', 'Digital', 'Interaction'],
                    autoStart: true,
                    loop: true,
                    pauseFor: 1750,
                  }}
                />
              </b>
              Designer
            </h1>
          </section>
          <section id="intro" className={cn(style.intro, style.container, 'grid')}>
            <h2>Intro</h2>
            <div className={style.column}>
              <p className={cn(style.lead, 'lead')}>
                Hi, I‘m<i></i> Sérgio Fontes.
              </p>
            </div>
            <div className={style.columns}>
              <p>I‘m a Brazilian digital designer with 12+ years of experience. </p>
              <p>I help companies design, build, and validate digital products.</p>
            </div>
            <span className={cn(style.divisors, style.last)}></span>
          </section>
        </header>

        <main className={style.main}>
          <section
            id="experience"
            className={cn(style.experience, style.container, 'grid')}
          >
            <h2>Experience</h2>
            <div className={style.column}>
              <p>
                I'm Sérgio, a daydreamer, designer &amp; enthusiast about great
                products. Currently, I'm <em>Staff Product Designer</em> at{' '}
                <a href="https://vtex.com" target="_blank">
                  VTEX
                </a>
                , helping shape the present and future of worldwide commerce by
                building a cutting-edge framework for stores and developers.
              </p>
            </div>
            <ul className={style.logo}>
              <li className={style.vtex}>
                <span>VTEX</span>
                <LogoVtex />
              </li>
            </ul>
            <span className={style.divisor}></span>
            <div className={style.columns}>
              <p>
                Previously, as{' '}
                <a href="https://guava.software" target="_blank">
                  Guava
                </a>
                's <em>Lead Designer</em>, I've helped envision and execute a design
                strategy; fostered the design culture; and grew and trained the
                designers' squad—from an army of one to a diverse and tightly-knit team
                of six people.
              </p>
              <p>
                During my{' '}
                <a href="https://guava.software" target="_blank">
                  Guava
                </a>{' '}
                years, as a <em>Consultant Designer</em>, I've collaborated with more
                than 18 clients—small and mid companies from the USA and
                Brazil—revamping their digital products' user experience to transform
                their business.
              </p>
            </div>
            <ul className={style.logos} aria-label="Companies I've collaborated with">
              <li className={style.guava}>
                <span>Guava</span>
                <LogoGuava />
              </li>
              <li className={style.petplate}>
                <span>PetPlate</span>
                <LogoPetPlate />
              </li>
              <li className={style.clearworks}>
                <span>Clearworks</span>
                <LogoClearworks />
              </li>
              <li className={style.storenvy}>
                <span>Storenvy</span>
                <LogoStorenvy />
              </li>
              <li className={style.true}>
                <span>True</span>
                <LogoTrue />
              </li>
            </ul>
            <span className={cn(style.divisors, style.last)}></span>
          </section>

          <figure
            id="testimonial"
            className={cn(style.testimonial, style.container, 'grid')}
          >
            <blockquote>
              <p className="lead">
                I have been working with Sérgio for the past two years, and it's been a
                great opportunity to see his leadership and product design expertise in
                action. He's responsible for guiding the design team without
                compromising any natural talent from his peers, not to mention his vast
                experience in the design spectrum, always looking forward to improving
                the company's design process and strategy. His natural skills go from
                CSS mastery (inspiring every designer to be a better coder),
                architectural thinking, user's best friend, and meme hunter.
              </p>
            </blockquote>
            <figcaption>
              Filipe Soares
              <br />
              <small>Staff Product Designer @ VTEX</small>
              <div className={style.logo}>
                <LogoVtex />
              </div>
            </figcaption>
          </figure>

          <section id="traits" className={cn(style.traits, style.container, 'grid')}>
            <h2>Traits</h2>
            <div className={style.column}>
              <h3>Multidisciplinary</h3>
              <p>
                I love researching. I love prototyping. I love visual design. And I
                love HTML/CSS. This mixture put me in a particular situation of being a
                product's designer from day one. And, guess what, I love them all.
              </p>
            </div>
            <span className={style.divisor}></span>
            <div className={style.column}>
              <h3>Craftsman</h3>
              <p>
                I have a keen eye to details and can sometimes be obsessive about
                pursuing the best possible solution. But it's not only about pixels: it
                also matters to me the overall use experience and its subjectivities.
              </p>
            </div>
            <span className={style.divisor}></span>
            <div className={style.column}>
              <h3>Energetic</h3>
              <p>
                I'm an optimistic and energetic person. I always try to bring in my
                enthusiasm and motivation to teammates, and can elevate the people's
                spirit when needed. I can fearlessly go down the rabbit hole to
                overcome any challenge.
              </p>
            </div>
            <span className={cn(style.divisor, style.last)}></span>
          </section>

          <section id="contact" className={cn(style.contact, style.container, 'grid')}>
            <h2>Contact</h2>
            <div className={style.column}>
              <p>
                <em>Email:</em>
                <a className={cn(style.lead, 'lead')} href="mailto:sergio@fontes.cc">
                  sergio@fontes.cc
                </a>
              </p>
            </div>
            <span className={style.divisor}></span>
            <div className={style.columns}>
              <p>I usually reply emails in no more than one business day.</p>
              <p>
                Alternatively, you can find me on{' '}
                <Anchor
                  type="linkedin"
                  href="https://www.linkedin.com/in/osergiofontes/"
                  target="_blank"
                >
                  LinkedIn
                </Anchor>{' '}
                and{' '}
                <Anchor
                  type="github"
                  href="https://github.com/sergiofontes"
                  target="_blank"
                >
                  GitHub
                </Anchor>
              </p>
            </div>
            <span className={cn(style.divisors, style.last)}></span>
          </section>

          <section id="work" className={cn(style.work, style.container, 'grid')}>
            <h2>
              <span>(Some) </span>Work
            </h2>

            <section id="petplate" className={cn(style.case, 'grid')}>
              <h3 className={cn(style.logo, style.petplate)}>
                <span>PetPlate</span>
                <LogoPetPlate />
              </h3>
              <small className={style.date}>2020–2021</small>
              <div className={style.image}>
                <Image
                  src="/images/work/petplate_10-7.jpg"
                  className={style.image_work}
                  layout="fill"
                  alt="PetPlate's treats screen"
                />
              </div>
              <p>
                PetPlate is an online delivery service that sells healthy food for dogs
                through personalized meal plans. Guava team and I helped rebrand their
                website and designed a new subscription flow, user profile, and order
                management. We also delivered a new one-off ordering flow for their
                functional foods. I articulated requirements with stakeholders,
                conducted usability tests with users, and produced new PDPs + a fast
                checkout system. Now, customers can fulfill an order with only three
                steps and less than a minute.
              </p>
              <Anchor href="https://petplate.com" target="_blank" external>
                PetPlate
              </Anchor>
            </section>

            <section id="tropicalruby" className={cn(style.case, 'grid')}>
              <h3 className={cn(style.logo, style.tropical)}>
                <span>TropicalRuby</span>
                <LogoTropical />
              </h3>
              <small className={style.date}>2015</small>
              <div className={style.image}>
                <Image
                  src="/images/work/tropical_10-7.jpg"
                  className={style.image_work}
                  layout="fill"
                  alt="Tropical Ruby's home screen"
                />
              </div>
              <p>
                TropicalRuby was an original international tech conference hosted in a
                Brazilian tropical paradise. It blended outdoor activities with
                keynotes and workshops. I designed and developed all communication &
                visual materials: a comprehensive branding system, a complete website,
                emails templates, and print assets like shirts, backdrop panels, and
                badges.
              </p>
              <Anchor href="https://tropicalrb.com" target="_blank" external>
                TropicalRuby
              </Anchor>
            </section>
          </section>
        </main>

        <footer className={cn(style.footer, style.container, 'grid')}>
          <div>
            <small>Sérgio Fontes, 2022. Copy, design &amp; code by me. </small>
            <small>
              No cookies, no tracking, just the beauty of HTML &amp; CSS (shh, there's
              some JS too).
            </small>
          </div>
          <div>
            <small>
              Designed with{' '}
              <Anchor href="https://figma.com" target="_blank">
                Figma
              </Anchor>{' '}
              using{' '}
              <Anchor href="https://fonts.google.com/specimen/DM+Sans" target="_blank">
                DM Sans
              </Anchor>
              ,{' '}
              <Anchor
                href="https://fonts.google.com/specimen/IBM+Plex+Sans"
                target="_blank"
              >
                IBM Plex Sans
              </Anchor>
              , and{' '}
              <Anchor
                href="https://fonts.google.com/specimen/Playfair+Display"
                target="_blank"
              >
                Playfair Display
              </Anchor>
              .
            </small>
            <small>
              Built with{' '}
              <Anchor href="https://nextjs.org/" target="_blank">
                Next.js
              </Anchor>{' '}
              and hosted at{' '}
              <Anchor href="https://vercel.com/" target="_blank">
                Vercel
              </Anchor>
              .
            </small>
            <small>
              See the code at{' '}
              <Anchor
                href="https://github.com/sergiofontes/fontes.cc/"
                target="_blank"
              >
                GitHub
              </Anchor>
              .
            </small>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
