import Logo from '../logos/';
import Handnote from '../../public/images/handnote.svg';

export default function Experience() {
  return (
    <section id="experience" className="grid content">
      <h2 className="content_heading">Experience</h2>

      <div className="experience_text content_body">
        <p>
          I design products and lead design teams that turn complexity into
          simplicity. Working across industries and international markets, I’ve
          helped organizations in Brazil, the USA, and Canada create products
          where user needs, business strategy, and technology come together.
        </p>
        <p>
          I’m energized by the full spectrum of product design, from shaping
          long-term vision to refining the details that make products feel unique
          &amp; well-crafted. Through iterative, hypothesis-driven design, I
          transform ambiguity into meaningful experiences.
        </p>
      </div>

      <aside className="experience_logos content_aside">
        <ul className="experience_logos-list" aria-label="Companies I’ve worked at">
          <li className="experience_logo">
            <Logo type="guava" />
            <span className="label experience_period">2013–2021</span>
          </li>
          <li className="experience_logo">
            <Logo type="vtex" />
            <span className="label experience_period">2021–2022</span>
          </li>
          <li className="experience_logo -current">
            <Handnote className="experience_note" role="img" aria-label="currently" />
            <Logo type="stone" />
            <span className="label experience_period">2022–&nbsp;…</span>
          </li>
        </ul>
      </aside>

      <span className="experience_divisor content_rule -edge"></span>
    </section>
  );
}
