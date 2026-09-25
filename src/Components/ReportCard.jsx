import { Link } from "react-router-dom";

const statusStyles = {
  pending: "bg-amber-400/10 text-amber-300 ring-amber-400/30",
  "in progress": "bg-sky-400/10 text-sky-300 ring-sky-400/30",
  resolved: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
  rejected: "bg-rose-400/10 text-rose-300 ring-rose-400/30",
};

export const ReportCard = ({ report }) => {
  const { title, status, state, pincode, district, description, photoUrl } = report;

  const badge =
    statusStyles[String(status ?? "").toLowerCase()] ??
    "bg-slate-400/10 text-slate-300 ring-slate-400/30";

  return (
      < Link to={`/single-report/${report._id}`}>
    <article className="group relative flex h-full flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-black/50">
      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-sky-500/0 via-sky-500/0 to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div  className="relative flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-slate-100 line-clamp-2">
          {title}
        </h3>
        {status && (
          <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ring-inset ${badge}`}
          >
            {status}
          </span>
        )}
      </div>

      <p className="relative text-sm leading-relaxed text-slate-400 line-clamp-3">
        {description}
      </p>

      {photoUrl!==null &&
      
      <img 
        src={photoUrl}
        alt={title}
        loading="lazy"
        />
      }

      <div className="relative mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-slate-800 pt-4 text-xs text-slate-500">
        <svg
          className="h-4 w-4 text-slate-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
          >
          <path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <span className="text-slate-300">{district}</span>
        {state && <span aria-hidden="true">•</span>}
        <span>{state}</span>
        {pincode && (
          <span className="ml-auto rounded-md bg-slate-800/80 px-2 py-0.5 font-mono tracking-wide text-slate-400">
            {pincode}
          </span>
        )}
      </div>
    </article>
        </Link>
  );
};
