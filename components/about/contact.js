import Anchor from '../../components/anchor';

export default function Contact() {
  return (
    <section id="contact" className="contact grid content">
      <h2>Contact</h2>
      <div className="content_column">
        <p>
          <span className="label contact_label">Email:</span>
          <a className="lead" href="mailto:sergio@fontes.cc">
            sergio@fontes.cc
          </a>
        </p>
      </div>
      <span className="content_divisor"></span>
      <div className="contact_columns content_columns">
        <p>I usually reply emails in no more than one business day. Say hello! </p>
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
          <Anchor type="github" href="https://github.com/sergiofontes" target="_blank">
            GitHub
          </Anchor>
        </p>
      </div>
      <span className="content_divisors -last"></span>
    </section>
  );
}
