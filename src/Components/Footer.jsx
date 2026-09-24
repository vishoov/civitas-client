import { Link, useLocation, useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Icons (stroke-based, 24px grid — same family as the landing page)   */
/* ------------------------------------------------------------------ */

const iconBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

const PinIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

const ArrowIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...iconBase} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M6.2 3.5h3l1.4 3.6-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

/* Social glyphs are filled marks, so they opt out of the stroke base */
const socialBase = { fill: "currentColor", viewBox: "0 0 24 24" };

const FacebookIcon = (props) => (
  <svg {...socialBase} {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.7v8h3.5Z" />
  </svg>
);

const XIcon = (props) => (
  <svg {...socialBase} {...props}>
    <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.5l-4.4-5.7L5.8 21H2.5l7.7-8.8L2.4 3H9l4 5.3L17.2 3Zm-1.2 16h1.8L8.1 4.9H6.1L16 19Z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg {...socialBase} {...props}>
    <path d="M6.9 21H3.6V9.1h3.3V21ZM5.25 7.6a1.93 1.93 0 1 1 0-3.85 1.93 1.93 0 0 1 0 3.85ZM21 21h-3.3v-5.8c0-1.4-.03-3.2-1.95-3.2s-2.25 1.5-2.25 3.1V21H10.2V9.1h3.16v1.63h.05c.44-.84 1.52-1.72 3.13-1.72 3.35 0 3.96 2.2 3.96 5.07V21Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...socialBase} {...props}>
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.01 15.14 4 12 4Zm0 3.03a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94Zm0 8.2a3.23 3.23 0 1 0 0-6.46 3.23 3.23 0 0 0 0 6.46Zm6.33-8.4a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Footer model                                                        */
/* ------------------------------------------------------------------ */

const PLATFORM_LINKS = [
  { label: "Home", to: "/" },
  { label: "Report an issue", to: "/report" },
  { label: "How it works", section: "how-it-works" },
  { label: "Public reports", section: "reports" },
  { label: "Dashboard", to: "/admin" },
];

const RESOURCE_LINKS = [
  { label: "Why StreetFixKaro", section: "why-streetfixkaro" },
  { label: "Help centre", to: "/" },
  { label: "Contact us", to: "/" },
  { label: "FAQs", to: "/" },
];

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", to: "/" },
  { label: "Terms & conditions", to: "/" },
  { label: "Cookies", to: "/" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const linkClass = `rounded-sm text-sm text-slate-400 transition hover:text-white ${focusRing}`;

const columnHeading =
  "text-xs font-semibold uppercase tracking-[0.18em] text-white";

function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  /* landing-page sections stay reachable from any route (mirrors the navbar) */
  const goToSection = (id) => {
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (pathname === "/") {
      scroll();
      return;
    }
    navigate("/");
    requestAnimationFrame(() => requestAnimationFrame(scroll));
  };

  const renderLink = (item) =>
    item.to ? (
      <Link to={item.to} className={linkClass}>
        {item.label}
      </Link>
    ) : (
      <button
        type="button"
        onClick={() => goToSection(item.section)}
        className={`${linkClass} text-left`}
      >
        {item.label}
      </button>
    );

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ============================ CTA BAND ========================= */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-violet-600/20 px-6 py-10 sm:px-10 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Spotted something broken in your city?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              It takes under a minute to file a report — and your neighbours can
              back it to push it up the queue.
            </p>
          </div>
          <Link
            to="/report"
            className={`group mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 lg:mt-0 ${focusRing}`}
          >
            Report an issue
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* ============================= COLUMNS ========================= */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 lg:grid-cols-12 lg:py-16">
          {/* ---- brand ---- */}
          <div className="col-span-2 lg:col-span-5">
            <Link
              to="/"
              className={`group inline-flex items-center gap-2.5 rounded-lg ${focusRing}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-600/25 transition group-hover:scale-105">
                <PinIcon className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                StreetFixKaro
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              A civic platform where residents report public issues, share
              suggestions, and track what the city actually fixes.
            </p>

            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white ${focusRing}`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- platform ---- */}
          <div className="lg:col-span-2">
            <h3 className={columnHeading}>Platform</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {PLATFORM_LINKS.map((item) => (
                <li key={item.label} className="flex">
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* ---- resources ---- */}
          <div className="lg:col-span-2">
            <h3 className={columnHeading}>Resources</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {RESOURCE_LINKS.map((item) => (
                <li key={item.label} className="flex">
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* ---- contact ---- */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className={columnHeading}>Contact</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <a
                  href="mailto:support@streetfixkaro.com"
                  className={`group inline-flex items-start gap-3 rounded-sm ${focusRing}`}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition group-hover:border-white/25 group-hover:text-white">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </span>
                    <span className="text-slate-300 transition group-hover:text-white">
                      support@streetfixkaro.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className={`group inline-flex items-start gap-3 rounded-sm ${focusRing}`}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition group-hover:border-white/25 group-hover:text-white">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">
                      Phone
                    </span>
                    <span className="text-slate-300 transition group-hover:text-white">
                      +91 98765 43210
                    </span>
                  </span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300">
                  <PinIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </span>
                  <span className="text-slate-300">New Delhi, India</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================ BOTTOM BAR ======================= */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} StreetFixKaro. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`rounded-sm transition hover:text-white ${focusRing}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
