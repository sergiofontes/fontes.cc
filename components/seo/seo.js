import Head from "next/head";
import PropTypes from "prop-types";

import site from "../../data/seo/site.json";

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  type: PropTypes.oneOf(["website", "article"]),
  image: PropTypes.string,
  jsonLd: PropTypes.object,
};

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = site.image,
  jsonLd,
}) {
  const url = `${site.url}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={site.imageWidth} />
      <meta property="og:image:height" content={site.imageHeight} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
