import { Helmet } from 'react-helmet-async';

const SITE_URL  = import.meta.env.VITE_SITE_URL || 'https://underwritingcowboy.com';
const SITE_NAME = 'Underwriting Cowboy';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// ─────────────────────────────────────────────────────────────
// SEO — drop this component at the top of every page.
//
// Props:
//   title       → exact <title> string (required)
//   description → meta description, aim for 140–160 chars (required)
//   path        → page path e.g. "/field-guide" — used for canonical + og:url
//   image       → absolute OG image URL (optional, falls back to /og-image.jpg)
//   type        → "website" (default) | "article"
//   article     → { publishedTime, modifiedTime, section } — for article pages
// ─────────────────────────────────────────────────────────────
export function SEO({ title, description, path = '', image, type = 'website', article }) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage      = image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph (LinkedIn, Facebook, Slack) ───── */}
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:type"        content={type} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ── Article-specific OG (walkthroughs) ──────── */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* ── Twitter / X card ────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
