export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 18 18"
    >
      <g strokeWidth="2" fill="none" stroke="currentColor">
        <polyline
          points="2.75 9.25 6.75 14.25 15.25 3.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></polyline>
      </g>
    </svg>
  );
}
