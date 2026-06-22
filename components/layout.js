export default function Layout({ children }) {
  return (
    <>
      <a className="global_skip" href="#content">
        Skip to content
      </a>
      {children}
    </>
  );
}
