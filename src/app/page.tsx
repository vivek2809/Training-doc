"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopicContent from "@/components/TopicContent";
import DayPlanView from "@/components/DayPlanView";
import HomeView from "@/components/HomeView";
import ExercisePage from "@/components/ExercisePage";
import ProjectsView from "@/components/ProjectsView";
import { TOPICS, DAY_PLANS } from "@/data/topics";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
  const [activeId, setActiveId] = useState<string>("home");
  const [visited, setVisited] = useState<Set<string>>(new Set());

  // Flat list of all navigable IDs in order
  const allIds = [
    "home",
    "day-plan-1",
    "exercises-day-1",
    ...TOPICS.filter((t) => t.day === 1).map((t) => t.id),
    "day-plan-2",
    "exercises-day-2",
    ...TOPICS.filter((t) => t.day === 2).map((t) => t.id),
    "day-plan-3",
    "exercises-day-3",
    ...TOPICS.filter((t) => t.day === 3).map((t) => t.id),
    "projects",
  ];

  const currentIndex = allIds.indexOf(activeId);
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : null;
  const nextId =
    currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null;

  const handleSelect = (id: string) => {
    setActiveId(id);
    setVisited((prev) => {
      const updated = new Set(prev);
      updated.add(id);
      return updated;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Mark as visited on load
  useEffect(() => {
    if (activeId !== "home" && !activeId.startsWith("day-plan")) {
      setVisited((prev) => {
        const updated = new Set(prev);
        updated.add(activeId);
        return updated;
      });
    }
  }, [activeId]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "ArrowRight" && nextId) handleSelect(nextId);
      if (e.altKey && e.key === "ArrowLeft" && prevId) handleSelect(prevId);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextId, prevId]);

  const getLabel = (id: string) => {
    if (id === "home") return "Home";
    if (id === "projects") return "Projects – NestJS Practice";
    if (id.startsWith("day-plan-")) return `Day ${id.slice(-1)} Overview`;
    if (id.startsWith("exercises-day-")) return `Day ${id.slice(-1)} Exercises`;
    return TOPICS.find((t) => t.id === id)?.title || id;
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeTopicId={activeId}
        onTopicSelect={handleSelect}
        visitedTopics={visited}
      />

      {/* Main content area */}
      <main className="flex-1 lg:ml-72 min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-[#0a0e1a]/90 backdrop-blur-sm border-b border-white/5 px-6 py-3">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <button
                onClick={() => handleSelect("home")}
                className="hover:text-slate-300 transition-colors"
              >
                <Home size={13} />
              </button>
              {activeId !== "home" && (
                <>
                  <span>/</span>
                  <span className="text-slate-400 truncate max-w-[200px]">
                    {getLabel(activeId)}
                  </span>
                </>
              )}
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => prevId && handleSelect(prevId)}
                disabled={!prevId}
                title="Alt + ←"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={14} />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                onClick={() => nextId && handleSelect(nextId)}
                disabled={!nextId}
                title="Alt + →"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 px-6 py-10 lg:px-10">
          {activeId === "home" && <HomeView onStart={handleSelect} />}

          {activeId.startsWith("day-plan-") &&
            (() => {
              const dayNum = parseInt(activeId.slice(-1)) as 1 | 2 | 3;
              const plan = DAY_PLANS.find((p) => p.day === dayNum);
              return plan ? (
                <DayPlanView plan={plan} onTopicSelect={handleSelect} />
              ) : null;
            })()}

          {activeId.startsWith("exercises-day-") &&
            (() => {
              const dayNum = parseInt(activeId.slice(-1)) as 1 | 2 | 3;
              return <ExercisePage day={dayNum} />;
            })()}

          {activeId === "projects" && <ProjectsView />}

          {!activeId.startsWith("day-plan-") &&
            !activeId.startsWith("exercises-day-") &&
            activeId !== "home" &&
            activeId !== "projects" &&
            (() => {
              const topic = TOPICS.find((t) => t.id === activeId);
              return topic ? (
                <TopicContent topic={topic} onNavigate={handleSelect} />
              ) : null;
            })()}
        </div>

        {/* Bottom navigation */}
        {activeId !== "home" && (
          <footer className="border-t border-white/5 px-6 py-5">
            <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
              {prevId ? (
                <button
                  onClick={() => handleSelect(prevId)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <ChevronLeft
                    size={16}
                    className="group-hover:-translate-x-0.5 transition-transform"
                  />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider">
                      Previous
                    </div>
                    <div className="truncate max-w-[180px]">
                      {getLabel(prevId)}
                    </div>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextId && (
                <button
                  onClick={() => handleSelect(nextId)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group text-right"
                >
                  <div>
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider">
                      Next
                    </div>
                    <div className="truncate max-w-[180px]">
                      {getLabel(nextId)}
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              )}
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}
