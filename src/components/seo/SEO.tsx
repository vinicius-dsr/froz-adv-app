import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SITE_URL = "https://frozadvogados.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-edited.png`;

export const SEO = ({
  title,
  description,
  url,
  ogImage,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Froz Advogados" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
};
