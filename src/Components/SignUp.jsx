import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import AuthLayout, {
  Field,
  FormStatus,
  SubmitButton,
  focusRing,
} from "./AuthLayout";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PANEL_POINTS = [
  "Report a pothole, a dead streetlight or an overflowing bin in 30 seconds.",
  "Your ward and the right department are filled in for you automatically.",
  "Every report gets a public timeline — raised, acknowledged, assigned, resolved.",
];


const PANEL_QUOTE = {
  quote:
    "The public timeline is the part that changed things. Once a delay is visible, it stops being invisible.",
  name: "Arjun Mehta",
  role: "Civic volunteer · New Delhi",
  avatar: "https://i.pravatar.cc/120?img=33",
};

/* mirrors the strength meter below — keep the two in step */
const scorePassword = (password) => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;
  return score;
};

const STRENGTH = [
  { label: "Too short", bar: "w-1/4 bg-red-500", text: "text-red-600" },
  { label: "Weak", bar: "w-2/4 bg-amber-500", text: "text-amber-600" },
  { label: "Good", bar: "w-3/4 bg-blue-600", text: "text-blue-600" },
  { label: "Strong", bar: "w-full bg-emerald-500", text: "text-emerald-600" },
];

const validate = ({ name, age, email, password, confirmPassword }) => {
  const errors = {};

  if (!name.trim()) errors.name = "Tell us what to call you.";
  else if (name.trim().length < 2) errors.name = "That name looks too short.";

  if (!age) errors.age = "Enter your age.";
  else if (Number(age) < 13)
    errors.age = "You need to be at least 13 to use StreetFixKaro.";
  else if (Number(age) > 120) errors.age = "Please enter a valid age.";

  if (!email.trim()) errors.email = "We'll send report updates here.";
  else if (!EMAIL_RE.test(email.trim()))
    errors.email = "That doesn't look like a valid email address.";

  if (!password) errors.password = "Choose a password.";
  else if (password.length < 8)
    errors.password = "Use at least 8 characters.";

  if (!confirmPassword) errors.confirmPassword = "Re-enter your password.";
  else if (confirmPassword !== password)
    errors.confirmPassword = "Passwords don't match.";

  return errors;
};

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: "", error: "" });
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();
  const timer = useRef(null);

  let { register }= useAuth();

  /* don't navigate or set state after the page has gone away */
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
    /* clear this field's error as soon as the user starts fixing it */
    setErrors((prev) => (prev[id] ? { ...prev, [id]: "" } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate(user);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ success: "", error: "Please fix the fields highlighted below." });
      return;
    }

    setStatus({ success: "", error: "" });
    setPending(true);

    let response= await register(user);

    setPending(false)

    if(!response.user){
      setStatus(
    {
      success: "",
      error: `${response.message}`
    })
    return;
    }
      setStatus({
        success: "Account created. Welcome to StreetFixKaro!",
        error: "",
      });
      navigate("/")



    /* no auth backend yet — hold briefly so the result is readable */
    // timer.current = setTimeout(() => {
    //   setPending(false);
    //   timer.current = setTimeout(() => navigate("/"), 700);
    // }, 600);
  };

  const strength = user.password ? STRENGTH[scorePassword(user.password) - 1] : null;

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your account"
      subtitle="Free for every resident. Report what's broken and follow it all the way to fixed."
      panelHeading="Join 24,000 residents fixing their city."
      panelPoints={PANEL_POINTS}
      panelQuote={PANEL_QUOTE}
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/login"
            className={`rounded-sm font-semibold text-blue-600 transition hover:text-blue-700 hover:underline ${focusRing}`}
          >
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
        <FormStatus success={status.success} error={status.error} />

        <div className="grid gap-5 sm:grid-cols-[1fr_7rem]">
          <Field
            id="name"
            label="Full name"
            value={user.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Sameer Sharma"
            autoComplete="name"
          />
          <Field
            id="age"
            label="Age"
            type="number"
            value={user.age}
            onChange={handleChange}
            error={errors.age}
            placeholder="28"
            inputMode="numeric"
            min="13"
            max="120"
          />
        </div>

        <Field
          id="email"
          label="Email"
          type="email"
          value={user.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <div>
          <Field
            id="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
            error={errors.password}
            hint="At least 8 characters."
            placeholder="••••••••"
            autoComplete="new-password"
          />

          {strength && !errors.password && (
            <div className="mt-2.5 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${strength.bar}`}
                />
              </div>
              <span className={`text-xs font-semibold ${strength.text}`}>
                {strength.label}
              </span>
            </div>
          )}
        </div>

        <Field
          id="confirmPassword"
          label="Confirm password"
          type="password"
          value={user.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <SubmitButton pending={pending} pendingLabel="Creating account…">
          Create account
        </SubmitButton>

        <p className="text-center text-xs leading-relaxed text-slate-500">
          By creating an account you agree to keep reports factual and
          respectful of your neighbours.
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
