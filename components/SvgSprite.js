export default function SvgSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--primary)" }} />
          <stop offset="1" style={{ stopColor: "var(--accent)" }} />
        </linearGradient>
      </defs>
      <symbol id="i-logo" viewBox="0 0 40 40">
        <rect width="40" height="40" rx="11" fill="url(#lg)" />
        <path
          d="M7 20s5-8 13-8 13 8 13 8-5 8-13 8S7 20 7 20z"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="4.2" fill="#fff" />
      </symbol>
      <symbol id="i-chev" viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </symbol>
      <symbol id="i-code" viewBox="0 0 24 24">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </symbol>
      <symbol id="i-mobile" viewBox="0 0 24 24">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </symbol>
      <symbol id="i-ai" viewBox="0 0 24 24">
        <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
        <path d="M19 16v4M17 18h4" />
      </symbol>
      <symbol id="i-cloud" viewBox="0 0 24 24">
        <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z" />
      </symbol>
      <symbol id="i-db" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M20 5v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5M20 12c0 1.7-3.6 3-8 3s-8-1.3-8-3" />
      </symbol>
      <symbol id="i-pen" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.6 7.6" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="M20 6 9 17l-5-5" />
      </symbol>
      <symbol id="i-users" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </symbol>
      <symbol id="i-shield" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </symbol>
      <symbol id="i-chat" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </symbol>
      <symbol id="i-card" viewBox="0 0 24 24">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </symbol>
      <symbol id="i-heart" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </symbol>
      <symbol id="i-cart" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </symbol>
      <symbol id="i-home" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" />
      </symbol>
      <symbol id="i-truck" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </symbol>
      <symbol id="i-box" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7zM3.3 7l8.7 5 8.7-5M12 22V12" />
      </symbol>
      <symbol id="i-star" viewBox="0 0 24 24">
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </symbol>
      <symbol id="i-phone" viewBox="0 0 24 24">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </symbol>
      <symbol id="i-up" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </symbol>
      <symbol id="i-in" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </symbol>
      <symbol id="i-gh" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22" />
      </symbol>
      <symbol id="i-x" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.1 1.5 4.5 4.5 0 0 0-7.9 3v1A10.7 10.7 0 0 1 3 4s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.1-.8A7.7 7.7 0 0 0 23 3z" />
      </symbol>
      <symbol id="i-ig" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4zM17.5 6.5h.01" />
      </symbol>
      <symbol id="i-factory" viewBox="0 0 24 24">
        <path d="M2 21V10l5 4v-4l5 4V7l5 4v10z" />
        <path d="M2 21h20M17 7V4h3v3" />
      </symbol>
      <symbol id="i-plane" viewBox="0 0 24 24">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4z" />
      </symbol>
      <symbol id="i-play" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </symbol>
      <symbol id="i-close" viewBox="0 0 24 24">
        <path d="M18 6 6 18M6 6l12 12" />
      </symbol>
      <symbol id="i-speed" viewBox="0 0 24 24">
        <path d="M12 14l4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </symbol>
      <symbol id="i-lock" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </symbol>
      <symbol id="i-headset" viewBox="0 0 24 24">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </symbol>
      <symbol id="i-badge" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </symbol>
      <symbol id="i-web" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </symbol>
      <symbol id="i-layers" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </symbol>
      <symbol id="i-zap" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </symbol>
      <symbol id="i-target" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </symbol>
      <symbol id="i-chart" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </symbol>
      <symbol id="i-refresh" viewBox="0 0 24 24">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </symbol>
      <symbol id="i-briefcase" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </symbol>
      <symbol id="i-cpu" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </symbol>
    </svg>
  );
}
