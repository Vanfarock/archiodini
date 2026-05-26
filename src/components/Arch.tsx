interface ArchProps {
  className?: string;
  fill?: string;
}

export function Arch({ className, fill = "currentColor" }: ArchProps) {
  return (
    <svg
      viewBox="0 0 200 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 100 C0 44.77 44.77 0 100 0 C155.23 0 200 44.77 200 100 L200 280 L0 280 Z"
        fill={fill}
      />
    </svg>
  );
}
