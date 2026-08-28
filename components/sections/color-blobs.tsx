export function ColorBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="blob blob-coral absolute -left-20 top-10 h-72 w-72 rounded-full opacity-60" />
      <div className="blob blob-sky absolute right-0 top-1/4 h-80 w-80 rounded-full opacity-50" />
      <div className="blob blob-violet absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-40" />
      <div className="blob blob-mint absolute -right-10 bottom-20 h-56 w-56 rounded-full opacity-45" />
    </div>
  );
}
