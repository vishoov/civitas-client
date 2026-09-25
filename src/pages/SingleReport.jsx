import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const statusStyles = {
  pending: "bg-amber-400/10 text-amber-300 ring-amber-400/30",
  "in progress": "bg-sky-400/10 text-sky-300 ring-sky-400/30",
  resolved: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
  rejected: "bg-rose-400/10 text-rose-300 ring-rose-400/30",
};

const MetaItem = ({ label, value }) => (
  <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
      {label}
    </p>
    <p className="mt-1 truncate text-sm text-slate-200">{value ?? "—"}</p>
  </div>
);

const SingleReport = () => {
  const { id } = useParams();
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function SoloReportFetch() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/report-api/reports/${id}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message ?? data?.error ?? `Request failed with status ${response.status}`
          );
        }

        if (cancelled) return;
        setReportData(data.report ?? null);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to fetch report", err);
        setError(err.message);
        setReportData(null);
      }
    }

    SoloReportFetch();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const badge =
    statusStyles[String(reportData?.status ?? "").toLowerCase()] ??
    "bg-slate-400/10 text-slate-300 ring-slate-400/30";

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          to="/reports"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to reports
        </Link>

        {error && (
          <div className="rounded-2xl border border-rose-900/60 bg-rose-500/5 p-6 text-sm text-rose-400">
            {error}
          </div>
        )}

        {!error && !reportData && (
          <div className="animate-pulse space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30">
            <div className="h-6 w-2/3 rounded bg-slate-800" />
            <div className="h-4 w-full rounded bg-slate-800/70" />
            <div className="h-4 w-5/6 rounded bg-slate-800/70" />
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              <div className="h-16 rounded-xl bg-slate-800/50" />
              <div className="h-16 rounded-xl bg-slate-800/50" />
              <div className="h-16 rounded-xl bg-slate-800/50" />
            </div>
          </div>
        )}

        {reportData && (
          <article className="relative flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30 backdrop-blur sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
                {reportData.title}
              </h1>
              {reportData.status && (
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ring-inset ${badge}`}
                >
                  {reportData.status}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
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
              <span className="text-slate-300">{reportData.district}</span>
              {reportData.state && <span aria-hidden="true">•</span>}
              <span>{reportData.state}</span>
            </div>

            {reportData.photoUrl && (
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <img
                  src={reportData.photoUrl}
                  alt={reportData.title ?? "Report photo"}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="border-t border-slate-800 pt-6">
              <h2 className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                Description
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {reportData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <MetaItem label="State" value={reportData.state} />
              <MetaItem label="District" value={reportData.district} />
              <MetaItem label="Pincode" value={reportData.pincode} />
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default SingleReport;
