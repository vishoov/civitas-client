import { useLocation } from "react-router-dom";

/*  Canonical origin. Override per-environment with VITE_SITE_URL so that
    preview builds don't advertise production URLs to crawlers.           */
const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://streetfixkaro.example.com"
).replace(/\/$/, "");

const SITE_NAME = "StreetFixKaro";

const DEFAULT_DESCRIPTION =
  "StreetFixKaro turns a photo of a broken street into a tracked, public civic report — so potholes, broken lights and uncollected waste get seen, routed and resolved.";

const OG_IMAGE = `${SITE_URL}/og-image.png`;

/*  One entry per route. `noindex` marks pages that must never reach the
    search index (auth flows, admin surfaces, 404).                       */
const ROUTES = {
  "/": {
    title: "StreetFixKaro — Report civic issues and track them to resolution",
    description: DEFAULT_DESCRIPTION,
  },
  "/report": {
    title: "Report a civic issue | StreetFixKaro",
    description:
      "Report a pothole, broken streetlight or uncollected waste in your area. Add a photo, pincode and district — StreetFixKaro routes it to the right authority and tracks it publicly.",
  },
  "/reports": {
    title: "Browse civic reports near you | StreetFixKaro",
    description:
      "Browse civic issue reports by state and status. See what has been raised, what is in progress and what has been resolved in your city.",
  },
  "/login": {
    title: "Log in | StreetFixKaro",
    description: "Log in to your StreetFixKaro account to file and follow civic reports.",
    noindex: true,
  },
  "/signup": {
    title: "Create an account | StreetFixKaro",
    description: "Create a free StreetFixKaro account to report civic issues in your area.",
    noindex: true,
  },
  "/admin/dashboard": { title: "Admin dashboard | StreetFixKaro", noindex: true },
  "/admin/reports": { title: "Admin — reports | StreetFixKaro", noindex: true },
};

const NOT_FOUND = {
  title: "Page not found | StreetFixKaro",
  description: "The page you are looking for does not exist.",
  noindex: true,
};

/**
 * Emits document metadata for the active route. React 19 hoists <title>,
 * <meta> and <link> rendered anywhere in the tree into <head>.
 */
const Seo = () => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const meta = ROUTES[path] || NOT_FOUND;

  const title = meta.title;
  const description = meta.description || DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          meta.noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
};

export default Seo;
