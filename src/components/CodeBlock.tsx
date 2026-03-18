'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  lang: string;
}

function highlightCode(code: string, lang: string): string {
  if (lang === 'text' || lang === 'bash' || lang === 'dockerfile') {
    // Minimal highlighting for bash/text
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(#[^\n]*)/g, '<span class="token-comment">$1</span>')
      .replace(/("([^"\\]|\\.)*")/g, '<span class="token-string">$1</span>');
  }

  if (lang === 'json') {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/("(?:[^"\\]|\\.)*")\s*:/g, '<span class="token-function">$1</span>:')
      .replace(/:\s*("(?:[^"\\]|\\.)*")/g, ': <span class="token-string">$1</span>')
      .replace(/:\s*(\d+\.?\d*)/g, ': <span class="token-number">$1</span>')
      .replace(/:\s*(true|false|null)/g, ': <span class="token-keyword">$1</span>');
  }

  // TypeScript/JavaScript highlighting
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Comments first
    .replace(/(\/\/[^\n]*)/g, '<span class="token-comment">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>')
    // Decorators
    .replace(/(@\w+)/g, '<span class="token-decorator">$1</span>')
    // Keywords
    .replace(/\b(import|export|from|const|let|var|function|class|interface|type|enum|extends|implements|return|async|await|new|this|if|else|for|while|try|catch|throw|void|boolean|string|number|true|false|null|undefined|default|private|public|readonly|static|abstract)\b/g, '<span class="token-keyword">$1</span>')
    // Strings
    .replace(/(`[^`]*`)/g, '<span class="token-string">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="token-string">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="token-string">$1</span>')
    // Numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>')
    // Class names (PascalCase)
    .replace(/\b([A-Z][a-zA-Z0-9]+)\b/g, '<span class="token-class">$1</span>');
}

const LANG_LABELS: Record<string, string> = {
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  json: 'JSON',
  bash: 'Terminal',
  text: 'Config',
  dockerfile: 'Dockerfile',
};

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlighted = highlightCode(code, lang);
  const label = LANG_LABELS[lang] || lang;

  return (
    <div className="rounded-xl overflow-hidden border border-white/8 my-5 group">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b2e] border-b border-white/5">
        <div className="flex items-center gap-2">
          {/* Traffic light dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] text-slate-500 ml-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
            {label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="bg-[#0d1117] overflow-x-auto">
        <pre className="code-block p-5 text-slate-300 leading-relaxed">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  );
}
