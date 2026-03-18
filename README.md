# 🐱 NestJS Backend Training — 3-Day Bootcamp

A complete, production-quality training documentation website for teaching backend development with **Node.js**, **TypeScript**, and **NestJS**. Designed for frontend developers transitioning to full-stack.

---

## 🚀 Quick Start

### Prerequisites
- Node.js **18+** installed → [nodejs.org](https://nodejs.org)
- A code editor (VS Code recommended)

### Setup (3 commands)

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser
# → http://localhost:3000
```

That's it! The training website is live.

---

## 📁 Project Structure

```
nestjs-training/
├── src/
│   ├── app/
│   │   ├── globals.css        ← Global styles + custom fonts
│   │   ├── layout.tsx         ← Root HTML layout
│   │   └── page.tsx           ← Main page (routing logic)
│   ├── components/
│   │   ├── Sidebar.tsx        ← Left sidebar with navigation + progress
│   │   ├── TopicContent.tsx   ← Renders topic content blocks
│   │   ├── DayPlanView.tsx    ← Day overview with exercises + assignment
│   │   ├── HomeView.tsx       ← Landing/welcome page
│   │   └── CodeBlock.tsx      ← Syntax-highlighted code blocks
│   └── data/
│       └── topics.ts          ← ALL content: topics, exercises, day plans
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 📚 Training Content — 20 Topics

### Day 1 — Foundations
1. 🌐 Backend & API Fundamentals
2. 💚 Node.js
3. 🔷 TypeScript

### Day 2 — NestJS Core
4. 🐱 NestJS Introduction
5. ⚙️ NestJS Core Concepts
6. 📨 Request Handling
7. ✅ DTO & Validation
8. 🚨 Exception Handling

### Day 3 — Advanced & Production
9.  🔧 Middleware, Pipes, Guards & Interceptors
10. 🗄️ Database Integration (TypeORM)
11. 📖 API Documentation (Swagger)
12. 🔐 Authentication & Authorization (JWT)
13. ⚙️ Configuration Management
14. 📊 Logging & Monitoring
15. 🧪 Testing APIs
16. 🎨 API Design Best Practices
17. 🤖 AI-Assisted Development (Vibe Coding)
18. 🔍 Debugging
19. ⚡ Performance Basics
20. 🚀 Deployment Basics

---

## ✨ Features

| Feature | Details |
|---|---|
| 📱 Responsive | Works on mobile, tablet, desktop |
| 🌙 Dark theme | Easy on the eyes for long reading sessions |
| 📊 Progress tracking | Sidebar shows % completion + topics visited |
| ⌨️ Keyboard nav | `Alt + →` / `Alt + ←` to move between topics |
| 🎨 Syntax highlighting | Custom token-based code highlighting |
| 📋 Copy code | Hover any code block → click Copy |
| 🏋️ Exercises | Hands-on tasks for every day |
| 🏆 Assignments | Mini projects at end of each day |
| 💡 Tip boxes | Highlighted tips, warnings, and analogies |

---

## 🛠️ Customization

### Adding a New Topic

Open `src/data/topics.ts` and add a new entry to the `TOPICS` array:

```typescript
{
  id: 'my-new-topic',        // Unique ID (used for navigation)
  title: '21. My New Topic', // Shown in sidebar and header
  day: 3,                    // Which day it belongs to (1, 2, or 3)
  emoji: '🆕',               // Emoji shown next to title
  content: [
    { type: 'section', label: 'what', title: 'What is it?' },
    { type: 'paragraph', text: 'Your explanation here...' },
    { type: 'code', lang: 'typescript', code: `// your code here` },
    { type: 'tip', text: 'A useful tip!' },
    { type: 'bullets', items: ['Point one', 'Point two'] },
  ]
}
```

### Content Block Types

| Type | Purpose |
|---|---|
| `paragraph` | Regular text |
| `heading` | H2 or H3 heading |
| `code` | Syntax-highlighted code block |
| `bullets` | Bullet point list |
| `tip` | 💡 Yellow tip box |
| `important` | ⚠️ Red warning box |
| `analogy` | 🟣 Purple analogy/metaphor box |
| `exercise` | 🏋️ Numbered task list |
| `section` | Section divider with icon (`what`, `why`, `example`, `keypoints`) |

---

## 🎨 Design System

| Element | Value |
|---|---|
| Display font | Syne (headlines, titles) |
| Body font | Inter (readable prose) |
| Code font | IBM Plex Mono |
| Day 1 color | Emerald (`#10b981`) |
| Day 2 color | Sky (`#0ea5e9`) |
| Day 3 color | Violet (`#8b5cf6`) |
| Background | `#0a0e1a` |

---

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- Google Fonts (Syne, Inter, IBM Plex Mono)

---

## 🧑‍🏫 For Trainers

### Running a Training Session

1. Display this on a projector / screen share
2. Walk through each topic in Day 1 → 2 → 3 order
3. After each topic, assign the exercises
4. End each day with the mini assignment/project
5. Use the progress bar to track completion as a class

### Estimated Timing

| Day | Topics | Exercises | Assignment | Total |
|---|---|---|---|---|
| Day 1 | 3 topics | 3 exercises | 1 project | ~6–7 hrs |
| Day 2 | 5 topics | 3 exercises | 1 project | ~7–8 hrs |
| Day 3 | 12 topics | 3 exercises | 1 project | ~8–9 hrs |

---

## 🤝 License

Free to use for internal training purposes.
