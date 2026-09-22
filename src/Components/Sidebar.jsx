const iconBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

const ProfileIcon = (props) => (
  <svg {...iconBase} {...props}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </svg>
);

const ReportsIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg {...iconBase} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
  </svg>
);

const TABS = [
  { id: "profile", label: "Profile", Icon: ProfileIcon },
  { id: "reports", label: "Reports", Icon: ReportsIcon },
  { id: "settings", label: "Settings", Icon: SettingsIcon },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-full h-full border-b border-white/10 bg-[#000000] min-h-150 lg:h-full lg:w-64  lg:border-b-0 lg:border-r">
      <nav aria-label="Dashboard" className="px-4 py-5 lg:px-5 lg:py-6">
        <p className="mb-3 hidden px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 lg:block">
          Dashboard
        </p>

        <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
          {TABS.map(({ id, label, Icon }) => {
            const isActive = activeTab === id;
            return (
              <li key={id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setActiveTab(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${focusRing} ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-y-2 left-0 hidden w-0.5 rounded-full bg-blue-400 lg:block" />
                  )}
                  <Icon
                    className={`h-5 w-5 transition ${
                      isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
