function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className={className}
    >
      <g fill="currentColor" stroke="currentColor">
        <polyline
          points="12.5 6.25 9 2.75 5.5 6.25"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></polyline>
        <polyline
          points="12.5 11.75 9 15.25 5.5 11.75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></polyline>
      </g>
    </svg>
  );
}
