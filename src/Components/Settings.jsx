import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const Settings = () => {
    const [pending, setPending] = useState(null); // "logout" | "deactivate" | null
    const [error, setError] = useState("");
    const [confirming, setConfirming] = useState(false);
    const navigate = useNavigate();
    const { userData, clearSession } = useAuth();

    const request = async (path, method) => {
        const response = await fetch(`http://localhost:8000/api/users/${path}`, {
            method,
            credentials: "include",
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(data.message || `Request failed (${response.status})`);
        }
        return data;
    };

    const handleLogout = async () => {
        setError("");
        setPending("logout");
        try {
            await request("logout", "POST");
            clearSession();
            navigate("/login", { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setPending(null);
        }
    };

    const handleDeactivate = async () => {
        setError("");
        setPending("deactivate");
        try {
            await request("deactivate", "PATCH");
            clearSession();
            navigate("/login", { replace: true });
        } catch (err) {
            setError(err.message);
            setConfirming(false);
        } finally {
            setPending(null);
        }
    };

    const busy = pending !== null;

    return (
        <div className="mx-auto w-full max-w-3xl">
            <header className="border-b border-white/10 pb-6">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Settings</h1>
                <p className="mt-1 text-sm text-slate-400">
                    Manage your account{userData?.email ? ` · ${userData.email}` : ""}
                </p>
            </header>

            {error && (
                <div
                    role="alert"
                    className="mt-6 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
                >
                    {error}
                </div>
            )}

            <section className="mt-8">
                <h2 className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Account
                </h2>

                <div className="mt-3 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-white">Sign Out</h3>
                            <p className="mt-1 text-sm text-slate-400">
                                Sign out of your account on this device.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={handleLogout}
                            disabled={busy}
                            className={`shrink-0 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 ${focusRing}`}
                        >
                            {pending === "logout" ? "Signing out..." : "Sign Out"}
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-white">Deactivate Account</h3>
                            <p className="mt-1 text-sm text-slate-400">
                                Deactivate your account and prevent access until it is reactivated.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setConfirming(true)}
                            disabled={busy}
                            className={`shrink-0 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-200 transition hover:bg-rose-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${focusRing}`}
                        >
                            Deactivate Account
                        </button>
                    </div>
                </div>
            </section>

            {confirming && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="deactivate-title"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                    onClick={() => !busy && setConfirming(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/60"
                    >
                        <h3 id="deactivate-title" className="text-lg font-semibold text-white">
                            Deactivate your account?
                        </h3>
                        <p className="mt-2 text-sm text-slate-400">
                            You will be signed out immediately and will not be able to sign in
                            again until the account is reactivated.
                        </p>
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setConfirming(false)}
                                disabled={busy}
                                className={`rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 disabled:opacity-50 ${focusRing}`}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleDeactivate}
                                disabled={busy}
                                className={`rounded-xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400 disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
                            >
                                {pending === "deactivate" ? "Deactivating..." : "Yes, deactivate"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
