import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';

import Symbol from '../public/images/symbol.svg';
import IconArrow from '../public/images/arrow.svg';
import LogoClearworks from '../public/images/logos/clearworks.svg';
import LogoGuava from '../public/images/logos/guava.svg';
import LogoPetPlate from '../public/images/logos/petplate.svg';
import LogoStorenvy from '../public/images/logos/storenvy.svg';
import LogoTropical from '../public/images/logos/tropical.svg';
import LogoTrue from '../public/images/logos/true.svg';
import LogoVtex from '../public/images/logos/vtex.svg';
import LogoGithub from '../public/images/logos/github.svg';
import LogoLinkedin from '../public/images/logos/linkedin.svg';

import style from './index.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=IBM+Plex+Sans:ital@0;1&family=Playfair+Display:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={style.index}>
        <nav className={style.nav}>
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
              <Link href="#work">
                <a>Work</a>
              </Link>
            </li>
          </ol>
          <IconArrow className={style.arrow} />
        </nav>

        <header className={style.header}>
          <Link href="#">
            <a className={style.symbol} aria-label="Go to homepage">
              <Symbol />
            </a>
          </Link>
          <section className={cn(style.title, style.container, 'grid')}>
            <h1>
              <span>Sérgio Fontes: </span>
              <b>Product</b> Designer
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
                <a
                  className={style.linkedin}
                  href="https://www.linkedin.com/in/osergiofontes/"
                  target="_blank"
                >
                  <LogoLinkedin />
                  LinkedIn
                </a>{' '}
                and{' '}
                <a href="https://github.com/sergiofontes" target="_blank">
                  <LogoGithub />
                  GitHub
                </a>
              </p>
            </div>
            <span className={cn(style.divisors, style.last)}></span>
          </section>

          <section id="work" className={cn(style.work, style.container, 'grid')}>
            <h2>(Some) Work</h2>
            <section id="petplate" className="grid">
              <h3 className={cn(style.logo, style.petplate)}>
                <span>PetPlate</span>
                <LogoPetPlate />
              </h3>
              <small>2020–2021</small>
              <div></div>
              <ul>
                <li>Design system development;</li>
                <li>Requirements gathering;</li>
                <li>Low &amp; hi-fi prototyping;</li>
                <li>Usability testing;</li>
                <li>HTML/CSS coding.</li>
              </ul>
              <a href="https://petplate.com" target="_blank">
                PetPlate
                <IconArrow />
              </a>
            </section>
            <section id="tropicalruby" className="grid">
              <h3 className={cn(style.logo, style.tropical)}>
                <span>TropicalRuby</span>
                <LogoTropical />
              </h3>
              <small>2015</small>
              <div></div>
              <ul>
                <li>Visual identity;</li>
                <li>Website design;</li>
                <li>HTML/CSS coding;</li>
                <li>Conference organization.</li>
              </ul>
              <a href="https://tropicalrb.com" target="_blank">
                TropicalRuby
                <IconArrow />
              </a>
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
        </footer>
      </div>
    </Layout>
  );
}
