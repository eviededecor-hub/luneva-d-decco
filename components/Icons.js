// Ikon garis tipis untuk bagian Services
const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.1, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export function Star({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2 C12.6 8.5 15.5 11.4 22 12 C15.5 12.6 12.6 15.5 12 22 C11.4 15.5 8.5 12.6 2 12 C8.5 11.4 11.4 8.5 12 2Z" fill="currentColor" />
    </svg>
  );
}

export const icons = {
  stage: (
    <svg {...base}><path d="M3 20h18M5 20V9a7 7 0 0 1 14 0v11" /><path d="M9 20v-6h6v6" /></svg>
  ),
  ring: (
    <svg {...base}><circle cx="12" cy="14" r="6" /><path d="M9.5 4h5l1.5 2.5-4 3-4-3z" /></svg>
  ),
  flower: (
    <svg {...base}><circle cx="12" cy="9" r="2" /><path d="M12 7c0-3 3-4 3-4s1 3-1 5M12 7c0-3-3-4-3-4s-1 3 1 5M14 9c3 0 4 3 4 3s-3 1-5-1M10 9c-3 0-4 3-4 3s3 1 5-1" /><path d="M12 11v10M12 17c2-2 4-2 4-2M12 19c-2-2-4-2-4-2" /></svg>
  ),
  table: (
    <svg {...base}><path d="M3 11h18M6 11v9M18 11v9" /><path d="M9 11V7M15 11V7M9 5.5v-1M15 5.5v-1" /></svg>
  ),
};
