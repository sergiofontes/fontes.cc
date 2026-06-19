import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <header id="hi" className="hero header grid">
      <img
        className="hero_art header_art"
        src="/images/cover_home.png"
        srcSet="/images/cover_home.png 1x, /images/cover_home@2x.png 2x"
        width={371}
        height={371}
        alt=""
        aria-hidden="true"
      />

      <section className="header_title grid content">
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
      <section id="intro" className="header_intro grid content">
        <h2 className="content_heading">Intro</h2>
        <div className="content_column">
          <p className="lead">
            Hi, I’m<i></i> Sérgio Fontes.
          </p>
        </div>
        <div className="content_columns">
          <p>I’m a Brazilian digital designer with 15+ years of experience.</p>
          <p>I help companies design, build, and validate digital products.</p>
        </div>
        <span className="content_divisors -last"></span>
      </section>
    </header>
  );
}
