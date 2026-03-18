interface HomeViewProps {
  onStart: (id: string) => void;
}

const FEATURES = [
  { emoji: '🌐', title: 'REST APIs', desc: 'Build professional REST APIs from scratch' },
  { emoji: '💚', title: 'Node.js', desc: 'Understand async Node.js and Express' },
  { emoji: '🔷', title: 'TypeScript', desc: 'Type-safe backend code' },
  { emoji: '🐱', title: 'NestJS', desc: 'Structured, scalable backend framework' },
  { emoji: '🗄️', title: 'Database', desc: 'TypeORM with SQLite and PostgreSQL' },
  { emoji: '🔐', title: 'Auth', desc: 'JWT authentication and authorization' },
  { emoji: '📖', title: 'Swagger', desc: 'Auto-generated API documentation' },
  { emoji: '🚀', title: 'Deployment', desc: 'Ship your API to production' },
];

const DAYS = [
  {
    day: 1,
    title: 'Foundations',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-500/30',
    topics: ['Backend & API Fundamentals', 'Node.js & Express', 'TypeScript Essentials'],
    id: 'day-plan-1',
  },
  {
    day: 2,
    title: 'NestJS Core',
    color: 'from-sky-500 to-blue-600',
    border: 'border-sky-500/30',
    topics: ['NestJS Architecture', 'Controllers & Services', 'DTOs & Validation', 'Exception Handling'],
    id: 'day-plan-2',
  },
  {
    day: 3,
    title: 'Advanced & Production',
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/30',
    topics: ['Database with TypeORM', 'Authentication', 'Swagger Docs', 'Deployment'],
    id: 'day-plan-3',
  },
];

export default function HomeView({ onStart }: HomeViewProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 mb-6"
          style={{ fontFamily: 'var(--font-mono)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          3-Day Backend Development Bootcamp
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}>
          From Frontend to
          <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent"> Full-Stack Developer</span>
        </h1>
        <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          A beginner-friendly training guide to backend development using Node.js, TypeScript, and NestJS.
          Designed for frontend developers ready to level up.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            onClick={() => onStart('day-plan-1')}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/25"
          >
            Start Day 1 →
          </button>
          <button
            onClick={() => onStart('backend-fundamentals')}
            className="px-6 py-2.5 rounded-lg border border-white/10 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all"
          >
            Browse Topics
          </button>
        </div>
      </div>

      {/* 3-Day overview */}
      <div className="mb-12">
        <h2 className="text-base font-bold text-slate-300 mb-5" style={{ fontFamily: 'var(--font-display)' }}>
          📅 3-Day Training Schedule
        </h2>
        <div className="grid gap-4">
          {DAYS.map(d => (
            <div key={d.day}
              className={`bg-[#0d1117] border ${d.border} rounded-xl overflow-hidden hover:border-opacity-60 transition-colors cursor-pointer`}
              onClick={() => onStart(d.id)}
            >
              <div className={`h-1 bg-gradient-to-r ${d.color}`} />
              <div className="p-5 flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center text-white font-bold text-sm`}
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {d.day}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Day {d.day}</span>
                    <span className="text-xs text-slate-500">—</span>
                    <span className="text-xs text-slate-400">{d.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {d.topics.map(t => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics grid */}
      <div className="mb-12">
        <h2 className="text-base font-bold text-slate-300 mb-5" style={{ fontFamily: 'var(--font-display)' }}>
          📚 What You'll Learn
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-[#0d1117] border border-white/5 rounded-xl p-4 text-center hover:border-white/10 transition-colors">
              <div className="text-2xl mb-2">{f.emoji}</div>
              <div className="text-xs font-semibold text-white mb-1">{f.title}</div>
              <div className="text-[11px] text-slate-500 leading-tight">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Who this is for */}
      <div className="bg-[#0d1117] border border-white/8 rounded-xl p-6 mb-8">
        <h2 className="text-sm font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          👤 Who Is This For?
        </h2>
        <ul className="space-y-2">
          {[
            'Frontend developers wanting to build full-stack apps',
            'Developers who know JavaScript but are new to backend',
            'Developers looking to use AI tools (vibe coding) to write backend code',
            'Anyone who wants to understand how APIs work under the hood',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-slate-400">
              <span className="text-sky-500 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
