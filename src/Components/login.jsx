import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, {
  Field,
  FormStatus,
  SubmitButton,
  focusRing,
} from "./AuthLayout";
import { useAuth } from "../Auth/AuthContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PANEL_POINTS = [
  "Pick up every report you've raised, exactly where you left it.",
  "Get notified the moment your ward acknowledges or resolves an issue.",
  "Back your neighbours' reports so the urgent ones rise to the top.",
];

const PANEL_QUOTE = {
  quote:
    "Our lane had been flooded every monsoon for four years. One report, 96 upvotes, and the drain was cleared in a week.",
  name: "Sameer Sharma",
  role: "Resident · Sector 62",
  avatar: "https://i.pravatar.cc/120?img=12",
};

const validate = ({ email, password }) => {
  const errors = {};

  if (!email.trim()) errors.email = "Enter the email you signed up with.";
  else if (!EMAIL_RE.test(email.trim()))
    errors.email = "That doesn't look like a valid email address.";

  if (!password) errors.password = "Enter your password.";
  
  return errors;
};

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: "", error: "" });
  const [pending, setPending] = useState(false);
  
  let {login}= useAuth();
  const navigate = useNavigate();
  const timer = useRef(null);

  /* don't navigate or set state after the page has gone away */
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
    /* clear this field's error as soon as the user starts fixing it */
    setErrors((prev) => (prev[id] ? { ...prev, [id]: "" } : prev));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    const found = validate(user);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ success: "", error: "Please fix the fields highlighted below." });
      return;
    }

    setStatus({ success: "", error: "" });
    setPending(true);


    let response= await login(user);

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
    //   setStatus({ success: "Logged in successfully. Taking you home…", error: "" });
    //   timer.current = setTimeout(() => navigate("/"), 700);
    // }, 600);
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Log in to StreetFixKaro"
      subtitle="Track the issues you've raised and see what your neighbourhood is waiting on."
      panelHeading="Your street, still on the record."
      panelPoints={PANEL_POINTS}
      panelQuote={PANEL_QUOTE}
      footer={
        <>
          New to StreetFixKaro?{" "}
          <Link
            to="/signup"
            className={`rounded-sm font-semibold text-blue-600 transition hover:text-blue-700 hover:underline ${focusRing}`}
          >
            Create a free account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
        <FormStatus success={status.success} error={status.error} />

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
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <div className="mt-2 text-right">
            <Link
              to="/signup"
              className={`rounded-sm text-sm font-medium text-slate-500 transition hover:text-blue-600 ${focusRing}`}
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <SubmitButton pending={pending} pendingLabel="Logging in…">
          Log in
        </SubmitButton>
      </form>
    </AuthLayout>
  );
};

export default Login;
