import { useState } from "react";
import { Link } from "react-router-dom";

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

export const PinIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ArrowIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const AlertIcon = (props) => (
  <svg {...iconBase} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5M12 16.2h.01" />
  </svg>
);

const EyeIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M10.6 6.7A8.7 8.7 0 0 1 12 6.6c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-3 3.8M6.5 8.2A16 16 0 0 0 2.5 13s3.5 6.5 9.5 6.5a8.9 8.9 0 0 0 3.9-.9" />
    <path d="M9.9 10.4a3 3 0 0 0 4.2 4.2M3 3l18 18" />
  </svg>
);

const ChevronIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

/* ------------------------------------------------------------------ */
/*  Field — label + input + inline error, wired for screen readers      */
/* ------------------------------------------------------------------ */

/* shared input/select/textarea chrome, so every control reads the same */
const controlClasses = (error, extra = "") =>
  `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:outline-none focus:ring-2 ${extra} ${
    error
      ? "border-red-300 focus:border-red-400 focus:ring-red-500/30"
      : "border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-blue-600/25"
  }`;

const FieldShell = ({ id, label, error, hint, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-slate-700">
      {label}
    </label>

    {children}

    {error ? (
      <p
        id={`${id}-error`}
        className="flex items-center gap-1.5 text-sm text-red-600"
      >
        <AlertIcon className="h-4 w-4 shrink-0" />
        {error}
      </p>
    ) : (
      hint && (
        <p id={`${id}-hint`} className="text-sm text-slate-500">
          {hint}
        </p>
      )
    )}
  </div>
);

const describedByFor = (id, error, hint) =>
  error ? `${id}-error` : hint ? `${id}-hint` : undefined;

export const Field = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  hint,
  autoComplete,
  placeholder,
  inputMode,
  min,
  max,
}) => {
  const [revealed, setRevealed] = useState(false);
  const isPassword = type === "password";

  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      <div className="relative">
        <input
          id={id}
          type={isPassword && revealed ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          min={min}
          max={max}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedByFor(id, error, hint)}
          className={controlClasses(error, isPassword ? "pr-12" : "")}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setRevealed((v) => !v)}
            aria-label={revealed ? "Hide password" : "Show password"}
            className={`absolute right-1.5 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 ${focusRing}`}
          >
            {revealed ? (
              <EyeOffIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </FieldShell>
  );
};

/* ------------------------------------------------------------------ */
/*  Textarea — Field's sibling for longer answers                       */
/* ------------------------------------------------------------------ */

export const Textarea = ({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  placeholder,
  rows = 5,
  maxLength,
}) => (
  <FieldShell id={id} label={label} error={error} hint={hint}>
    <textarea
      id={id}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={describedByFor(id, error, hint)}
      className={controlClasses(error, "resize-y leading-relaxed")}
    />
  </FieldShell>
);

/* ------------------------------------------------------------------ */
/*  Select — same chrome as Field, with a custom chevron                */
/* ------------------------------------------------------------------ */

export const Select = ({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  placeholder = "Select an option",
  options = [],
}) => (
  <FieldShell id={id} label={label} error={error} hint={hint}>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedByFor(id, error, hint)}
        className={controlClasses(
          error,
          `appearance-none pr-11 ${value ? "" : "text-slate-400"}`
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-slate-900">
            {option}
          </option>
        ))}
      </select>
      <ChevronIcon
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
      />
    </div>
  </FieldShell>
);

/* ------------------------------------------------------------------ */
/*  SubmitButton — carries its own pending state                        */
/* ------------------------------------------------------------------ */

export const SubmitButton = ({ pending, pendingLabel, children }) => (
  <button
    type="submit"
    disabled={pending}
    className={`group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none ${focusRing}`}
  >
    {pending ? (
      <>
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
        />
        {pendingLabel}
      </>
    ) : (
      <>
        {children}
        <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
      </>
    )}
  </button>
);

/* ------------------------------------------------------------------ */
/*  FormStatus — success / error banner above the fields                */
/* ------------------------------------------------------------------ */

export const FormStatus = ({ success, error }) => {
  if (!success && !error) return null;

  return (
    <p
      role="status"
      aria-live="polite"
      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ring-1 ring-inset ${
        success
          ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
          : "bg-red-50 text-red-700 ring-red-600/20"
      }`}
    >
      {success ? (
        <CheckIcon className="h-4 w-4 shrink-0" />
      ) : (
        <AlertIcon className="h-4 w-4 shrink-0" />
      )}
      {success || error}
    </p>
  );
};

/* ------------------------------------------------------------------ */
/*  AuthLayout — dark brand panel beside the form column                */
/* ------------------------------------------------------------------ */

const AuthLayout = ({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
  panelHeading,
  panelPoints,
  panelQuote,
}) => (
  <main className="grid min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
    {/* ---------------------- brand panel ---------------------- */}
    <section className="relative hidden overflow-hidden bg-slate-950 text-white lg:flex lg:flex-col lg:justify-between">
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-blue-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl"
      />

      <div className="streetfixkaro-rise relative flex flex-1 flex-col justify-center px-12 py-16 xl:px-16">
        <h2 className="max-w-md text-4xl font-bold leading-[1.1] tracking-tight xl:text-5xl">
          {panelHeading}
        </h2>

        <ul className="mt-10 space-y-5">
          {panelPoints.map((point) => (
            <li key={point} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className="max-w-sm text-[15px] leading-relaxed text-slate-300">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <figure className="mt-12 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <blockquote className="text-[15px] leading-relaxed text-slate-200">
            &ldquo;{panelQuote.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
            <img
              src={panelQuote.avatar}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                {panelQuote.name}
              </p>
              <p className="text-xs text-slate-400">{panelQuote.role}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    {/* ---------------------- form column ---------------------- */}
    <section className="flex items-center justify-center bg-white px-6 py-14 sm:px-10 lg:py-20">
      <div className="streetfixkaro-rise w-full max-w-md">
        {/* brand mark — carries the identity on mobile, where the panel is hidden */}
        <Link
          to="/"
          className={`group inline-flex items-center gap-2.5 rounded-lg lg:hidden ${focusRing}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-600/25 transition group-hover:scale-105">
            <PinIcon className="h-5 w-5" />
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            StreetFixKaro
          </span>
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 lg:mt-0">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {subtitle}
        </p>

        {children}

        <p className="mt-8 text-center text-sm text-slate-600">{footer}</p>
      </div>
    </section>
  </main>
);

export default AuthLayout;
