import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <header id="hi" className="hero header">
      <section className="title grid content">
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
      <section id="intro" className="intro grid content">
        <h2>Intro</h2>
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
