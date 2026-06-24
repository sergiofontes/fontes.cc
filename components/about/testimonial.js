import Logo from "../logos/";

export default function Experience() {
  return (
    <figure id="testimonial" className="testimonial grid content">
      <blockquote>
        <p className="lead">
          “Simply put, Sérgio is one of the best designers I've ever worked
          with. His passion for design research, process and even front-end
          development can raise up the quality of any project he's involved
          with. His motivation can be contagious, pushing the team to do their
          best and reach beyond that. Projects under his umbrella are sure to
          reach their goals. We've had a long and productive partnership both at
          Guava and VTEX and I wouldn't blink an eye before recommending him.”
        </p>
      </blockquote>
      <figcaption>
        Lucas Marinho
        <br />
        <small>Engineering Manager @ VTEX</small>
        <div className="testimonial_logo">
          <Logo type="vtex" />
        </div>
      </figcaption>
    </figure>
  );
}
