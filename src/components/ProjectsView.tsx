"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import CodeBlock from "@/components/CodeBlock";
import { User, Layers, Key, Sparkles } from "lucide-react";

export default function ProjectsView() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 rounded-lg pb-10">
      {/* Header section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#0a0e1a] border border-white/10 p-8 sm:p-12 text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-sky-400 mb-2">
            <Sparkles size={16} />
            Hands-on Learning
          </div>
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Practice Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Pick your assigned beginner-friendly backend project and build it
            step-by-step. Focus on the core NestJS concepts without getting
            bogged down in deep theory.
          </p>
        </div>
      </div>

      {/* Recommended Project Structure, Mandatory Requirements, and AI Help Sections */}
      <div className="space-y-8">
        {/* Recommended Project Structure */}
        <div className="bg-[#0b0f19] rounded-2xl border border-white/5 p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Recommended Project Structure
          </h2>
          <div className="bg-[#06080d] border border-white/10 rounded-lg p-4 mb-4 font-mono text-sm text-sky-200/80">
            <pre className="whitespace-pre overflow-x-auto">
{`src/
 ├── modules/
 │    ├── [feature]/
 │    │    ├── *.controller.ts
 │    │    ├── *.service.ts
 │    │    ├── *.module.ts
 │    │    ├── dto/
 │    │         ├── create-*.dto.ts
 │    │         └── update-*.dto.ts
 ├── common/
 │    ├── filters/
 │    ├── pipes/
 ├── main.ts
 ├── app.module.ts`}
            </pre>
          </div>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><strong className="text-slate-300">Controller</strong> → handles request</li>
            <li><strong className="text-slate-300">Service</strong> → business logic</li>
            <li><strong className="text-slate-300">Module</strong> → groups feature</li>
            <li><strong className="text-slate-300">DTO</strong> → defines request data</li>
          </ul>
        </div>

        {/* Mandatory Requirements */}
        <div className="bg-[#0b0f19] rounded-2xl border border-white/5 p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Mandatory Requirements for All Projects
          </h2>
          <ul className="space-y-2 text-slate-400 text-sm list-disc pl-5">
            <li>Must use module, controller, service</li>
            <li>Must include at least 3 APIs</li>
            <li>Must use DTO (at least for create)</li>
            <li>Must include 1 query parameter API</li>
            <li>Must include 1 route parameter API</li>
            <li>Follow clean folder structure</li>
          </ul>
        </div>

        {/* AI Help Section */}
        <div className="bg-[#0b0f19] rounded-2xl border border-white/5 p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
            <Sparkles size={20} className="text-sky-400" />
            How to Use AI (Vibe Coding)
          </h2>
          <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-5 mb-4">
            <p className="text-sm text-sky-100/90 font-mono leading-relaxed select-all">
              "Create a NestJS backend API with module, controller, service, and DTO for [project name]. Include CRUD APIs, query parameters, and validation. Keep it beginner-friendly."
            </p>
          </div>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>Do not blindly copy code</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Understand controller → service flow</li>
          </ul>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {PROJECTS.map((project: Project) => (
          <div
            key={project.id}
            className="group relative flex flex-col bg-[#0b0f19] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]"
          >
            {/* Trainee Badge */}
            <div className="absolute top-0 right-0 bg-sky-500/10 text-sky-400 text-xs font-bold px-4 py-2 rounded-bl-xl border-b border-l border-white/5 flex items-center gap-1.5">
              <User size={14} />
              {project.trainee}
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <h2
                className="text-xl md:text-2xl font-bold text-white mb-3 pr-24"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                {project.explanation}
              </p>

              {/* Tags Layer */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.modules.map((mod) => (
                  <span
                    key={mod}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    <Layers size={12} />
                    {mod}
                  </span>
                ))}
              </div>

              {/* APIs list */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <Key size={16} className="text-sky-400" /> Required APIs
                </h3>
                <ul className="space-y-2">
                  {project.apis.map((api, idx) => {
                    const [methodEndpoint, ...rest] = api.split(" - ");
                    const [method, endpoint] = methodEndpoint.split(" ");
                    const description = rest.join(" - ");

                    let methodColor = "text-slate-400";
                    if (method === "GET") methodColor = "text-emerald-400";
                    if (method === "POST") methodColor = "text-sky-400";
                    if (method === "PATCH" || method === "PUT")
                      methodColor = "text-amber-400";
                    if (method === "DELETE") methodColor = "text-rose-400";

                    return (
                      <li
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm p-2 rounded-md bg-white/5 border border-white/5"
                      >
                        <span className="font-mono flex items-center gap-2 whitespace-nowrap">
                          <span className={methodColor + " font-bold text-xs"}>
                            {method}
                          </span>
                          <span className="text-slate-300 text-xs">
                            {endpoint}
                          </span>
                        </span>
                        <span className="text-slate-500 text-xs hidden sm:inline">
                          —
                        </span>
                        <span className="text-slate-400 text-xs truncate">
                          {description}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Additional Tasks */}
              <div className="mb-6 bg-white/5 rounded-lg p-4 border border-white/5">
                <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                  ➡️ Additional Tasks
                </h3>
                <ul className="space-y-1 text-sm text-slate-400 list-disc pl-4">
                  <li>Add PATCH API (update data)</li>
                  <li>Add DELETE API (remove data)</li>
                  <li>Add at least 1 query parameter (filter)</li>
                  <li>Add route parameter (:id)</li>
                  <li>Use DTO for create API</li>
                  <li>Basic validation (required field)</li>
                </ul>
              </div>

              {/* Example Request / Response Toggle */}
              <div className="mt-auto">
                <button
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.id ? null : project.id
                    )
                  }
                  className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-slate-300 transition-colors flex items-center justify-center gap-2"
                >
                  {activeProject === project.id
                    ? "Hide Examples & Prompt"
                    : "Show Examples & AI Prompt"}
                </button>
              </div>
            </div>

            {/* Expandable Section */}
            {activeProject === project.id && (
              <div className="border-t border-white/10 bg-[#06080d] p-6 animate-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Example Request
                    </h4>
                    <CodeBlock code={project.exampleReq} lang="json" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Example Response
                    </h4>
                    <CodeBlock code={project.exampleRes} lang="json" />
                  </div>
                </div>

                {/* AI Prompt Section */}
                <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                    <Sparkles size={14} /> AI Starter Prompt
                  </h4>
                  <p className="text-sm text-sky-100/80 font-mono leading-relaxed select-all">
                    "{project.aiPrompt}"
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
