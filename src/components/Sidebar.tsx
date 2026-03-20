'use client';

'use client';

import { useState } from 'react';
import { SIDEBAR_SECTIONS } from '@/data/topics';
import { BookOpen, ChevronDown, ChevronRight, X, Menu } from 'lucide-react';

interface SidebarProps {
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
  visitedTopics: Set<string>;
}

const DAY_COLORS = {
  1: { dot: 'bg-emerald-400', badge: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10', bar: 'bg-emerald-400' },
  2: { dot: 'bg-sky-400',     badge: 'text-sky-400 border-sky-400/30 bg-sky-400/10',             bar: 'bg-sky-400' },
  3: { dot: 'bg-violet-400',  badge: 'text-violet-400 border-violet-400/30 bg-violet-400/10',    bar: 'bg-violet-400' },
} as const;

export default function Sidebar({ activeTopicId, onTopicSelect, visitedTopics }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({ 1: false, 2: false, 3: false });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDay = (day: number) => {
    setCollapsed(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const totalTopics = SIDEBAR_SECTIONS.reduce((a, s) => a + s.topics.length, 0);
  const progress = Math.round((visitedTopics.size / totalTopics) * 100);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo / Header */}
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center flex-shrink-0">
            <BookOpen size={16} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              NestJS Training
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">3-Day Bootcamp</div>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Progress</span>
            <span className="text-[10px] text-sky-400 font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
              {visitedTopics.size}/{totalTopics}
            </span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-violet-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right text-[10px] text-slate-500 mt-1">{progress}% complete</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {/* Day Plans quick links */}
        <div className="mb-3 px-2">
          <div className="text-[9px] uppercase tracking-widest text-slate-600 mb-2 font-medium">Quick Links</div>
          <div className="flex gap-1 mb-1.5">
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => onTopicSelect(`day-plan-${day}`)}
                className={`flex-1 py-1 rounded text-[10px] font-medium border transition-all ${
                  activeTopicId === `day-plan-${day}`
                    ? DAY_COLORS[day as 1|2|3].badge + ' font-semibold'
                    : 'text-slate-500 border-white/5 hover:border-white/10 hover:text-slate-300'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Day {day}
              </button>
            ))}
          </div>
          {/* Exercise quick-jump buttons */}
          <div className="flex gap-1">
            {[1, 2, 3].map(day => (
              <button
                key={day}
                onClick={() => onTopicSelect(`exercises-day-${day}`)}
                className={`flex-1 py-1 rounded text-[10px] font-medium border transition-all flex items-center justify-center gap-1 ${
                  activeTopicId === `exercises-day-${day}`
                    ? DAY_COLORS[day as 1|2|3].badge + ' font-semibold'
                    : 'text-slate-500 border-white/5 hover:border-white/10 hover:text-slate-300'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
                title={`Day ${day} Exercises`}
              >
                <span>🏋️</span>
                <span>D{day}</span>
              </button>
            ))}
          </div>
          {/* Projects quick-jump button */}
          <div className="flex gap-1 mt-1.5">
            <button
              onClick={() => onTopicSelect("projects")}
              className={`flex-1 py-1.5 rounded text-[10px] font-medium border transition-all flex items-center justify-center gap-1.5 ${
                activeTopicId === "projects"
                  ? 'text-sky-300 border-sky-400/30 bg-sky-400/10 font-semibold'
                  : 'text-slate-500 border-white/5 hover:border-white/10 hover:text-slate-300'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
              title={`Practice Projects`}
            >
              <span>🚀</span>
              <span>Projects – NestJS Practice</span>
            </button>
          </div>
        </div>

        <div className="h-px bg-white/5 mx-2 mb-3" />

        {SIDEBAR_SECTIONS.map(section => {
          const colors = DAY_COLORS[section.day];
          const isCollapsed = collapsed[section.day];
          const dayVisited = section.topics.filter(t => visitedTopics.has(t.id)).length;

          return (
            <div key={section.day} className="mb-1">
              {/* Day header */}
              <button
                onClick={() => toggleDay(section.day)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 transition-colors group"
              >
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                <span className="flex-1 text-left text-xs font-semibold text-slate-300 group-hover:text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Day {section.day}
                </span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded border ${colors.badge} day-badge`}>
                  {dayVisited}/{section.topics.length}
                </span>
                {isCollapsed
                  ? <ChevronRight size={12} className="text-slate-600 flex-shrink-0" />
                  : <ChevronDown size={12} className="text-slate-600 flex-shrink-0" />
                }
              </button>

              {/* Topic links */}
              {!isCollapsed && (
                <div className="mt-0.5 ml-2">
                  {/* Exercises shortcut */}
                  <button
                    onClick={() => { onTopicSelect(`exercises-day-${section.day}`); setMobileOpen(false); }}
                    className={`sidebar-link w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-left text-[12px] transition-all mb-0.5 ${
                      activeTopicId === `exercises-day-${section.day}`
                        ? 'nav-active text-sky-300 font-medium'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="flex-shrink-0 text-sm leading-none">🏋️</span>
                    <span className="flex-1 leading-tight font-medium">Practice Exercises</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded border ${colors.badge}`}>LAB</span>
                  </button>
                  {section.topics.map(topic => {
                    const isActive = activeTopicId === topic.id;
                    const isVisited = visitedTopics.has(topic.id);

                    return (
                      <button
                        key={topic.id}
                        onClick={() => {
                          onTopicSelect(topic.id);
                          setMobileOpen(false);
                        }}
                        className={`sidebar-link w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-left text-[12px] transition-all ${
                          isActive
                            ? 'nav-active text-sky-300 font-medium'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                        }`}
                      >
                        <span className="flex-shrink-0 text-sm leading-none">{topic.emoji}</span>
                        <span className="flex-1 leading-tight">{topic.title}</span>
                        {isVisited && !isActive && (
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot} opacity-60`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600">Built for developer training</p>
        <p className="text-[10px] text-slate-700 mt-0.5">Node.js + TypeScript + NestJS</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-9 h-9 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0d1117] border-r border-white/5 transform transition-transform duration-200 lg:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 left-0 bg-[#0d1117] border-r border-white/5 z-30">
        <SidebarContent />
      </aside>
    </>
  );
}
