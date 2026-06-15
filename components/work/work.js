export default function Work({ children }) {
  return (
    <section id="work" className="work grid content">
      <h2>
        <span>(Some) </span>Work
      </h2>
      
      {children}
    </section>
  );
}
