export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Page Not Found
        </h1>
        <p className="text-slate-400 mb-6">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="px-5 py-2.5 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-400 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
