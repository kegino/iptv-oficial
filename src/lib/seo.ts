export const SITE_URL = "https://iptvoficial.online";
export const SITE_NAME = "IPTV Oficial";
export const SITE_TAGLINE = "Plataforma Oficial de Streaming IPTV 4K no Brasil — Conexão Direta";

export function canonicalUrl(path: string = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `${SITE_URL}/${clean}` : `${SITE_URL}/`;
}

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  ogType?: "website" | "article";
}

export function pageMeta({
  title,
  description,
  path = "",
  image = "/og-image.webp",
  ogType = "website",
}: PageMetaOptions) {
  const url = canonicalUrl(path);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: ogType },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: imageUrl },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [
      { rel: "canonical", href: url },
    ],
  };
}
