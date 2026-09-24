import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
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

const MenuIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Nav model — drives both the desktop row and the mobile panel        */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Reports", to:"/reports" },
  { label: "How it works", section: "how-it-works" },
  { label: "About", section: "why-streetfixkaro" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { userData } = useAuth();

  /* Escape closes the mobile panel */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  /* landing-page sections are reachable from any route */
  const goToSection = (id) => {
    setOpen(false);
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (pathname === "/") {
      scroll();
      return;
    }
    navigate("/");
    requestAnimationFrame(() => requestAnimationFrame(scroll));
  };

  const desktopLink = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition rounded-sm ${focusRing} ${
      isActive ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between lg:h-18">
          {/* ---- brand ---- */}
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

          {/* ---- desktop links ---- */}
          <nav
            aria-label="Main"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          >
            {NAV_LINKS.map((item) =>
              item.to ? (
                <NavLink key={item.label} to={item.to} end className={desktopLink}>
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className={`rounded-sm py-1 text-sm font-medium text-slate-300 transition hover:text-white ${focusRing}`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* ---- desktop actions ---- */}
          <div className="hidden items-center gap-5 lg:flex">
            
            {
            (userData)?
            (<Link
              to="/admin/dashboard"
              className="rounded-sm text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {userData.username}
              </Link>):
            (<Link
              to="/login"
              className={`rounded-sm text-sm font-semibold text-slate-300 transition hover:text-white ${focusRing}`}
            >
              Log in
            </Link>)
}
            <Link
              to="/report"
              className={`group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 ${focusRing}`}
            >
              Report an issue
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ---- mobile toggle ---- */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 lg:hidden ${focusRing}`}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ---- mobile panel ---- */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-white/10 bg-slate-950/95 backdrop-blur lg:hidden"
        >
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-5">
            {NAV_LINKS.map((item) =>
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-3 text-base font-medium transition ${focusRing} ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white ${focusRing}`}
                >
                  {item.label}
                </button>
              )
            )}

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className={`inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10 ${focusRing}`}
              >
                Log in
              </Link>
              <Link
                to="/report"
                onClick={() => setOpen(false)}
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 ${focusRing}`}
              >
                Report an issue
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
