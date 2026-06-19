export default function Layout({ children, home }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      {children}
    </>
  );
}
