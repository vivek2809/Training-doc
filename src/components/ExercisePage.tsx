"use client";

import { useState } from "react";
import { Exercise, EXERCISES_BY_DAY, Difficulty } from "@/data/exercises";
import {
  Lightbulb,
  Eye,
  EyeOff,
  CheckCircle2,
  Circle,
  Clock,
  ChevronDown,
  ChevronUp,
  Trophy,
  Zap,
  Star,
  Target,
} from "lucide-react";

interface ExercisePageProps {
  day: 1 | 2 | 3;
}

// ─── Difficulty badge ────────────────────────────────────────────────────────
const DIFF: Record<
  Difficulty,
  { label: string; color: string; bg: string; icon: React.ReactNode }
> = {
  beginner: {
    label: "Beginner",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/30",
    icon: <Star size={11} />,
  },
  intermediate: {
    label: "Intermediate",
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/30",
    icon: <Zap size={11} />,
  },
  advanced: {
    label: "Advanced",
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/30",
    icon: <Target size={11} />,
  },
};

// ─── Day themes ──────────────────────────────────────────────────────────────

type Theme = {
  gradient: string;
  accent: string;
  border: string;
  bg: string;
  check: string;
  ring: string;
};

const DAY_THEME: Record<number, Theme> = {
  1: {
    gradient: "from-emerald-500 to-teal-600",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/8",
    check: "bg-emerald-500 border-emerald-500",
    ring: "ring-emerald-500/30",
  },
  2: {
    gradient: "from-sky-500 to-blue-600",
    accent: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/8",
    check: "bg-sky-500 border-sky-500",
    ring: "ring-sky-500/30",
  },
  3: {
    gradient: "from-violet-500 to-purple-600",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/8",
    check: "bg-violet-500 border-violet-500",
    ring: "ring-violet-500/30",
  },
};

// ─── Code display ────────────────────────────────────────────────────────────
function SolutionCode({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="mt-3 rounded-lg overflow-hidden border border-white/8">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#161b2e] border-b border-white/5">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span
          className="text-[10px] text-slate-500 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {lang ?? "code"}
        </span>
      </div>
      <pre
        className="p-3 text-[12px] text-slate-300 overflow-x-auto leading-relaxed"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── Single task card ────────────────────────────────────────────────────────
function TaskCard({
  task,
  index,
  done,
  onToggle,
  accentColor,
  checkColor,
}: {
  task: Exercise["tasks"][number];
  index: number;
  done: boolean;
  onToggle: () => void;
  accentColor: string;
  checkColor: string;
}) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${done ? "border-white/10 bg-white/2 opacity-75" : "border-white/8 bg-[#0d1117]"}`}
    >
      {/* Task header row */}
      <div className="flex items-start gap-3 p-4">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            done
              ? `${checkColor} border-transparent`
              : "border-slate-600 hover:border-slate-400 bg-transparent"
          }`}
        >
          {done && <CheckCircle2 size={12} className="text-white" />}
        </button>

        {/* Task number + text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-[10px] font-bold ${accentColor} opacity-70`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Task {index + 1}
            </span>
          </div>
          <p
            className={`text-[13px] leading-relaxed ${done ? "line-through text-slate-500" : "text-slate-300"}`}
          >
            {task.text}
          </p>
        </div>
      </div>

      {/* Hint / Solution buttons */}
      {(task.hint || task.solution) && (
        <div className="px-4 pb-3 flex items-center gap-2 flex-wrap">
          {task.hint && (
            <button
              onClick={() => setShowHint((v) => !v)}
              className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-amber-400/8 border border-amber-400/20 text-amber-400 hover:bg-amber-400/15 transition-colors"
            >
              <Lightbulb size={11} />
              {showHint ? "Hide hint" : "Show hint"}
            </button>
          )}
          {task.solution && (
            <button
              onClick={() => setShowSolution((v) => !v)}
              className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-sky-400/8 border border-sky-400/20 text-sky-400 hover:bg-sky-400/15 transition-colors"
            >
              {showSolution ? <EyeOff size={11} /> : <Eye size={11} />}
              {showSolution ? "Hide solution" : "Show solution"}
            </button>
          )}
        </div>
      )}

      {/* Hint reveal */}
      {showHint && task.hint && (
        <div className="mx-4 mb-3 flex gap-2 bg-amber-400/8 border border-amber-400/20 rounded-lg p-3">
          <Lightbulb
            size={14}
            className="text-amber-400 flex-shrink-0 mt-0.5"
          />
          <p className="text-[12px] text-amber-200 leading-relaxed">
            {task.hint}
          </p>
        </div>
      )}

      {/* Solution reveal */}
      {showSolution && task.solution && (
        <div className="mx-4 mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <CheckCircle2 size={12} className="text-sky-400" />
            <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider">
              Solution
            </span>
          </div>
          {task.solutionLang ? (
            <SolutionCode code={task.solution} lang={task.solutionLang} />
          ) : (
            <div className="bg-sky-400/8 border border-sky-400/20 rounded-lg p-3">
              <p className="text-[12px] text-sky-200 leading-relaxed">
                {task.solution}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Single exercise card ────────────────────────────────────────────────────
function ExerciseCard({
  exercise,
  theme,
}: {
  exercise: Exercise;
  theme: (typeof DAY_THEME)[1];
}) {
  const [expanded, setExpanded] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [showBonus, setShowBonus] = useState(false);

  const diff = DIFF[exercise.difficulty];
  const total = exercise.tasks.length;
  const done = completedTasks.size;
  const allDone = done === total;
  const pct = Math.round((done / total) * 100);

  const toggleTask = (id: string) =>
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
        allDone
          ? "border-emerald-500/30 bg-emerald-500/3"
          : "border-white/8 bg-[#0d1117]"
      }`}
    >
      {/* Card header (always visible) */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-5 flex items-start gap-4 hover:bg-white/2 transition-colors"
      >
        {/* Emoji / completion state */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
            allDone
              ? "bg-emerald-500/20 ring-2 ring-emerald-500/40"
              : "bg-white/5"
          }`}
        >
          {allDone ? "✅" : exercise.topicEmoji}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3
              className="font-semibold text-[15px] text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {exercise.title}
            </h3>
            {allDone && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                ✓ Complete
              </span>
            )}
          </div>

          {/* Meta row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border font-medium ${diff.color} ${diff.bg}`}
            >
              {diff.icon}
              {diff.label}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-slate-500">
              <Clock size={11} />
              {exercise.estimatedTime}
            </span>
            <span className="text-[11px] text-slate-500">
              {total} task{total !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Progress bar */}
          {done > 0 && (
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${theme.gradient} transition-all duration-300`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className={`text-[10px] font-mono ${theme.accent}`}>
                {done}/{total}
              </span>
            </div>
          )}
        </div>

        {/* Expand toggle */}
        <div className="flex-shrink-0 text-slate-600 mt-1">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-white/5">
          {/* Description */}
          <p className="text-[13px] text-slate-400 py-4 leading-relaxed border-b border-white/5 mb-4">
            {exercise.description}
          </p>

          {/* Tasks */}
          <div className="space-y-3">
            {exercise.tasks.map((task, i) => (
              <TaskCard
                key={task.id}
                task={task}
                index={i}
                done={completedTasks.has(task.id)}
                onToggle={() => toggleTask(task.id)}
                accentColor={theme.accent}
                checkColor={theme.check}
              />
            ))}
          </div>

          {/* Bonus challenge */}
          {exercise.bonusChallenge && (
            <div className="mt-4">
              <button
                onClick={() => setShowBonus((v) => !v)}
                className="flex items-center gap-2 text-[12px] text-violet-400 hover:text-violet-300 transition-colors"
              >
                <Star size={13} />
                <span className="font-medium">Bonus Challenge</span>
                {showBonus ? (
                  <ChevronUp size={12} />
                ) : (
                  <ChevronDown size={12} />
                )}
              </button>
              {showBonus && (
                <div className="mt-2 bg-violet-500/8 border border-violet-500/20 rounded-xl p-4">
                  <p className="text-[13px] text-violet-200 leading-relaxed">
                    {exercise.bonusChallenge}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Completion message */}
          {allDone && (
            <div className="mt-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
              <Trophy size={16} className="text-emerald-400 flex-shrink-0" />
              <p className="text-[13px] text-emerald-300 font-medium">
                🎉 Exercise complete! Great work.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Score summary banner ─────────────────────────────────────────────────────
function ScoreBanner({
  exercises,
  theme,
}: {
  exercises: Exercise[];
  theme: (typeof DAY_THEME)[1];
}) {
  const totalTasks = exercises.reduce((a, e) => a + e.tasks.length, 0);
  const totalExercises = exercises.length;

  return (
    <div
      className={`rounded-2xl bg-gradient-to-br ${theme.gradient} p-6 mb-8 shadow-2xl`}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p
            className="text-white/70 text-xs font-medium mb-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Practice Lab
          </p>
          <h2
            className="text-xl font-extrabold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Day {exercises[0]?.day} Exercises
          </h2>
          <p className="text-white/70 text-sm mt-1">
            {totalExercises} exercises · {totalTasks} hands-on tasks
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          {(["beginner", "intermediate", "advanced"] as const).map((d) => {
            const count = exercises.filter((e) => e.difficulty === d).length;
            if (!count) return null;
            return (
              <div
                key={d}
                className="text-center bg-white/10 rounded-xl px-4 py-2"
              >
                <div className="text-white font-bold text-lg">{count}</div>
                <div className="text-white/70 text-[10px] capitalize">{d}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ExercisePage({ day }: ExercisePageProps) {
  const exercises = EXERCISES_BY_DAY[day];
  const theme = DAY_THEME[day];

  // Group by topic for visual separation
  const byTopic = exercises.reduce<Record<string, Exercise[]>>((acc, ex) => {
    if (!acc[ex.topicId]) acc[ex.topicId] = [];
    acc[ex.topicId].push(ex);
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto">
      <ScoreBanner exercises={exercises} theme={theme} />

      {/* How to use */}
      <div
        className={`rounded-xl border ${theme.border} ${theme.bg} p-4 mb-8 flex gap-3`}
      >
        <span className="text-lg flex-shrink-0">💡</span>
        <div>
          <p className="text-[13px] font-semibold text-white mb-1">
            How to use these exercises
          </p>
          <p className="text-[12px] text-slate-400 leading-relaxed">
            Click any exercise to expand it. Check off tasks as you complete
            them. Use the <strong className="text-amber-400">Hint</strong>{" "}
            button if you're stuck, and{" "}
            <strong className="text-sky-400">Show Solution</strong> to see the
            answer. Try to solve it yourself first!
          </p>
        </div>
      </div>

      {/* Exercises grouped by topic */}
      {Object.entries(byTopic).map(([topicId, topicExercises]) => (
        <section key={topicId} className="mb-10">
          {/* Topic group header */}
          <div
            className={`flex items-center gap-2 mb-4 pb-2 border-b ${theme.border}`}
          >
            <span className="text-lg">{topicExercises[0].topicEmoji}</span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${theme.accent}`}
            >
              {topicId.replace(/-/g, " ")}
            </span>
            <span className="text-[10px] text-slate-600 ml-auto">
              {topicExercises.length} exercise
              {topicExercises.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="space-y-4">
            {topicExercises.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} theme={theme} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
