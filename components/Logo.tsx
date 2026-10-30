export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 shrink-0">
        <rect width="32" height="32" rx="8" fill={light ? "#e6f3f4" : "#08343c"} />
        <path
          d="M6 18c3.2-4.2 6.2-4.2 9.2 0s6 4.2 10.8 0"
          fill="none"
          stroke={light ? "#08343c" : "#7ddee4"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 13c3.2-4.2 6.2-4.2 9.2 0s6 4.2 10.8 0"
          fill="none"
          stroke={light ? "#0f766e" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className={light ? "text-white" : "text-slate-900"}>Tank Mate Match</span>
    </span>
  );
}
