import { DayPlan } from '@/data/topics';
import { Target, CheckCircle2, Dumbbell, Trophy, Zap } from 'lucide-react';

interface DayPlanViewProps {
  plan: DayPlan;
  onTopicSelect: (id: string) => void;
}

const DAY_THEMES = {
  1: {
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-500/20',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    icon: '🌱',
  },
  2: {
    gradient: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/20',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    accent: 'text-sky-400',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
    icon: '🐱',
  },
  3: {
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    icon: '🚀',
  },
} as const;

export default function DayPlanView({ plan, onTopicSelect }: DayPlanViewProps) {
  const theme = DAY_THEMES[plan.day];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className={`rounded-2xl bg-gradient-to-br ${theme.gradient} p-8 mb-8 shadow-2xl ${theme.glow}`}>
        <div className="text-5xl mb-3">{theme.icon}</div>
        <div className="text-sm font-medium text-white/70 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
          Day {plan.day} of 3
        </div>
        <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          {plan.title}
        </h1>
        <p className="text-white/80 text-sm">{plan.subtitle}</p>
      </div>

      {/* Learning Objectives */}
      <section className="mb-8">
        <div className={`flex items-center gap-2 mb-4 ${theme.accent}`}>
          <Target size={18} />
          <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
            Learning Objectives
          </h2>
        </div>
        <div className={`rounded-xl border ${theme.border} ${theme.bg} p-5 space-y-3`}>
          {plan.objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={16} className={`${theme.accent} flex-shrink-0 mt-0.5`} />
              <p className="text-[14px] text-slate-300">{obj}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exercises */}
      <section className="mb-8">
        <div className={`flex items-center gap-2 mb-4 ${theme.accent}`}>
          <Dumbbell size={18} />
          <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
            Hands-On Exercises
          </h2>
        </div>
        <div className="space-y-4">
          {plan.exercises.map((exercise, i) => (
            <div key={i} className="bg-[#0d1117] border border-white/8 rounded-xl overflow-hidden">
              <div className={`${theme.bg} border-b ${theme.border} px-4 py-3 flex items-center gap-2`}>
                <span className={`text-xs font-bold ${theme.badge} px-2 py-0.5 rounded-full border`}
                  style={{ fontFamily: 'var(--font-mono)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {exercise.title}
                </span>
              </div>
              <div className="p-4 space-y-2.5">
                {exercise.tasks.map((task, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded border ${theme.border} ${theme.bg} flex items-center justify-center mt-0.5`}>
                      <span className={`text-[9px] font-bold ${theme.accent}`}>{j + 1}</span>
                    </div>
                    <p className="text-[13px] text-slate-300 leading-relaxed">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice Lab CTA ───────────────────────────────────── */}
      <section className="mb-8">
        <div
          className={`rounded-2xl border-2 ${theme.border} bg-gradient-to-br ${theme.bg} p-6 flex items-center gap-5 cursor-pointer hover:bg-opacity-80 transition-all group`}
          onClick={() => onTopicSelect(`exercises-day-${plan.day}`)}
        >
          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-2xl shadow-lg`}>
            🏋️
          </div>
          <div className="flex-1">
            <p className={`text-xs font-semibold uppercase tracking-widest ${theme.accent} mb-1`}>Practice Lab</p>
            <h3 className="font-bold text-white text-base group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
              Day {plan.day} Interactive Exercises
            </h3>
            <p className="text-slate-400 text-[13px] mt-0.5">
              Hands-on coding tasks with hints, solutions & progress tracking
            </p>
          </div>
          <Zap size={20} className={`flex-shrink-0 ${theme.accent} group-hover:scale-110 transition-transform`} />
        </div>
      </section>

      {/* Mini Assignment */}
      <section className="mb-8">
        <div className={`flex items-center gap-2 mb-4 ${theme.accent}`}>
          <Trophy size={18} />
          <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
            Day {plan.day} Mini Assignment
          </h2>
        </div>
        <div className={`rounded-xl border-2 ${theme.border} bg-gradient-to-br ${theme.bg} p-6`}>
          <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            🏆 {plan.assignment.title}
          </h3>
          <p className="text-[14px] text-slate-300 mb-4">{plan.assignment.description}</p>
          <div className="space-y-2">
            {plan.assignment.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`text-xs font-bold ${theme.accent} flex-shrink-0 mt-0.5`}
                  style={{ fontFamily: 'var(--font-mono)' }}>
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <p className="text-[13px] text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom hint */}
      <div className="mt-12 pt-6 border-t border-white/5 text-center">
        <p className="text-xs text-slate-600">Select a topic from the sidebar to start learning →</p>
      </div>
    </div>
  );
}
