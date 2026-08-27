export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="#EE5B2B"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M42,50 L84,50 A42,42 0 1 1 42,8 Z" />
      <circle cx="76" cy="27" r="15" />
      <rect x="61" y="46" width="30" height="46" rx="15" />
    </svg>
  );
}
