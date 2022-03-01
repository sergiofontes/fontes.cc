import Head from 'next/head';

export const siteTitle = 'Sérgio Fontes—Product Designer';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Brazilian digital designer. I help companies design, build, and validate digital products."
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="msapplication-TileColor" content="#211d1d" />
        <meta name="theme-color" content="#211d1d" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#211d1d" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=IBM+Plex+Sans:ital@0;1&family=Playfair+Display:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}
