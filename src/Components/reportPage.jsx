import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, {
  Field,
  FormStatus,
  Select,
  SubmitButton,
  Textarea,
  focusRing,
} from "./AuthLayout";
import { ActiveStates } from "./indianStates";

const PINCODE_RE = /^[1-9][0-9]{5}$/;
const DESCRIPTION_LIMIT = 600;

const PANEL_POINTS = [
  "One clear report reaches the ward office that actually owns the problem.",
  "Neighbours can upvote yours, so the urgent issues rise to the top.",
  "Track it from pending to resolved — no follow-up calls needed.",
];

const PANEL_QUOTE = {
  quote:
    "I filed the pothole report on a Tuesday with the exact pincode. The patch work started the same weekend.",
  name: "Ritika Nair",
  role: "Resident · Ward 14",
  avatar: "https://i.pravatar.cc/120?img=32",
};

const EMPTY_REPORT = {
  title: "",
  description: "",
  pincode: "",
  district: "",
  state: "",
};

const validate = ({ title, description, pincode, district, state }) => {
  const errors = {};

  if (!title.trim()) errors.title = "Give the issue a short title.";
  else if (title.trim().length < 6)
    errors.title = "Add a few more words so it's searchable.";

  if (!description.trim())
    errors.description = "Describe the issue so the ward can act on it.";
  else if (description.trim().length < 20)
    errors.description =
      "A little more detail goes a long way — 20 characters minimum.";

  if (!pincode.trim()) errors.pincode = "Enter the pincode of the affected area.";
  else if (!PINCODE_RE.test(pincode.trim()))
    errors.pincode = "That doesn't look like a valid 6-digit pincode.";

  if (!district.trim()) errors.district = "Enter the district.";

  if (!state) errors.state = "Pick the state this falls under.";

  return errors;
};

const ReportPage = () => {
  const [reportData, setReportData] = useState(EMPTY_REPORT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: "", error: "" });
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();
  const timer = useRef(null);

  /* don't navigate or set state after the page has gone away */
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setReportData((prev) => ({ ...prev, [id]: value }));
    /* clear this field's error as soon as the user starts fixing it */
    setErrors((prev) => (prev[id] ? { ...prev, [id]: "" } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate(reportData);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ success: "", error: "Please fix the fields highlighted below." });
      return;
    }

    setStatus({ success: "", error: "" });
    setPending(true);

    const localtoken = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:8000/api/report-api/reports",
        {
          method: "POST",
          body: JSON.stringify(reportData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localtoken}`,
          },
          credentials: "include",
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message ??
            data?.error ??
            `Request failed with status ${response.status}`
        );
      }

      setPending(false);
      setReportData(EMPTY_REPORT);
      setStatus({ success: "Report filed. Thanks for speaking up!", error: "" });

      // timer.current = setTimeout(() => navigate("/reports"), 900);
    } catch (err) {
      setPending(false);
      setStatus({
        success: "",
        error: err.message || "Couldn't file the report. Please try again.",
      });
    }
  };

  const remaining = DESCRIPTION_LIMIT - reportData.description.length;

  return (
    <AuthLayout
      eyebrow="Raise an issue"
      title="Report what's broken"
      subtitle="Tell us what's wrong and where. The more precise the location, the faster it reaches the right desk."
      panelHeading="Your street, on the record."
      panelPoints={PANEL_POINTS}
      panelQuote={PANEL_QUOTE}
      footer={
        <>
          Want to see what&apos;s already been raised?{" "}
          <Link
            to="/reports"
            className={`rounded-sm font-semibold text-blue-600 transition hover:text-blue-700 hover:underline ${focusRing}`}
          >
            Browse all reports
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
        <FormStatus success={status.success} error={status.error} />

        <Field
          id="title"
          label="Title"
          value={reportData.title}
          onChange={handleChange}
          error={errors.title}
          hint="e.g. Streetlight out on MG Road for two weeks"
          placeholder="What's the issue?"
        />

        <Textarea
          id="description"
          label="Description"
          value={reportData.description}
          onChange={handleChange}
          error={errors.description}
          hint={`What's happening, since when, and who it affects — ${remaining} characters left.`}
          placeholder="Describe the issue and its impact on the neighbourhood."
          maxLength={DESCRIPTION_LIMIT}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="pincode"
            label="Pincode"
            value={reportData.pincode}
            onChange={handleChange}
            error={errors.pincode}
            placeholder="110001"
            inputMode="numeric"
            autoComplete="postal-code"
          />

          <Field
            id="district"
            label="District"
            value={reportData.district}
            onChange={handleChange}
            error={errors.district}
            placeholder="New Delhi"
            autoComplete="address-level2"
          />
        </div>

        <Select
          id="state"
          label="State"
          value={reportData.state}
          onChange={handleChange}
          error={errors.state}
          placeholder="Select your state"
          options={ActiveStates}
        />

        <SubmitButton pending={pending} pendingLabel="Filing report…">
          Report issue
        </SubmitButton>
      </form>
    </AuthLayout>
  );
};

export default ReportPage;
