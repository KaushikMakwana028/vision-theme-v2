"use client";

import { useState } from "react";

export default function CopyCodeButton({ code = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <button
      type="button"
      className="copy"
      onClick={handleCopy}
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}
