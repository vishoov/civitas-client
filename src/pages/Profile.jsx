import { useState } from "react";

const Profile = () => {

    let [user] = useState(JSON.parse(localStorage.getItem("user")))

    if (!user) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="rounded-xl border border-white/10 bg-white/5 px-8 py-6 text-center backdrop-blur-xl">
                    <p className="text-lg font-bold text-white">No Data Found</p>
                    <p className="mt-1 text-sm text-slate-400">Try signing in again to load your profile.</p>
                </div>
            </div>
        )
    }

    const initials = (user.username || "?").trim().charAt(0).toUpperCase();

    const fields = [
        { label: "Name", value: user.username },
        { label: "Email", value: user.email },
        { label: "Role", value: user.role },
    ];

    return (
        <div className="relative -mx-6 -my-8  px-6 py-12">

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
                className="pointer-events-none absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-600/25 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-3xl"
            />

            <div className="relative mx-auto w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-white">Profile</h1>
                <p className="text-sm text-slate-400">Your account details</p>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-950/40 backdrop-blur-xl">

                    {/* avatar + name */}
                    <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-bold text-white shadow-lg shadow-blue-600/30">
                            {initials}
                        </div>
                        <div>
                            <p className="text-lg font-bold text-white">{user.username}</p>
                            <span className="mt-1 inline-block rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-medium capitalize text-slate-200">
                                {user.role}
                            </span>
                        </div>
                    </div>

                    {/* fields */}
                    <div className="mt-5 space-y-4">
                        {fields.map((field) => (
                            <div key={field.label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs uppercase tracking-wide text-slate-400">{field.label}</p>
                                <p className="text-sm font-medium text-white sm:text-right">{field.value}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;
