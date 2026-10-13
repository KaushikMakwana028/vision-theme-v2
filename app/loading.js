export default function Loading() {
  return (
    <div
      className="page-loader-overlay page-loader-redirect"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="page-loader-backdrop-mesh" aria-hidden="true" />

      <div className="page-loader-card">
        <div className="page-loader-emblem" aria-hidden="true">
          <span className="page-loader-halo" />

          <svg
            className="page-loader-orbit-outer"
            viewBox="0 0 120 120"
            fill="none"
          >
            <defs>
              <linearGradient
                id="routeLoadingOrbitGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="55%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="var(--accent)" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="rgba(79, 70, 229, 0.1)"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="url(#routeLoadingOrbitGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="110 220"
            />
            <circle cx="60" cy="8" r="4" fill="var(--accent)" />
          </svg>

          <svg
            className="page-loader-orbit-inner"
            viewBox="0 0 96 96"
            fill="none"
          >
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="rgba(6, 182, 212, 0.28)"
              strokeWidth="1.75"
              strokeDasharray="6 8"
            />
          </svg>

          <div className="page-loader-logo-core">
            <svg width="40" height="40" aria-hidden="true">
              <use href="#i-logo" />
            </svg>
          </div>
        </div>

        <div className="page-loader-brand">
          Vision <span>Technolabs</span>
        </div>

        <div className="page-loader-status-pill">
          <span className="page-loader-status-dot" aria-hidden="true" />
          <span className="page-loader-status-text">Redirecting Page</span>
          <span className="page-loader-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className="page-loader-track" aria-hidden="true">
          <div className="page-loader-fill" style={{ width: "68%" }} />
        </div>
      </div>
    </div>
  );
}
