import Head from 'next/head';

export const siteTitle = 'Sérgio Fontes—Product Designer';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content="#211d1d" />
        <meta name="theme-color" content="#211d1d" />
        <link rel="icon" href="favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#211d1d" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=IBM+Plex+Sans:ital@0;1&family=Playfair+Display:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}
