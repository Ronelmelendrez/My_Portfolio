/**
 * Full-screen branded loader shown while a lazy route chunk streams in.
 * Matches the navbar brand mark and the site's blue→cyan gradient.
 */
export default function RouteLoader() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-5"
      role="status"
      aria-label="Loading page"
    >
      <span className="font-mono text-lg font-semibold tracking-tight">
        <span className="text-blue">&lt;</span>Ronel<span className="text-blue">/&gt;</span>
      </span>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-[var(--border-dark)]">
        <div
          className="route-bar h-full w-1/2 rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--blue), var(--cyan))' }}
        />
      </div>

      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
        loading
      </span>
    </div>
  );
}
