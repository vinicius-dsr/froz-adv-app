import { GetServerSideProps } from "next";

const SITE_URL = "https://frozadvogados.com.br";

const pages = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/login", priority: 0.5, changefreq: "monthly" },
  { url: "/cadastro", priority: 0.5, changefreq: "monthly" },
];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
