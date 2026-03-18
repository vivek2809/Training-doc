import { ContentBlock, Topic } from '@/data/topics';
import { EXERCISES_BY_TOPIC } from '@/data/exercises';
import CodeBlock from './CodeBlock';
import { Lightbulb, AlertTriangle, Info, Target, HelpCircle, CheckCircle2, Dumbbell } from 'lucide-react';

interface TopicContentProps {
  topic: Topic;
  onNavigate?: (id: string) => void;
}

const SECTION_STYLES = {
  what: { icon: HelpCircle, color: 'text-sky-400', bg: 'bg-sky-400/8', border: 'border-sky-400/20', label: 'What is it?' },
  why: { icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-400/8', border: 'border-emerald-400/20', label: 'Why it matters' },
  example: { icon: Info, color: 'text-violet-400', bg: 'bg-violet-400/8', border: 'border-violet-400/20', label: 'Example' },
  keypoints: { icon: CheckCircle2, color: 'text-amber-400', bg: 'bg-amber-400/8', border: 'border-amber-400/20', label: 'Key Points' },
};

const DAY_COLORS = {
  1: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-300',
  2: 'from-sky-500/20 to-sky-500/5 border-sky-500/30 text-sky-300',
  3: 'from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-300',
} as const;

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-slate-300 leading-relaxed mb-4 text-[15px]">
          {block.text}
        </p>
      );

    case 'heading':
      if (block.level === 2) {
        return (
          <h2 key={index} className="text-xl font-bold text-white mt-8 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {block.text}
          </h2>
        );
      }
      return (
        <h3 key={index} className="text-base font-semibold text-slate-200 mt-6 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          {block.text}
        </h3>
      );

    case 'code':
      return <CodeBlock key={index} code={block.code} lang={block.lang} />;

    case 'bullets':
      return (
        <ul key={index} className="space-y-2 mb-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-slate-300">
              <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'tip':
      return (
        <div key={index} className="flex gap-3 bg-amber-400/8 border border-amber-400/20 rounded-xl p-4 mb-5">
          <Lightbulb size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Tip</div>
            <p className="text-[14px] text-slate-300 leading-relaxed">{block.text}</p>
          </div>
        </div>
      );

    case 'important':
      return (
        <div key={index} className="flex gap-3 bg-red-400/8 border border-red-400/20 rounded-xl p-4 mb-5">
          <AlertTriangle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Important</div>
            <p className="text-[14px] text-slate-300 leading-relaxed">{block.text}</p>
          </div>
        </div>
      );

    case 'analogy':
      return (
        <div key={index} className="bg-violet-500/8 border border-violet-500/20 rounded-xl p-4 mb-5">
          <p className="text-[14px] text-violet-200 leading-relaxed italic">{block.text}</p>
        </div>
      );

    case 'exercise':
      return (
        <div key={index} className="bg-[#0d1117] border border-sky-500/20 rounded-xl overflow-hidden mb-5">
          <div className="bg-sky-500/10 border-b border-sky-500/20 px-4 py-3 flex items-center gap-2">
            <span className="text-lg">🏋️</span>
            <span className="text-sm font-semibold text-sky-300" style={{ fontFamily: 'var(--font-display)' }}>
              {block.title}
            </span>
          </div>
          <div className="p-4 space-y-2">
            {block.tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded border border-sky-500/30 bg-sky-500/10 flex items-center justify-center mt-0.5">
                  <span className="text-[9px] text-sky-400 font-bold">{i + 1}</span>
                </div>
                <p className="text-[13px] text-slate-300">{task}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'section': {
      const style = SECTION_STYLES[block.label];
      const Icon = style.icon;
      return (
        <div key={index} className={`flex items-center gap-2 mt-8 mb-3 pb-2 border-b ${style.border}`}>
          <Icon size={16} className={style.color} />
          <span className={`text-xs font-semibold uppercase tracking-widest ${style.color}`}>
            {block.title || style.label}
          </span>
        </div>
      );
    }

    default:
      return null;
  }
}

export default function TopicContent({ topic, onNavigate }: TopicContentProps) {
  const dayColors = DAY_COLORS[topic.day];
  const topicExercises = EXERCISES_BY_TOPIC[topic.id] || [];

  return (
    <article className="max-w-3xl mx-auto">
      {/* Topic header */}
      <div className="mb-10">
        <div className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r border mb-4 ${dayColors}`}
          style={{ fontFamily: 'var(--font-mono)' }}>
          <span>Day {topic.day}</span>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-4xl">{topic.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {topic.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />

      {/* Content */}
      <div className="content-area">
        {topic.content.map((block, index) => renderBlock(block, index))}
      </div>

      {/* ── Exercise callout ────────────────────────────────────── */}
      {topicExercises.length > 0 && onNavigate && (
        <div
          className="mt-12 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5 flex items-center gap-4 cursor-pointer hover:bg-sky-500/10 transition-colors group"
          onClick={() => onNavigate(`exercises-day-${topic.day}`)}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-xl">
            🏋️
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-0.5">Ready to practice?</p>
            <p className="text-sm font-semibold text-white">
              {topicExercises.length} exercise{topicExercises.length > 1 ? 's' : ''} available for this topic
            </p>
            <p className="text-[12px] text-slate-400 mt-0.5">
              {topicExercises.map(e => e.title).join(' · ')}
            </p>
          </div>
          <Dumbbell size={18} className="flex-shrink-0 text-sky-400 group-hover:scale-110 transition-transform" />
        </div>
      )}

      {/* Bottom navigation hint */}
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-xs text-slate-600">Use the sidebar to navigate to the next topic</p>
      </div>
    </article>
  );
}
