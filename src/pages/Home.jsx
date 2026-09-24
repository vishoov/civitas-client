import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Icons (stroke-based, 24px grid)                                     */
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

const BoltIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M13 2 4.5 13.2h6L11 22l8.5-11.2h-6L13 2Z" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M16 20v-1.6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
    <circle cx="9" cy="7.4" r="3.4" />
    <path d="M22 20v-1.6a4 4 0 0 0-3-3.87M16.4 4.2a4 4 0 0 1 0 7.2" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M12 21s7-3.2 7-9V5.6L12 3 5 5.6V12c0 5.8 7 9 7 9Z" />
    <path d="m9.2 11.8 2 2 3.6-3.8" />
  </svg>
);

const ChartIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

const ArrowIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CheckIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Dummy content                                                       */
/* ------------------------------------------------------------------ */

const HERO_IMG =
  "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=1000&auto=format&fit=crop";
const HERO_IMG_ALT =
  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=800&auto=format&fit=crop";
const FEATURE_IMG =
  "https://images.unsplash.com/photo-1683837422097-61216462a59f?q=80&w=1200&auto=format&fit=crop";

const heroStats = [
  { value: "24,000+", label: "Residents onboard" },
  { value: "4,812", label: "Issues resolved" },
  { value: "38 hrs", label: "Median response" },
  { value: "12", label: "Partner cities" },
];

const partners = [
  "New Delhi Municipal Council",
  "Gautam Buddha Nagar",
  "Pune Smart City",
  "Bengaluru BBMP",
  "Hyderabad GHMC",
  "Jaipur Nagar Nigam",
];

const features = [
  {
    icon: BoltIcon,
    title: "Report in 30 seconds",
    body: "Snap a photo, drop a pin, pick a category. We auto-detect your ward and route it to the right department.",
  },
  {
    icon: ShieldIcon,
    title: "Verified, not noisy",
    body: "Duplicate reports merge automatically and neighbours confirm the issue, so officials see signal instead of spam.",
  },
  {
    icon: ChartIcon,
    title: "Accountability built in",
    body: "Every report carries a public timeline — raised, acknowledged, assigned, resolved. Nothing quietly disappears.",
  },
];

const steps = [
  {
    n: "01",
    title: "Spot it",
    body: "A pothole, a dead streetlight, an overflowing bin. If it affects the street, it belongs here.",
    img: "https://picsum.photos/seed/streetfixkaro-step-spot/720/540",
  },
  {
    n: "02",
    title: "Report it",
    body: "Photo, location and a line of context. Your ward and department are filled in for you.",
    img: "https://picsum.photos/seed/streetfixkaro-step-report/720/540",
  },
  {
    n: "03",
    title: "Track it",
    body: "Follow the status, rally neighbours behind it, and see proof of the fix when it lands.",
    img: "https://picsum.photos/seed/streetfixkaro-step-track/720/540",
  },
];

const statusStyles = {
  Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  "In progress": "bg-amber-50 text-amber-700 ring-amber-600/20",
  Acknowledged: "bg-blue-50 text-blue-700 ring-blue-600/20",
};

const reports = [
  {
    title: "Severe pothole cluster on Main Road",
    location: "Sector 62, Gautam Buddha Nagar",
    tags: ["Road & Infrastructure", "Traffic Hazard"],
    status: "In progress",
    progress: 65,
    votes: 214,
    img: "https://picsum.photos/seed/streetfixkaro-report-road/900/700",
  },
  {
    title: "Streetlights dark for eleven nights",
    location: "Lajpat Nagar II, New Delhi",
    tags: ["Public Safety", "Electricity"],
    status: "Acknowledged",
    progress: 30,
    votes: 158,
    img: "https://picsum.photos/seed/streetfixkaro-report-light/900/700",
  },
  {
    title: "Garbage pile-up behind the fish market",
    location: "Kothrud, Pune",
    tags: ["Sanitation"],
    status: "Resolved",
    progress: 100,
    votes: 392,
    img: "https://picsum.photos/seed/streetfixkaro-report-waste/900/700",
  },
];

const voices = [
  {
    quote:
      "Our lane had been flooded every monsoon for four years. One report, 96 upvotes, and the drain was cleared in a week.",
    name: "Sameer Sharma",
    role: "Resident · Sector 62",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "I used to chase complaints across three registers. Now I open one dashboard and know exactly what my ward is waiting on.",
    name: "Ritu Nair",
    role: "Ward Officer · Kothrud",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    quote:
      "The public timeline is the part that changed things. Once a delay is visible, it stops being invisible.",
    name: "Arjun Mehta",
    role: "Civic volunteer · New Delhi",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];

const impact = [
  { value: "92%", label: "Reports acknowledged within 48 hours" },
  { value: "3.4x", label: "Faster resolution than paper complaints" },
  { value: "1.2M", label: "Citizen votes cast on local issues" },
  { value: "340", label: "Wards actively monitored" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.055) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage:
              "radial-gradient(ellipse 80% 65% at 50% 0%, #000 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 0%, #000 55%, transparent 100%)",
          }}
        />
        {/* colour glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-blue-600/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
            {/* ---- copy ---- */}
            <div className="streetfixkaro-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-blue-200 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live in 12 cities · 4,812 issues closed
              </span>

              <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Your city,
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  fixed faster.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                StreetFixKaro turns a photo of a broken street into a tracked,
                public, accountable civic request — and keeps every resident
                in the loop until it&apos;s actually fixed.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/report"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Report an issue
                  <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#reports"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  See live reports
                </a>
              </div>

              <div className="mt-9 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[12, 45, 33, 5].map((id) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/80?img=${id}`}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-slate-950 object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-white">24,000+</span>{" "}
                  residents already reporting in their neighbourhood
                </p>
              </div>
            </div>

            {/* ---- image collage ---- */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="streetfixkaro-float-slow overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
                <img
                  src={HERO_IMG}
                  alt="A resident documenting a damaged city street"
                  className="h-[26rem] w-full object-cover sm:h-[30rem]"
                  loading="eager"
                />
              </div>

              {/* floating status card */}
              <div className="streetfixkaro-float absolute -bottom-6 -left-4 w-64 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-black/40 backdrop-blur sm:-left-10">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">Resolved</span>
                </div>
                <p className="mt-2 text-sm font-medium text-white">
                  Drain cleared — Kothrud, Pune
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Closed in 2 days · 392 residents backed it
                </p>
              </div>

              {/* floating thumbnail */}
              <div className="streetfixkaro-float absolute -top-6 -right-3 hidden w-40 overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40 sm:block">
                <img
                  src={HERO_IMG_ALT}
                  alt=""
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
                <div className="bg-slate-900/90 px-3 py-2 backdrop-blur">
                  <p className="text-[11px] font-semibold text-white">
                    New report nearby
                  </p>
                  <p className="text-[11px] text-slate-400">1.2 km away</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---- stat strip ---- */}
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-slate-950/80 px-6 py-7">
                <dt className="text-3xl font-bold tracking-tight text-white">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ========================= PARTNER MARQUEE ===================== */}
      <section className="border-b border-slate-200 bg-white py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Working alongside municipal bodies
        </p>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="streetfixkaro-marquee flex w-max gap-12 group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-slate-400"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FEATURES ========================= */}
      <section id="why-streetfixkaro" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Why StreetFixKaro
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Built for the people who actually live here
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Complaint registers go into drawers. StreetFixKaro puts the same
            information in front of the ward, the department and the street —
            at the same time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* big card */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 lg:col-span-2 lg:row-span-2">
            <img
              src={FEATURE_IMG}
              alt="City street at dusk"
              className="h-full min-h-[22rem] w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                <PinIcon className="h-3.5 w-3.5" />
                Ward-level intelligence
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                A live map of what your neighbourhood needs
              </h3>
              <p className="mt-3 max-w-lg text-slate-300">
                Reports cluster by state, district and sub-district using
                official LGD codes — so a pattern of broken drains stops
                looking like twelve unrelated complaints.
              </p>
            </div>
          </div>

          {/* small cards */}
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-slate-50/60 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-600/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== HOW IT WORKS ====================== */}
      <section id="how-it-works" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              How it works
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Three steps, one accountable trail
            </h2>
          </div>

          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <img
                  src={s.img}
                  alt=""
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-7">
                  <span className="text-sm font-bold tracking-widest text-blue-600">
                    {s.n}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =========================== LIVE REPORTS ====================== */}
      <section id="reports" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Live from the streets
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What residents are raising right now
            </h2>
          </div>
          <Link
            to="/report"
            className="group inline-flex items-center gap-2 self-start rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white sm:self-auto"
          >
            Browse all reports
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <article
              key={r.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={r.img}
                  alt={r.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent" />
                <span
                  className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[r.status]}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {r.status}
                </span>
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                  ▲ {r.votes}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <PinIcon className="h-3.5 w-3.5" />
                  {r.location}
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                  {r.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Progress</span>
                    <span>{r.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        r.progress === 100 ? "bg-emerald-500" : "bg-blue-600"
                      }`}
                      style={{ width: `${r.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================= IMPACT ========================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,.45) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,.35) 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Civic reporting, measured like it matters
          </h2>
          <dl className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {impact.map((s) => (
              <div key={s.label}>
                <dt className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-blue-100">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================= VOICES ========================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Voices
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Residents and officials, on the same page
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-5xl leading-none text-blue-600/25">
                &ldquo;
              </span>
              <blockquote className="-mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
                {v.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <img
                  src={v.avatar}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {v.name}
                  </p>
                  <p className="text-xs text-slate-500">{v.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============================ FINAL CTA ======================== */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-blue-200 backdrop-blur">
            <UsersIcon className="h-4 w-4" />
            Free for every resident
          </span>
          <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The street outside your door is worth five minutes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Join StreetFixKaro, report what&apos;s broken, and follow it all the way
            to fixed.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Create a free account
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              I already have one
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
