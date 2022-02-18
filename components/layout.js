import Head from 'next/head';

export const siteTitle = 'Sérgio Fontes—Product Designer';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Brazilian digital designer. I help companies design, build, and validate digital products."
        />
        <meta property="og:image" content="" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children}
    </>
  );
}
