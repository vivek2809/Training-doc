export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'tip'; text: string }
  | { type: 'important'; text: string }
  | { type: 'exercise'; title: string; tasks: string[] }
  | { type: 'analogy'; text: string }
  | { type: 'section'; label: 'what' | 'why' | 'example' | 'keypoints'; title: string };

export interface Topic {
  id: string;
  title: string;
  day: 1 | 2 | 3;
  emoji: string;
  content: ContentBlock[];
}

export interface DayPlan {
  day: 1 | 2 | 3;
  title: string;
  subtitle: string;
  objectives: string[];
  topics: string[];
  exercises: { title: string; tasks: string[] }[];
  assignment: { title: string; description: string; steps: string[] };
}

export const DAY_PLANS: DayPlan[] = [
  {
    day: 1,
    title: 'Day 1 — Foundations',
    subtitle: 'Backend Fundamentals, Node.js & TypeScript',
    objectives: [
      'Understand what backend development is and how it differs from frontend',
      'Learn how APIs work and why they matter',
      'Write basic Node.js code and understand its event loop',
      'Use TypeScript types and interfaces confidently',
      'Build a simple REST API with Node.js and Express',
    ],
    topics: ['backend-fundamentals', 'nodejs', 'typescript'],
    exercises: [
      {
        title: 'Exercise 1 — Your First HTTP Server',
        tasks: [
          'Create a Node.js file called server.js',
          'Use the built-in http module to create a server on port 3000',
          'Return "Hello, Backend World!" when visiting http://localhost:3000',
          'Add a second route /about that returns your name',
        ],
      },
      {
        title: 'Exercise 2 — Express REST API',
        tasks: [
          'Install Express with npm install express',
          'Create GET /products that returns a list of 3 products as JSON',
          'Create GET /products/:id that returns a single product',
          'Test with Postman or your browser',
        ],
      },
      {
        title: 'Exercise 3 — TypeScript Basics',
        tasks: [
          'Create a TypeScript file and define a Product interface with id, name, price, inStock',
          'Write a function getExpensiveProducts(products: Product[], minPrice: number) that filters by price',
          'Add proper return types to all your functions',
          'Compile and run with ts-node',
        ],
      },
    ],
    assignment: {
      title: 'Mini Project — Product Catalog API',
      description:
        'Build a simple in-memory REST API for a product catalog using Express + TypeScript.',
      steps: [
        'Set up a TypeScript + Express project',
        'Define a Product interface (id, name, price, category, inStock)',
        'Create in-memory array of 5 products',
        'Implement: GET /products (list all), GET /products/:id (single), POST /products (create)',
        'Return proper HTTP status codes (200, 201, 404)',
        'Test all endpoints with Postman',
      ],
    },
  },
  {
    day: 2,
    title: 'Day 2 — NestJS Core',
    subtitle: 'NestJS Framework, Request Handling, DTOs & Validation',
    objectives: [
      'Understand the NestJS architecture and why it exists',
      'Create modules, controllers, and services',
      'Handle different types of requests (GET, POST, PUT, DELETE)',
      'Validate incoming data using DTOs and class-validator',
      'Handle errors properly with NestJS exception filters',
    ],
    topics: ['nestjs-intro', 'nestjs-core', 'request-handling', 'dto-validation', 'exception-handling'],
    exercises: [
      {
        title: 'Exercise 1 — Your First NestJS App',
        tasks: [
          'Install NestJS CLI: npm i -g @nestjs/cli',
          'Create new project: nest new my-api',
          'Explore the generated folder structure',
          'Run the app and visit http://localhost:3000',
          'Change the default response to return your name',
        ],
      },
      {
        title: 'Exercise 2 — Products Module',
        tasks: [
          'Generate a products module: nest g module products',
          'Generate a products controller: nest g controller products',
          'Generate a products service: nest g service products',
          'Add a GET /products endpoint in the controller',
          'Move the products data to the service and inject it',
        ],
      },
      {
        title: 'Exercise 3 — DTOs and Validation',
        tasks: [
          'Install validation packages: npm install class-validator class-transformer',
          'Create CreateProductDto with @IsString(), @IsNumber(), @IsBoolean() decorators',
          'Enable global ValidationPipe in main.ts',
          'Test that invalid data returns a proper error message',
        ],
      },
    ],
    assignment: {
      title: 'Mini Project — NestJS Task Manager API',
      description: 'Rebuild the product catalog as a proper NestJS application with full CRUD.',
      steps: [
        'Create a NestJS project with tasks module',
        'Define Task entity: id, title, description, status (todo/in-progress/done)',
        'Create CreateTaskDto and UpdateTaskDto with validation',
        'Implement full CRUD: GET all, GET one, POST, PATCH, DELETE',
        'Use NotFoundException when task not found',
        'Test all endpoints with Postman',
      ],
    },
  },
  {
    day: 3,
    title: 'Day 3 — Advanced & Production',
    subtitle: 'Auth, Database, Best Practices & Deployment',
    objectives: [
      'Integrate a real database using TypeORM',
      'Implement JWT authentication and role-based guards',
      'Document your API with Swagger automatically',
      'Apply API design best practices',
      'Deploy a NestJS app to production',
    ],
    topics: [
      'middleware-pipes-guards',
      'database',
      'swagger',
      'auth',
      'config',
      'logging',
      'testing',
      'api-design',
      'vibe-coding',
      'debugging',
      'performance',
      'deployment',
    ],
    exercises: [
      {
        title: 'Exercise 1 — Database Setup',
        tasks: [
          'Install TypeORM and SQLite: npm install @nestjs/typeorm typeorm sqlite3',
          'Configure TypeOrmModule in app.module.ts',
          'Convert your Task to a TypeORM entity with @Entity() and @Column()',
          'Replace in-memory array with database operations using Repository',
        ],
      },
      {
        title: 'Exercise 2 — JWT Authentication',
        tasks: [
          'Install auth packages: npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt',
          'Create an AuthModule with login endpoint',
          'Protect the POST /tasks route with JwtAuthGuard',
          'Test: login to get token → use token to create task',
        ],
      },
      {
        title: 'Exercise 3 — Swagger Docs',
        tasks: [
          'Install Swagger: npm install @nestjs/swagger',
          'Set up SwaggerModule in main.ts',
          'Add @ApiTags() and @ApiOperation() to your controllers',
          'Visit http://localhost:3000/api and test endpoints from the UI',
        ],
      },
    ],
    assignment: {
      title: 'Final Project — Complete REST API',
      description:
        'Build a production-ready Notes API with authentication, database, docs, and deployment.',
      steps: [
        'Create NestJS project with auth + notes modules',
        'Users can register and login (JWT)',
        'Notes belong to users (relational database with TypeORM)',
        'Full CRUD for notes (protected routes)',
        'Swagger documentation for all endpoints',
        'Global exception filter + request logging',
        'Deploy to Railway or Render (free tier)',
      ],
    },
  },
];

export const TOPICS: Topic[] = [
  // ─────────────────────────────────────────
  // DAY 1
  // ─────────────────────────────────────────
  {
    id: 'backend-fundamentals',
    title: '1. Backend & API Fundamentals',
    day: 1,
    emoji: '🌐',
    content: [
      { type: 'section', label: 'what', title: 'What is Backend Development?' },
      {
        type: 'paragraph',
        text: "Think of a restaurant. The frontend is the dining room — what customers see, menus, tables, nice décor. The backend is the kitchen — where food is actually prepared, stored, and managed. Customers never see the kitchen, but everything they enjoy comes from it.",
      },
      {
        type: 'analogy',
        text: '🍽️ Frontend = Dining Room (what users see). Backend = Kitchen (where data is processed, stored, and served). The API is the waiter who carries requests between them.',
      },
      {
        type: 'paragraph',
        text: 'Backend development is building the server, database, and business logic that powers your app. When you click "Buy Now" on Amazon, the backend checks inventory, charges your card, updates the stock count, triggers a warehouse to ship, and sends a confirmation email — all in under a second.',
      },
      {
        type: 'paragraph',
        text: 'As a frontend developer, you have already been consuming backends through fetch() and axios calls. Now you will learn how to build them.',
      },
      { type: 'section', label: 'what', title: 'What is an API?' },
      {
        type: 'paragraph',
        text: "API stands for Application Programming Interface. It is a set of rules that lets two applications talk to each other. Your React app talks to a backend API. A mobile app talks to the same backend API. Even third-party services like Stripe talk to your API. One backend can serve many different clients.",
      },
      {
        type: 'analogy',
        text: '🔌 An API is like an electrical socket. Any plug that fits the shape can use it — phone charger, laptop, lamp. APIs work the same way — any client that speaks the right language can use your backend.',
      },
      { type: 'section', label: 'what', title: 'REST API — The Standard You Will Use' },
      {
        type: 'paragraph',
        text: 'REST (Representational State Transfer) is the most popular style for building APIs. REST uses HTTP — the same protocol your browser uses to load websites. Instead of loading HTML pages, you request and send data (usually JSON).',
      },
      {
        type: 'bullets',
        items: [
          'GET — Read data. "Give me a list of users." Safe, never changes anything.',
          'POST — Create new data. "Add this new user to the database."',
          'PATCH — Partially update. "Change only the email of user #5."',
          'PUT — Fully replace. "Replace all data for user #5 with this new object."',
          'DELETE — Remove data. "Delete user #5."',
        ],
      },
      { type: 'section', label: 'example', title: 'A Real-World REST API Design' },
      {
        type: 'code',
        lang: 'text',
        code: `# A blog platform REST API:

GET    /posts              → Get all blog posts
GET    /posts/5            → Get the specific post with ID 5
POST   /posts              → Create a brand-new post
PATCH  /posts/5            → Edit the title/body of post #5
DELETE /posts/5            → Delete post #5

# Nested resources — comments that belong to a post:
GET    /posts/5/comments   → Get all comments for post #5
POST   /posts/5/comments   → Add a new comment to post #5

# Query parameters — filtering and sorting:
GET    /posts?author=alice            → Posts by Alice only
GET    /posts?page=2&limit=10         → Page 2, 10 per page
GET    /posts?sort=createdAt&order=desc  → Newest first`,
      },
      { type: 'section', label: 'what', title: 'HTTP Status Codes — The API Response Language' },
      {
        type: 'paragraph',
        text: 'Every API response has two parts: the data (body) and a status code (a 3-digit number). Status codes instantly tell the client what happened — success, client mistake, or server error.',
      },
      {
        type: 'code',
        lang: 'text',
        code: `2xx — Success
  200 OK          → Request worked perfectly (GET, PATCH, DELETE)
  201 Created     → New resource was created (POST)
  204 No Content  → Success but nothing to return (DELETE)

4xx — Client Errors (the caller did something wrong)
  400 Bad Request     → Missing fields, wrong data type
  401 Unauthorized    → Not logged in, no token provided
  403 Forbidden       → Logged in but no permission for this action
  404 Not Found       → Resource does not exist
  409 Conflict        → Duplicate — e.g. email already registered
  422 Unprocessable   → Data format is valid but business logic fails

5xx — Server Errors (the backend broke)
  500 Internal Server Error  → Unexpected crash or bug`,
      },
      {
        type: 'tip',
        text: 'When you see a 4xx error, the fix is on the client side (your request was wrong). When you see a 5xx error, the fix is on the server side (the backend has a bug). This distinction saves hours of debugging.',
      },
      { type: 'section', label: 'what', title: 'JSON — The Language of Modern APIs' },
      {
        type: 'paragraph',
        text: 'JSON (JavaScript Object Notation) is the data format almost every REST API uses. It is human-readable, easy to parse, and maps perfectly to JavaScript objects.',
      },
      {
        type: 'code',
        lang: 'json',
        code: `{
  "id": 1,
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "age": 28,
  "isActive": true,
  "role": "admin",
  "address": {
    "city": "Mumbai",
    "country": "India"
  },
  "tags": ["developer", "nodejs", "nestjs"],
  "createdAt": "2024-01-15T09:30:00Z"
}`,
      },
      {
        type: 'paragraph',
        text: 'JSON supports strings, numbers, booleans, nested objects, arrays, and null. It maps directly to JavaScript objects, which is one reason Node.js is so natural for backend development.',
      },
      { type: 'section', label: 'what', title: 'How a Request-Response Cycle Works' },
      {
        type: 'paragraph',
        text: 'Every API interaction follows this exact flow. Understanding each step helps you know where to look when something breaks:',
      },
      {
        type: 'code',
        lang: 'text',
        code: `1. Client sends HTTP request:
   POST /api/users  HTTP/1.1
   Content-Type: application/json
   Authorization: Bearer eyJhbGci...
   { "name": "Bob", "email": "b@b.com" }

2. Server receives it
3. Router matches the URL + method → finds the right controller
4. Controller reads the body, params, headers
5. Service runs business logic (validate, call DB, etc.)
6. Database saves / reads data
7. Server sends back response:
   HTTP/1.1 201 Created
   Content-Type: application/json
   { "id": 42, "name": "Bob", "email": "b@b.com" }`,
      },
      { type: 'section', label: 'what', title: 'Tools You Will Use Every Day' },
      {
        type: 'bullets',
        items: [
          '🟧 Postman — GUI tool to send any HTTP request and inspect responses. Download free at postman.com.',
          '⚡ Thunder Client — A lighter alternative built into VS Code as an extension.',
          '🌐 curl — Command-line HTTP client. Pre-installed on Mac/Linux.',
          '📖 Swagger UI — Auto-generated interactive docs you will add to your NestJS API.',
          '🔵 VS Code — Best editor for TypeScript development.',
        ],
      },
      {
        type: 'code',
        lang: 'bash',
        code: `# curl examples — useful even if you prefer Postman:

# GET request
curl http://localhost:3000/products

# POST with JSON body
curl -X POST http://localhost:3000/products \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Laptop", "price": 999}'

# With Authorization header
curl http://localhost:3000/profile \\
  -H "Authorization: Bearer eyJhbGci..."`,
      },
      {
        type: 'tip',
        text: 'Install the Postman app (free) to test APIs visually — it saves hours compared to typing curl commands. Alternatively, install the Thunder Client extension in VS Code for a built-in lightweight option.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Backend = server-side code: handles data, logic, and databases',
          'API = a contract between client and server for communication',
          'REST = the most popular API style — uses HTTP methods on resource URLs',
          'JSON = the standard data format for REST APIs',
          'Every HTTP response has a status code (200, 201, 400, 404, 500…)',
          'The request cycle: client → router → controller → service → DB → response',
          'Use Postman or Thunder Client to test APIs during development',
        ],
      },
    ],
  },

  {
    id: 'nodejs',
    title: '2. Node.js',
    day: 1,
    emoji: '💚',
    content: [
      { type: 'section', label: 'what', title: 'What is Node.js?' },
      {
        type: 'paragraph',
        text: "Node.js lets you run JavaScript on a server — outside the browser. Before 2009, JavaScript only worked inside browsers. Node.js changed that by taking Chrome's V8 engine and making it runnable anywhere.",
      },
      {
        type: 'analogy',
        text: "🏭 JavaScript was a skilled chef who only worked at one restaurant (the browser). Node.js built a catering company and said: now this chef can work anywhere — hotels, events, food trucks. Same skills, unlimited locations.",
      },
      { type: 'section', label: 'why', title: 'Why Use Node.js for Backend?' },
      {
        type: 'bullets',
        items: [
          'One language everywhere — same JavaScript/TypeScript on frontend and backend.',
          'Non-blocking I/O — handles thousands of concurrent requests efficiently.',
          'Massive ecosystem — npm has over 2 million packages. Almost any problem is solved.',
          'Fast to prototype — get an API running in minutes.',
          'Used at scale — Netflix, LinkedIn, Uber, PayPal all run Node.js backends.',
          'Perfect fit for NestJS — NestJS is built entirely on Node.js.',
        ],
      },
      { type: 'section', label: 'what', title: 'Non-Blocking I/O — The Superpower' },
      {
        type: 'paragraph',
        text: "Most backend servers are I/O-bound — they spend most time waiting: for the database to respond, for a file to be read, for an external API call. Traditional servers handle one request at a time — if one is waiting, others queue up. Node.js does not wait.",
      },
      {
        type: 'analogy',
        text: "☕ A slow barista takes one order, makes the coffee, hands it over, then takes the next. A fast barista (Node.js) takes all orders first, starts all coffees simultaneously, and hands each over as it's done. Same one person — massively more throughput.",
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// Blocking — nothing else runs while this waits:
const data = fs.readFileSync('big-file.txt'); // BLOCKS for 2 seconds
console.log('This runs after 2 seconds');

// Non-blocking — other code runs while file is being read:
fs.readFile('big-file.txt', (err, data) => {
  console.log('File ready:', data.length, 'bytes');
});
console.log('This runs immediately — file reads in background');`,
      },
      { type: 'section', label: 'example', title: 'Your First Node.js HTTP Server' },
      {
        type: 'paragraph',
        text: "Node.js has a built-in 'http' module. No packages needed. This is the raw foundation — Express and NestJS both build on top of this:",
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// server.js — run with: node server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // req = the request (URL, method, headers, body)
  // res = the response (what we send back)

  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome!', version: '1.0' }));

  } else if (req.url === '/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([
      { id: 1, name: 'Alice', role: 'admin' },
      { id: 2, name: 'Bob',   role: 'user'  },
    ]));

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found', path: req.url }));
  }
});

server.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});`,
      },
      { type: 'section', label: 'example', title: 'Express.js — The Popular Framework' },
      {
        type: 'paragraph',
        text: "The raw http module gets complex fast — routing, parsing JSON bodies, and error handling all require manual code. Express.js solves this with a clean, minimal API. It is the most widely used Node.js web framework.",
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// npm install express
const express = require('express');
const app = express();

// Middleware: parse JSON bodies automatically
app.use(express.json());

let products = [
  { id: 1, name: 'Laptop',     price: 999,  inStock: true  },
  { id: 2, name: 'Mouse',      price: 29,   inStock: true  },
  { id: 3, name: 'Headphones', price: 199,  inStock: false },
];

// GET /products?inStock=true
app.get('/products', (req, res) => {
  const { inStock } = req.query;
  if (inStock !== undefined) {
    return res.json(products.filter(p => p.inStock === (inStock === 'true')));
  }
  res.json(products);
});

// GET /products/:id
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
});

// POST /products
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'name and price are required' });
  }
  const newProduct = { id: Date.now(), name, price, inStock: true };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PATCH /products/:id
app.patch('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log('Server on port 3000'));`,
      },
      { type: 'section', label: 'what', title: 'async/await — Writing Async Code Cleanly' },
      {
        type: 'paragraph',
        text: "Most backend operations are asynchronous: database queries, file reads, external API calls. The modern way to handle async in Node.js is async/await — it makes async code look and read like synchronous code.",
      },
      {
        type: 'code',
        lang: 'javascript',
        code: `// ❌ Old way — callback hell (hard to read)
getUserById(1, (err, user) => {
  if (err) return handleError(err);
  getOrdersByUser(user.id, (err, orders) => {
    if (err) return handleError(err);
    sendEmail(user.email, orders, (err) => {
      if (err) return handleError(err);
      console.log('Done!');
    });
  });
});

// ✅ Modern way — async/await (clean and readable)
async function processUser(userId) {
  try {
    const user   = await getUserById(userId);
    const orders = await getOrdersByUser(user.id);
    await sendEmail(user.email, orders);
    console.log('Done!');
  } catch (error) {
    console.error('Something went wrong:', error.message);
  }
}

// In Express routes — mark the handler async:
app.get('/users/:id', async (req, res) => {
  try {
    const user = await db.users.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});`,
      },
      { type: 'section', label: 'what', title: 'npm — The Package Ecosystem' },
      {
        type: 'paragraph',
        text: "npm (Node Package Manager) gives you access to millions of open-source packages. Instead of building everything from scratch, you install packages.",
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npm init -y              # Create package.json (project config file)
npm install express      # Install a production dependency
npm install -D typescript # Install as dev dependency (only for development)
npm install express @nestjs/core  # Install multiple at once
npm uninstall express    # Remove a package
npm run start            # Run "start" script from package.json
node index.js            # Run a file directly`,
      },
      {
        type: 'tip',
        text: 'Always commit package.json and package-lock.json to git. Add node_modules/ to .gitignore — it can be 200MB+. Anyone cloning your repo just runs "npm install" to get all packages.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          "Node.js = JavaScript on the server (uses Chrome's V8 engine)",
          'Non-blocking I/O = handles many requests simultaneously without waiting',
          'async/await = modern way to write async code — looks synchronous, is non-blocking',
          'npm = package manager with 2M+ libraries — install, not reinvent',
          'Express = thin, minimal framework that makes routing and middleware easy',
          'req = what the client sent, res = what you send back',
          'NestJS is built on Node.js + Express — learning both makes NestJS click',
        ],
      },
    ],
  },

  {
    id: 'typescript',
    title: '3. TypeScript',
    day: 1,
    emoji: '🔷',
    content: [
      { type: 'section', label: 'what', title: 'What is TypeScript?' },
      {
        type: 'paragraph',
        text: "TypeScript is JavaScript with a type system added on top. You write TypeScript, and it compiles down to regular JavaScript that Node.js runs. The types only exist at development time — they disappear at runtime. But during development, they save enormous amounts of debugging time.",
      },
      {
        type: 'analogy',
        text: "📝 JavaScript is like writing with a pen — flexible but permanent mistakes. TypeScript is like writing with a pen that has autocorrect — it warns you before you make mistakes, suggests what comes next, and tells you when you are using the wrong word.",
      },
      { type: 'section', label: 'why', title: 'Why TypeScript for Backend?' },
      {
        type: 'bullets',
        items: [
          'Catch bugs before running code — type errors show as red underlines in VS Code',
          'Autocomplete everything — VS Code suggests method names, property names, and types',
          'Self-documenting — types tell the next developer exactly what data looks like',
          'Safer refactoring — rename a field and TypeScript shows every place that breaks',
          'Required by NestJS — all decorators rely on TypeScript metadata',
          'Industry standard — almost every serious Node.js project uses TypeScript today',
        ],
      },
      { type: 'section', label: 'example', title: 'Basic Types' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Primitive types
let name: string  = 'Alice';
let age: number   = 28;
let active: boolean = true;

// Array types
let tags: string[]  = ['developer', 'nodejs'];
let scores: number[] = [95, 87, 92];
let ids: Array<number> = [1, 2, 3]; // alternate syntax

// Union types — value can be more than one type
let id: string | number = 'abc-123';
id = 42; // also valid ✅

// Literal types — only specific values allowed
let status: 'active' | 'inactive' | 'banned' = 'active';
status = 'deleted'; // ❌ Error: not one of the allowed values

// Optional values
let nickname: string | undefined = undefined;
let bio: string | null = null;

// TypeScript catches mistakes immediately:
name = 42;     // ❌ Type 'number' is not assignable to type 'string'
age = 'hello'; // ❌ Type 'string' is not assignable to type 'number'`,
      },
      { type: 'section', label: 'example', title: 'Interfaces — Describing Object Shapes' },
      {
        type: 'paragraph',
        text: "An interface is a contract — it describes exactly what properties an object must have and their types. This is the most-used TypeScript feature in NestJS.",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `interface User {
  id: number;               // required
  name: string;             // required
  email: string;            // required
  role: 'admin' | 'user';   // required, only these two values
  age?: number;             // optional (? makes it optional)
  bio?: string;             // optional
}

// TypeScript checks every object:
const alice: User = {
  id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin',
  // age and bio are optional — fine to omit
};

// TypeScript catches mistakes:
const badUser: User = {
  id: 'not-a-number',  // ❌ id must be number
  name: 'Bob',
  // ❌ Missing required 'email' and 'role'
  role: 'superuser',   // ❌ 'superuser' not allowed
};

// Interfaces can extend other interfaces:
interface AdminUser extends User {
  permissions: string[];
  lastLogin: Date;
}`,
      },
      { type: 'section', label: 'example', title: 'Functions with Types' },
      {
        type: 'code',
        lang: 'typescript',
        code: `interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// Parameters AND return type are typed
function getProductById(products: Product[], id: number): Product | undefined {
  return products.find(p => p.id === id);
}

// Arrow function with types
const filterByCategory = (products: Product[], cat: string): Product[] => {
  return products.filter(p => p.category === cat);
};

// Async functions return Promise<T>
async function fetchProductFromDB(id: number): Promise<Product> {
  const row = await db.query('SELECT * FROM products WHERE id = ?', [id]);
  return row as Product;
}

// Optional parameter with a default value
function searchProducts(
  products: Product[],
  query: string,
  maxResults: number = 10,  // default value
): Product[] {
  return products
    .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, maxResults);
}`,
      },
      { type: 'section', label: 'example', title: 'Utility Types — Transform Interfaces' },
      {
        type: 'paragraph',
        text: "TypeScript has built-in utility types that create new types from existing ones. These are used constantly in NestJS for DTOs and service methods:",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

// Omit<T, K> — remove specific fields
type CreateUserInput = Omit<User, 'id'>;
// Result: { name, email, password, role } — id is auto-generated by server

type PublicUser = Omit<User, 'password'>;
// Result: { id, name, email, role } — never send passwords to clients!

// Partial<T> — make all fields optional (great for PATCH updates)
type UpdateUserInput = Partial<Omit<User, 'id'>>;
// Result: { name?, email?, password?, role? } — all optional

// Pick<T, K> — keep only specific fields
type UserSummary = Pick<User, 'id' | 'name'>;
// Result: { id, name } — just the essentials

// Record<K, V> — object with typed keys and values
type UserCache = Record<string, User>;
// { "abc123": User, "def456": User }`,
      },
      { type: 'section', label: 'example', title: 'Enums — Named Constants' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Enum — a named set of constant values
enum OrderStatus {
  PENDING    = 'pending',
  PROCESSING = 'processing',
  SHIPPED    = 'shipped',
  DELIVERED  = 'delivered',
  CANCELLED  = 'cancelled',
}

interface Order {
  id: number;
  status: OrderStatus;  // only valid OrderStatus values allowed
  total: number;
}

const myOrder: Order = {
  id: 1,
  status: OrderStatus.PENDING,  // ✅ use the enum, not the raw string
  total: 299.99,
};

// Safe switch on enum values:
function getStatusMessage(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.PENDING:   return '⏳ Waiting to be processed';
    case OrderStatus.SHIPPED:   return '🚚 On its way!';
    case OrderStatus.DELIVERED: return '✅ Delivered!';
    case OrderStatus.CANCELLED: return '❌ Cancelled';
    default:                    return 'Status unknown';
  }
}`,
      },
      { type: 'section', label: 'example', title: 'Classes and Decorators Preview' },
      {
        type: 'paragraph',
        text: "NestJS uses classes extensively — every controller, service, module, and DTO is a class. TypeScript makes classes much safer with access modifiers:",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `class UserService {
  private users: User[] = []; // private = only inside this class

  readonly maxUsers = 1000;  // readonly = cannot be reassigned

  // Constructor shorthand — declares AND assigns in one line:
  constructor(private readonly db: DatabaseService) {}
  // Equivalent to:
  // private readonly db: DatabaseService;
  // constructor(db: DatabaseService) { this.db = db; }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  async create(input: Omit<User, 'id'>): Promise<User> {
    const newUser: User = { id: Date.now(), ...input };
    this.users.push(newUser);
    return newUser;
  }
}`,
      },
      {
        type: 'tip',
        text: 'In VS Code, hover over any variable, function, or parameter to see its TypeScript type. This is your best learning tool when working with NestJS — you can always see what type is expected without reading docs.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'TypeScript = JavaScript + types. Compiles to JS — types disappear at runtime.',
          'Interfaces define object shapes — use them for every data structure',
          '? after a property name makes it optional',
          'Union types (string | number) let a value be one of several types',
          'Omit, Partial, Pick are utility types that create new types from existing ones',
          'Enums = named constants — use instead of raw magic strings like "pending"',
          'Constructor shorthand (private readonly x) declares and assigns simultaneously',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // DAY 2
  // ─────────────────────────────────────────
  {
    id: 'nestjs-intro',
    title: '4. NestJS Introduction',
    day: 2,
    emoji: '🐱',
    content: [
      { type: 'section', label: 'what', title: 'What is NestJS?' },
      {
        type: 'paragraph',
        text: "NestJS is a framework for building production-grade backend APIs with Node.js and TypeScript. It runs on top of Express and adds powerful structure, conventions, and built-in features that plain Express lacks.",
      },
      {
        type: 'analogy',
        text: "🏗️ Express is like getting a plot of land with raw bricks — powerful, totally flexible, but you design everything yourself. NestJS is like getting a plot of land with a blueprint, scaffolding, and pre-made sections — structured and opinionated, designed for teams building large apps.",
      },
      { type: 'section', label: 'why', title: 'Why NestJS Over Plain Express?' },
      {
        type: 'code',
        lang: 'text',
        code: `Express gives you:              NestJS gives you on top:
─────────────────────────       ────────────────────────────────────
✓ Routing                       ✓ Routing (organized in controllers)
✓ Middleware                    ✓ Middleware
✗ No standard structure         ✓ Module / Controller / Service pattern
✗ No built-in validation        ✓ Built-in validation (class-validator)
✗ No dependency injection       ✓ Full dependency injection system
✗ No API docs                   ✓ Swagger auto-docs (@nestjs/swagger)
✗ No auth helpers               ✓ Passport integration built-in
✗ No DB integration             ✓ TypeORM / Prisma modules included`,
      },
      { type: 'section', label: 'example', title: 'Installing and Creating a Project' },
      {
        type: 'code',
        lang: 'bash',
        code: `# Step 1: Install the NestJS CLI globally
npm install -g @nestjs/cli

# Step 2: Create a new project (choose npm when prompted)
nest new my-api

# Step 3: Navigate into the project
cd my-api

# Step 4: Start with hot-reload
npm run start:dev
# → Compiles TypeScript, starts server, watches for changes

# Step 5: Test it — visit http://localhost:3000
# You should see: "Hello World!"`,
      },
      { type: 'section', label: 'what', title: 'Project Structure Explained' },
      {
        type: 'code',
        lang: 'text',
        code: `my-api/
├── src/
│   ├── main.ts                ← Entry point. Bootstraps and starts the app.
│   ├── app.module.ts          ← Root module. Imports all feature modules.
│   ├── app.controller.ts      ← Handles HTTP requests for the root route.
│   ├── app.controller.spec.ts ← Unit tests for the controller.
│   └── app.service.ts         ← Business logic for the root route.
├── test/
│   └── app.e2e-spec.ts        ← End-to-end tests.
├── node_modules/              ← Installed packages (never commit!)
├── dist/                      ← Compiled JavaScript (auto-generated)
├── package.json
└── tsconfig.json`,
      },
      { type: 'section', label: 'example', title: 'main.ts — The Entry Point' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/main.ts — this is where the app starts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  // 1. Create the application
  const app = await NestFactory.create(AppModule);

  // 2. Enable global validation (add this now — saves you pain later)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   // Strip fields not in DTO
    transform: true,   // Auto-convert types (strings to numbers)
  }));

  // 3. Set global URL prefix: /api/products instead of /products
  app.setGlobalPrefix('api');

  // 4. Enable CORS so your frontend can call this API
  app.enableCors();

  // 5. Start listening
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(\`✅ App running on http://localhost:\${port}/api\`);
}

bootstrap();`,
      },
      { type: 'section', label: 'what', title: 'The NestJS CLI — Generate Everything' },
      {
        type: 'paragraph',
        text: "Instead of creating files manually, the CLI generates them with the correct structure and wiring:",
      },
      {
        type: 'code',
        lang: 'bash',
        code: `# Generate a complete feature in one command (recommended):
nest g resource products
# Creates: module, controller, service, DTOs, entity
# AND wires the module into AppModule automatically

# Or generate individual pieces:
nest g module    products   # → products/products.module.ts
nest g controller products  # → products/products.controller.ts
nest g service   products   # → products/products.service.ts

# Generate other building blocks:
nest g guard   auth         # authentication guard
nest g filter  http-exception  # exception filter
nest g middleware logger    # request logger

# Preview what would be created without creating it:
nest g resource orders --dry-run`,
      },
      {
        type: 'tip',
        text: 'Always use "nest g resource <name>" when starting a new feature — it generates everything and wires the module automatically. This single command saves 10+ minutes per feature.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'NestJS = structured Node.js framework built on Express with DI, validation, auth, docs',
          'CLI: nest g resource <name> generates a full module, controller, service, DTOs at once',
          'main.ts bootstraps the app — add global pipes, prefix, and CORS here once',
          'Use npm run start:dev during development for hot-reload',
          'Structure code in feature modules: one module per resource (products, users, orders)',
          'NestJS is opinionated — follow its patterns and your code stays consistent',
        ],
      },
    ],
  },

  {
    id: 'nestjs-core',
    title: '5. NestJS Core Concepts',
    day: 2,
    emoji: '⚙️',
    content: [
      { type: 'section', label: 'what', title: 'The Three Pillars: Modules, Controllers, Services' },
      {
        type: 'paragraph',
        text: "Everything in NestJS is organized around three building blocks. Understanding these is the key to understanding NestJS.",
      },
      {
        type: 'analogy',
        text: "🏢 Think of a company: Module = Department (HR, Sales, Engineering). Controller = Receptionist (takes requests and routes them). Service = The actual workers (do the real work).",
      },
      { type: 'section', label: 'what', title: 'Modules — The Organizers' },
      {
        type: 'paragraph',
        text: "A Module groups related functionality together. Every feature should have its own module. Modules declare which controllers and services they own.",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],  // Who handles requests?
  providers: [ProductsService],        // Who provides services?
  exports: [ProductsService],          // Share service with other modules?
})
export class ProductsModule {}

// Then register in app.module.ts:
// imports: [ProductsModule]`,
      },
      { type: 'section', label: 'what', title: 'Controllers — The Request Handlers' },
      {
        type: 'paragraph',
        text: "Controllers receive incoming HTTP requests and return responses. They're thin — they should not contain business logic, just receive requests and call the service.",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/products.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')  // All routes start with /products
export class ProductsController {
  
  // Dependency Injection — NestJS provides the service automatically
  constructor(private readonly productsService: ProductsService) {}

  @Get()           // GET /products
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')      // GET /products/123
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);  // + converts string to number
  }

  @Post()          // POST /products
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')   // DELETE /products/123
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}`,
      },
      { type: 'section', label: 'what', title: 'Services — The Business Logic' },
      {
        type: 'paragraph',
        text: "Services contain the actual logic — database calls, calculations, data transformations. They can be injected into controllers or other services.",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()  // Makes this class available for injection
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new NotFoundException(\`Product #\${id} not found\`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct = { id: Date.now(), ...createProductDto };
    this.products.push(newProduct);
    return newProduct;
  }
}`,
      },
      { type: 'section', label: 'what', title: 'Dependency Injection' },
      {
        type: 'paragraph',
        text: "Dependency Injection (DI) sounds scary but it's simple: instead of creating instances yourself, you declare what you need in the constructor and NestJS provides it.",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Without DI (you manage instances manually — messy!)
class ProductsController {
  private productsService = new ProductsService(new DatabaseService());
}

// With DI (NestJS handles it — clean!)
class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // NestJS automatically creates and provides ProductsService
}`,
      },
      {
        type: 'tip',
        text: 'Generate a full module with all files using one command: "nest g resource products" — it generates module, controller, service, DTOs, and entities at once!',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Module = organizes related controllers and services',
          'Controller = handles HTTP requests (thin layer, no business logic)',
          'Service = contains business logic, database calls',
          '@Injectable() marks a class for dependency injection',
          'Controllers inject services via constructor (DI)',
          'Use "nest g resource <name>" to generate a full CRUD module instantly',
        ],
      },
    ],
  },

  {
    id: 'request-handling',
    title: '6. Request Handling',
    day: 2,
    emoji: '📨',
    content: [
      { type: 'section', label: 'what', title: 'What is Request Handling?' },
      {
        type: 'paragraph',
        text: "Request handling is how your API reads data from incoming requests. A request can contain data in different places: the URL path, the query string, the request body, or headers.",
      },
      { type: 'section', label: 'example', title: 'Route Parameters — Data in the URL Path' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// URL: GET /products/42
@Get(':id')
findOne(@Param('id') id: string) {
  return this.productsService.findOne(+id);
}

// Multiple params: GET /categories/electronics/products/42
@Get(':category/products/:id')
findByCategory(
  @Param('category') category: string,
  @Param('id') id: string,
) {
  return { category, id };
}`,
      },
      { type: 'section', label: 'example', title: 'Query Parameters — Filtering & Sorting' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// URL: GET /products?category=electronics&limit=10&page=2
@Get()
findAll(
  @Query('category') category?: string,
  @Query('limit') limit?: string,
  @Query('page') page?: string,
) {
  return this.productsService.findAll({
    category,
    limit: limit ? parseInt(limit) : 10,
    page: page ? parseInt(page) : 1,
  });
}

// Or get all query params as an object
@Get()
findAll(@Query() query: Record<string, string>) {
  console.log(query); // { category: 'electronics', limit: '10', page: '2' }
}`,
      },
      { type: 'section', label: 'example', title: 'Request Body — POST/PUT Data' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// POST /products — body: { "name": "Keyboard", "price": 79 }
@Post()
create(@Body() createProductDto: CreateProductDto) {
  return this.productsService.create(createProductDto);
}

// PATCH /products/42 — body: { "price": 69 }
@Patch(':id')
update(
  @Param('id') id: string,
  @Body() updateProductDto: UpdateProductDto,
) {
  return this.productsService.update(+id, updateProductDto);
}`,
      },
      { type: 'section', label: 'example', title: 'Headers & Response Control' },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { Controller, Get, Headers, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  
  // Read a specific header
  @Get('secure')
  getSecure(@Headers('authorization') auth: string) {
    console.log('Token:', auth);
    return { message: 'Secure endpoint' };
  }

  // Custom HTTP status code (default is 200)
  @Post()
  @HttpCode(HttpStatus.CREATED)  // 201
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  // Full control over response (use sparingly)
  @Get('download')
  downloadFile(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/csv');
    res.send('id,name,price\n1,Laptop,999');
  }
}`,
      },
      {
        type: 'important',
        text: 'Avoid using @Res() unless absolutely necessary — like streaming a file. Using it bypasses NestJS interceptors and exception filters, breaking your global error handling.',
      },
      { type: 'section', label: 'example', title: 'Where Request Data Lives — Quick Reference' },
      {
        type: 'code',
        lang: 'text',
        code: `Request: GET /products/42?color=red HTTP/1.1
         Authorization: Bearer eyJ...
         { "name": "Laptop" }

  ① Route param   → @Param('id')          → "42"
  ② Query string  → @Query('color')       → "red"
  ③ Header        → @Headers('authorization') → "Bearer eyJ..."
  ④ Body          → @Body()               → { name: "Laptop" }

Note: query params ALWAYS arrive as strings.
  @Query('limit') limit: string  → "10"  (not the number 10)
  Convert manually: parseInt(limit) or use transform: true in ValidationPipe`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          '@Param("id") — reads /products/:id from the URL path',
          '@Query("page") — reads /products?page=2 from the query string',
          '@Body() — reads the full JSON request body (POST, PATCH, PUT)',
          '@Body("field") — reads a single field from the body',
          '@Headers("key") — reads a specific HTTP request header',
          '@HttpCode(201) — overrides the default status code for a route',
          'Query params always arrive as strings — convert to number/boolean as needed',
        ],
      },
    ],
  },

  {
    id: 'dto-validation',
    title: '7. DTO & Validation',
    day: 2,
    emoji: '✅',
    content: [
      { type: 'section', label: 'what', title: 'What is a DTO?' },
      {
        type: 'paragraph',
        text: "DTO stands for Data Transfer Object. It's a class that defines the shape of data coming into your API. Think of it as a form template — it specifies what fields are expected and what rules they must follow.",
      },
      {
        type: 'analogy',
        text: "📋 A DTO is like a job application form. It defines exactly what information is required (name, email) vs optional (phone), and what format is acceptable (email must have @, age must be a number).",
      },
      { type: 'section', label: 'example', title: 'Setting Up Validation' },
      {
        type: 'code',
        lang: 'bash',
        code: `# Install validation packages
npm install class-validator class-transformer`,
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/main.ts — Enable validation globally
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // This one line enables validation for all endpoints
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Remove unknown properties from body
    forbidNonWhitelisted: true, // Throw error if unknown properties sent
    transform: true,        // Auto-convert types (string "123" → number 123)
  }));
  
  await app.listen(3000);
}`,
      },
      { type: 'section', label: 'example', title: 'Creating DTOs with Validation' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/dto/create-product.dto.ts
import { IsString, IsNumber, IsBoolean, IsOptional, Min, MaxLength, IsEnum } from 'class-validator';

export enum ProductCategory {
  ELECTRONICS = 'electronics',
  CLOTHING = 'clothing',
  FOOD = 'food',
}

export class CreateProductDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)  // Price can't be negative
  price: number;

  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsBoolean()
  @IsOptional()
  inStock?: boolean = true;
}`,
      },
      { type: 'section', label: 'example', title: 'UpdateDto — Partial Updates' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/dto/update-product.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// PartialType makes ALL fields from CreateProductDto optional
// Perfect for PATCH endpoints where users update only some fields
export class UpdateProductDto extends PartialType(CreateProductDto) {}

// Now you can PATCH with just: { "price": 49 }
// Without needing to send name, category, etc.`,
      },
      { type: 'section', label: 'example', title: 'What Happens with Invalid Data' },
      {
        type: 'code',
        lang: 'json',
        code: `// Sending: POST /products with invalid body
{
  "name": 123,
  "price": -50,
  "category": "invalid-category"
}

// NestJS automatically returns 400 Bad Request:
{
  "statusCode": 400,
  "message": [
    "name must be a string",
    "price must not be less than 0",
    "category must be one of the following values: electronics, clothing, food"
  ],
  "error": "Bad Request"
}`,
      },
      {
        type: 'tip',
        text: 'Common validators: @IsString(), @IsNumber(), @IsEmail(), @IsUrl(), @IsDate(), @IsBoolean(), @IsArray(), @IsOptional(), @Min(n), @Max(n), @MinLength(n), @MaxLength(n), @IsEnum(Enum).',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'DTO = class that defines and validates incoming request data',
          'Use class-validator decorators like @IsString(), @IsEmail()',
          'Enable ValidationPipe globally in main.ts',
          'whitelist: true removes any extra fields not in the DTO',
          'transform: true auto-converts types (great for numbers in params)',
          'Use PartialType(CreateDto) to make an update DTO with all optional fields',
        ],
      },
      { type: 'section', label: 'example', title: 'Common Validators Quick Reference' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// String
@IsString()      @IsEmail()     @IsUrl()      @IsUUID()
@MinLength(8)    @MaxLength(100)
@Matches(/[A-Z]/, { message: 'Must contain uppercase letter' })

// Number
@IsNumber()   @IsInt()   @IsPositive()   @Min(0)   @Max(100)

// Boolean & Array
@IsBoolean()
@IsArray()   @ArrayMinSize(1)   @ArrayNotEmpty()

// Optional / Required
@IsOptional()     // field can be omitted entirely
@IsNotEmpty()     // field must be present and not empty string/null

// Enum
enum Role { ADMIN = 'admin', USER = 'user' }
@IsEnum(Role)

// Nested object validation
@ValidateNested()
@Type(() => AddressDto)
address: AddressDto;`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'DTO = class that defines and validates incoming request data',
          'Install: npm install class-validator class-transformer',
          'Enable globally in main.ts: new ValidationPipe({ whitelist: true, transform: true })',
          'whitelist: true strips unknown fields silently — good for security',
          'transform: true auto-converts query param strings to numbers/booleans',
          'PartialType(CreateDto) creates an update DTO where every field is optional',
          'Add { message: "..." } to any decorator for user-friendly validation errors',
        ],
      },
    ],
  },

  {
    id: 'exception-handling',
    title: '8. Exception Handling',
    day: 2,
    emoji: '🚨',
    content: [
      { type: 'section', label: 'what', title: 'What is Exception Handling?' },
      {
        type: 'paragraph',
        text: "Exception handling is how you deal with errors gracefully. Instead of your server crashing or sending ugly error messages, you return clean, informative responses that help API consumers understand what went wrong.",
      },
      { type: 'section', label: 'example', title: 'Built-in HTTP Exceptions' },
      {
        type: 'paragraph',
        text: 'NestJS comes with ready-to-use exception classes for common HTTP errors:',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import {
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

// In your service:
findOne(id: number) {
  const user = this.users.find(u => u.id === id);
  
  if (!user) {
    throw new NotFoundException(\`User #\${id} not found\`);
    // Returns: 404 { "statusCode": 404, "message": "User #5 not found", "error": "Not Found" }
  }
  
  return user;
}

create(dto: CreateUserDto) {
  const exists = this.users.find(u => u.email === dto.email);
  
  if (exists) {
    throw new ConflictException('Email already registered');
    // Returns: 409 { "statusCode": 409, "message": "Email already registered" }
  }
  
  // ...create user
}`,
      },
      { type: 'section', label: 'example', title: 'Global Exception Filter' },
      {
        type: 'paragraph',
        text: "A global exception filter catches all unhandled errors and formats them consistently. This prevents your server from returning raw stack traces to users.",
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/filters/http-exception.filter.ts
import {
  ExceptionFilter, Catch, ArgumentsHost,
  HttpException, HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()  // Catches ALL exceptions
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    // Consistent error response format
    response.status(status).json({
      statusCode: status,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}

// Register globally in main.ts:
// app.useGlobalFilters(new GlobalExceptionFilter());`,
      },
      {
        type: 'tip',
        text: 'Always throw NestJS HTTP exceptions in services, not raw JavaScript errors. This ensures the correct HTTP status code is returned automatically.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Throw NotFoundException (404), BadRequestException (400), etc. from services',
          'NestJS handles converting these to proper HTTP responses automatically',
          'Global exception filter provides one place to handle all errors consistently',
          'Never return error details like stack traces to the client in production',
          'Always include a meaningful message in your exceptions',
        ],
      },
      { type: 'section', label: 'example', title: 'Exception Response Format' },
      {
        type: 'code',
        lang: 'json',
        code: `// throw new NotFoundException('Product #42 not found')
{
  "statusCode": 404,
  "message": "Product #42 not found",
  "error": "Not Found"
}

// throw new BadRequestException(['email invalid', 'name too short'])
{
  "statusCode": 400,
  "message": ["email invalid", "name too short"],
  "error": "Bad Request"
}

// throw new ConflictException({ code: 'DUPLICATE_EMAIL', message: '...' })
{
  "statusCode": 409,
  "message": { "code": "DUPLICATE_EMAIL", "message": "..." },
  "error": "Conflict"
}`,
      },
      {
        type: 'important',
        text: 'Never throw generic new Error("message") in NestJS services — all generic errors become 500 Internal Server Error regardless of the actual cause. Use NestJS HTTP exceptions for the correct status code every time.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Always throw NestJS HTTP exceptions — they set the correct status code automatically',
          'NotFoundException (404), BadRequestException (400), ConflictException (409), etc.',
          'Throw from services, not controllers — keep controllers clean',
          'Global exception filter catches ALL unhandled errors (including unexpected DB crashes)',
          'Log 5xx errors with full stack traces; do NOT log 4xx errors (they are expected)',
          'Create custom exception classes for meaningful domain-specific errors',
          'Never expose stack traces or internal error details to API clients in production',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // DAY 3
  // ─────────────────────────────────────────
  {
    id: 'middleware-pipes-guards',
    title: '9. Middleware, Pipes, Guards & Interceptors',
    day: 3,
    emoji: '🔧',
    content: [
      { type: 'section', label: 'what', title: 'The Request Pipeline' },
      {
        type: 'paragraph',
        text: "Before a request reaches your controller, it can pass through several layers. Each layer can inspect, modify, or block the request. Think of it as security checkpoints at an airport.",
      },
      {
        type: 'analogy',
        text: "✈️ Airport check-in process: Middleware = check-in counter (logs/prepares). Guards = passport control (authenticate). Pipes = baggage scanner (validate/transform). Interceptors = duty-free shop (add things before/after). Controller = your gate (destination).",
      },
      { type: 'section', label: 'what', title: 'Middleware — First in Line' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/middleware/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
    next(); // Must call next() to continue to next layer!
  }
}

// Apply in AppModule:
// configure(consumer: MiddlewareConsumer) {
//   consumer.apply(LoggerMiddleware).forRoutes('*');
// }`,
      },
      { type: 'section', label: 'what', title: 'Guards — Authentication & Authorization' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/guards/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new UnauthorizedException('Please login first');
    }
    
    // Verify token (simplified — real implementation uses JwtService)
    const isValid = this.validateToken(token);
    if (!isValid) {
      throw new UnauthorizedException('Invalid token');
    }
    
    return true;
  }
  
  private validateToken(token: string): boolean {
    return token === 'valid-token'; // Simplified for example
  }
}

// Use on a single route:
// @UseGuards(AuthGuard)
// @Get('profile')

// Use on entire controller:
// @UseGuards(AuthGuard)
// @Controller('profile')`,
      },
      { type: 'section', label: 'what', title: 'Interceptors — Before & After' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/interceptors/transform.interceptor.ts
// Wraps all responses in a standard format
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({
        success: true,
        data,                              // Your actual response data
        timestamp: new Date().toISOString(),
      }))
    );
  }
}

// Before: { "id": 1, "name": "Alice" }
// After:  { "success": true, "data": { "id": 1, "name": "Alice" }, "timestamp": "..." }`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Middleware → runs first, great for logging, cors, request prep',
          'Guards → run before the route handler, used for auth/authorization',
          'Pipes → run after guards, used for validation and transformation',
          'Interceptors → wrap the route handler, great for response formatting',
          'Apply to single route: @UseGuards(), @UsePipes(), @UseInterceptors()',
          'Apply globally in main.ts: app.useGlobalGuards(), app.useGlobalInterceptors()',
        ],
      },
      { type: 'section', label: 'example', title: 'Quick Application Reference' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Apply to a single route:
@Get('profile')
@UseGuards(JwtAuthGuard)
@UseInterceptors(CacheInterceptor)
getProfile() { ... }

// Apply to entire controller:
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController { ... }

// Apply globally in main.ts (affects every route):
app.useGlobalGuards(new JwtAuthGuard(jwtService));
app.useGlobalInterceptors(new TransformInterceptor());
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
app.useGlobalFilters(new GlobalExceptionFilter());

// Middleware is applied in AppModule (different API):
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Pipeline order: Middleware → Guard → Pipe → Controller → Interceptor → Filter',
          'Middleware: full req/res access, must call next(). For logging, CORS, rate limit.',
          'Guard: returns true/false. Throws UnauthorizedException if denied. For auth.',
          'Pipe: validates and transforms input. ValidationPipe is the built-in one.',
          'Interceptor: wraps the handler before AND after. For response formatting, caching.',
          'Exception Filter: catches all errors. For consistent error JSON format.',
          'Apply with @UseGuards(), @UseInterceptors() per route or controller; globally in main.ts',
        ],
      },
    ],
  },

  {
    id: 'database',
    title: '10. Database Integration',
    day: 3,
    emoji: '🗄️',
    content: [
      { type: 'section', label: 'what', title: 'What is TypeORM?' },
      {
        type: 'paragraph',
        text: "TypeORM is an Object-Relational Mapper (ORM). It lets you work with databases using TypeScript classes instead of writing raw SQL queries. You define your data as classes (entities), and TypeORM creates and manages the database tables for you.",
      },
      {
        type: 'analogy',
        text: "🗺️ SQL is like giving GPS coordinates. ORM is like saying 'take me to the nearest coffee shop.' Same destination, much more human-friendly.",
      },
      { type: 'section', label: 'example', title: 'Setup TypeORM with SQLite' },
      {
        type: 'code',
        lang: 'bash',
        code: `# Install TypeORM + SQLite (use PostgreSQL for production)
npm install @nestjs/typeorm typeorm sqlite3

# For PostgreSQL production setup:
# npm install @nestjs/typeorm typeorm pg`,
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',  // File-based, great for dev
      entities: [Product],
      synchronize: true,  // Auto-creates tables (dev only!)
    }),
  ],
})
export class AppModule {}`,
      },
      { type: 'section', label: 'example', title: 'Defining an Entity (Database Table)' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/entities/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('products')  // Creates a 'products' table
export class Product {
  @PrimaryGeneratedColumn()
  id: number;  // Auto-incrementing primary key

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: true })
  inStock: boolean;

  @CreateDateColumn()
  createdAt: Date;  // Auto-set when record is created
}`,
      },
      { type: 'section', label: 'example', title: 'Using Repository in Service' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException(\`Product #\${id} not found\`);
    return product;
  }

  create(dto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(dto);
    return this.productRepository.save(product);
  }

  async update(id: number, dto: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}

// Register in products.module.ts:
// imports: [TypeOrmModule.forFeature([Product])]`,
      },
      {
        type: 'important',
        text: 'Never use synchronize: true in production! It can destroy data. Instead, use TypeORM migrations: npx typeorm migration:generate and npx typeorm migration:run.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'TypeORM = library to interact with databases using TypeScript classes',
          '@Entity() marks a class as a database table',
          '@Column() marks a property as a database column',
          '@PrimaryGeneratedColumn() = auto-incrementing ID',
          'Repository pattern: find, findOne, create, save, update, delete',
          'Use SQLite for development, PostgreSQL for production',
        ],
      },
      { type: 'section', label: 'example', title: 'Repository Methods Quick Reference' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Find
await repo.find();                                    // all rows
await repo.find({ where: { inStock: true } });        // filtered
await repo.findOne({ where: { id: 42 } });            // null if missing
await repo.findOneOrFail({ where: { id: 42 } });      // throws if missing

// Create and save (two-step)
const entity = repo.create(dto);   // build instance (not saved yet)
await repo.save(entity);           // INSERT, returns with id filled

// Update
await repo.update(42, { price: 799 }); // UPDATE by id
await repo.save({ ...entity, price: 799 }); // full save

// Delete
await repo.delete(42);          // by id
await repo.remove(entity);      // by loaded entity

// Pagination
const [items, total] = await repo.findAndCount({
  skip: (page - 1) * limit,
  take: limit,
  order: { createdAt: 'DESC' },
});`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'TypeORM maps TypeScript classes to database tables via decorators',
          '@Entity() = table, @Column() = column, @PrimaryGeneratedColumn() = auto-increment id',
          '@CreateDateColumn() and @UpdateDateColumn() = auto-managed timestamps',
          '@InjectRepository(Product) injects the Repository for an entity',
          'repo.create(dto) builds an instance; repo.save() persists it and returns with id',
          'Relations: @OneToMany / @ManyToOne — use relations: ["user"] to load them',
          'Never use synchronize: true in production — use TypeORM migrations instead',
        ],
      },
    ],
  },

  {
    id: 'swagger',
    title: '11. API Documentation (Swagger)',
    day: 3,
    emoji: '📖',
    content: [
      { type: 'section', label: 'what', title: 'What is Swagger?' },
      {
        type: 'paragraph',
        text: "Swagger (OpenAPI) is a tool that automatically generates interactive API documentation from your code. Instead of writing docs manually, you add decorators to your code and Swagger creates a beautiful, testable documentation UI.",
      },
      {
        type: 'analogy',
        text: "📚 Swagger is like a restaurant menu that's generated automatically from the kitchen's recipe list. No manual work, always up to date.",
      },
      { type: 'section', label: 'example', title: 'Setup Swagger' },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install @nestjs/swagger`,
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/main.ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for my awesome backend')
    .setVersion('1.0')
    .addBearerAuth()  // Adds JWT auth button to UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Docs available at: http://localhost:3000/api

  await app.listen(3000);
}`,
      },
      { type: 'section', label: 'example', title: 'Documenting Controllers and DTOs' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Controller with Swagger decorators
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('products')         // Groups endpoints under "products" in the UI
@Controller('products')
export class ProductsController {

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Returns list of all products' })
  @Get()
  findAll() { ... }

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @Post()
  create(@Body() dto: CreateProductDto) { ... }
}

// DTO with Swagger decorators
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Product name', example: 'Wireless Keyboard' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Product description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Price in USD', example: 79.99 })
  @IsNumber()
  price: number;
}`,
      },
      {
        type: 'tip',
        text: 'Visit /api after setup to see your live documentation. You can test all endpoints directly from the browser — no Postman needed!',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Swagger auto-generates API docs from your code',
          '@ApiTags() groups endpoints in the UI',
          '@ApiOperation() adds a description for each endpoint',
          '@ApiProperty() documents DTO fields',
          '@ApiBearerAuth() enables JWT token input in the Swagger UI',
          'Available at /api (or whatever path you choose)',
        ],
      },
    ],
  },

  {
    id: 'auth',
    title: '12. Authentication & Authorization',
    day: 3,
    emoji: '🔐',
    content: [
      { type: 'section', label: 'what', title: 'Authentication vs Authorization' },
      {
        type: 'paragraph',
        text: "These two words are often confused. Authentication = Who are you? (Login). Authorization = What are you allowed to do? (Permissions).",
      },
      {
        type: 'analogy',
        text: "🏨 Hotel analogy: Authentication = checking in and getting your key card (proving who you are). Authorization = your key card only opens your floor's rooms (defining what you can access).",
      },
      { type: 'section', label: 'what', title: 'JWT — JSON Web Tokens' },
      {
        type: 'paragraph',
        text: "JWT is the most popular way to handle authentication in REST APIs. After login, the server gives the user a token (a long string). The user sends this token with every future request as proof of identity.",
      },
      {
        type: 'code',
        lang: 'text',
        code: `JWT Structure: header.payload.signature

Example Token:
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJlbWFpbCI6ImFsaWNlQGV4YW1wbGUuY29tIn0.XYZ...

Decoded payload:
{
  "sub": "123",              ← User ID
  "email": "alice@example.com",
  "role": "admin",
  "iat": 1716000000,         ← Issued at
  "exp": 1716086400          ← Expires at (24 hours later)
}`,
      },
      { type: 'section', label: 'example', title: 'Auth Setup' },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/passport-jwt @types/bcrypt`,
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    // Hash password before storing (NEVER store plain text passwords!)
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return this.usersService.create({ ...dto, password: hashedPassword });
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');

    // Create JWT token with user data in payload
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}`,
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Protecting routes with @UseGuards
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('products')
export class ProductsController {
  
  @Get()
  findAll() { // Public — no guard
    return this.productsService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)  // Must be logged in
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard) // Must be logged in AND be admin
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}`,
      },
      {
        type: 'important',
        text: 'NEVER store plain text passwords. Always use bcrypt.hash() before saving and bcrypt.compare() to verify. Store your JWT secret in environment variables, never hardcode it.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Authentication = login (who are you?), Authorization = permissions (what can you do?)',
          'JWT = a signed token that proves identity without server-side sessions',
          'Always hash passwords with bcrypt before storing',
          'Store JWT_SECRET in .env, never in code',
          '@UseGuards(JwtAuthGuard) protects a route',
          'Use role-based guards for admin/user permissions',
        ],
      },
      { type: 'section', label: 'example', title: 'Using the Swagger UI' },
      {
        type: 'bullets',
        items: [
          'Visit http://localhost:3000/api to open the interactive documentation',
          'Click "Authorize" → paste your JWT token → all requests include it automatically',
          'Expand any endpoint → click "Try it out" → fill the form → "Execute"',
          'See the real request URL, curl command, and full response in the browser',
          'Download the OpenAPI JSON spec at /api-json for Postman import or SDK generation',
          'Share the /api URL with your frontend team — they can explore without asking you',
        ],
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          '@nestjs/swagger auto-generates interactive docs from your code decorators',
          'DocumentBuilder sets title, description, version, and auth method',
          '@ApiTags("products") groups all controller endpoints under one section in the UI',
          '@ApiOperation({ summary: "..." }) adds a one-line description per endpoint',
          '@ApiProperty() documents DTO fields with type, example value, and description',
          '@ApiBearerAuth() + .addBearerAuth() in DocumentBuilder adds the JWT authorize button',
          'Always in sync with your code — no separate doc file to maintain',
        ],
      },
    ],
  },

  {
    id: 'config',
    title: '13. Configuration Management',
    day: 3,
    emoji: '⚙️',
    content: [
      { type: 'section', label: 'what', title: 'What is Configuration Management?' },
      {
        type: 'paragraph',
        text: "Configuration management is how you handle settings that change between environments (development, staging, production). Database URLs, API keys, ports — these should never be hardcoded in your source code.",
      },
      {
        type: 'analogy',
        text: "🎚️ Think of .env files as a settings panel that's different for each environment. Development has the local database URL. Production has the live database URL. Same code, different settings.",
      },
      { type: 'section', label: 'example', title: 'Environment Variables with @nestjs/config' },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install @nestjs/config`,
      },
      {
        type: 'code',
        lang: 'text',
        code: `# .env file (at project root — NEVER commit this to git!)
PORT=3000
DATABASE_URL=sqlite:./database.sqlite
JWT_SECRET=your-super-secret-key-change-this
JWT_EXPIRES_IN=24h
NODE_ENV=development`,
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `// app.module.ts
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,     // Available everywhere without importing
      envFilePath: '.env', // Load .env file
    }),
  ],
})
export class AppModule {}

// Using ConfigService anywhere in your app:
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }
}`,
      },
      {
        type: 'important',
        text: 'Add .env to your .gitignore file immediately. Share a .env.example file (with placeholder values) with your team instead. Leaked API keys and database passwords are a major security risk.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Never hardcode secrets — use environment variables',
          '.env file stores secrets locally (never commit to git)',
          '@nestjs/config reads .env automatically',
          'ConfigService.get("KEY") retrieves values in your code',
          'isGlobal: true means you only import ConfigModule once',
          'Create .env.example with placeholder values for teammates',
        ],
      },
      { type: 'section', label: 'example', title: 'Using ConfigService in Practice' },
      {
        type: 'code',
        lang: 'typescript',
        code: `@Injectable()
export class ProductsService {
  constructor(private config: ConfigService) {}

  getUploadLimit(): number {
    return this.config.get<number>('MAX_UPLOAD_SIZE_MB', 10); // default 10
  }

  async callExternalApi() {
    const url    = this.config.get<string>('EXTERNAL_API_URL');
    const apiKey = this.config.get<string>('EXTERNAL_API_KEY');
    return fetch(url, { headers: { 'X-API-Key': apiKey } });
  }
}

// TypeORM reads DB config from environment:
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject:  [ConfigService],
  useFactory: (c: ConfigService) => ({
    type:        'postgres',
    host:         c.get('DB_HOST'),
    port:         c.get<number>('DB_PORT', 5432),
    username:     c.get('DB_USER'),
    password:     c.get('DB_PASSWORD'),
    database:     c.get('DB_NAME'),
    synchronize:  c.get('NODE_ENV') !== 'production',
  }),
})`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Environment variables separate config from code — different values per environment',
          '@nestjs/config + ConfigModule.forRoot({ isGlobal: true }) — set up once, use anywhere',
          'ConfigService.get<string>("KEY") — reads typed values from environment',
          'ConfigService.get<number>("PORT", 3000) — second arg is the default value',
          '.env holds real secrets — add to .gitignore immediately and never commit it',
          '.env.example has placeholder values — always commit this for teammates',
          'Validate all required vars at startup so you fail fast, not mysteriously later',
        ],
      },
    ],
  },

  {
    id: 'logging',
    title: '14. Logging & Monitoring',
    day: 3,
    emoji: '📊',
    content: [
      { type: 'section', label: 'what', title: 'Why Logging Matters' },
      {
        type: 'paragraph',
        text: "Logging is recording what happens in your application. When something breaks at 3 AM, logs are your only way to understand what happened. Good logging is the difference between a 5-minute fix and a 5-hour investigation.",
      },
      { type: 'section', label: 'example', title: 'NestJS Built-in Logger' },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
  // ProductsService.name = 'ProductsService' (auto-generated)

  findAll() {
    this.logger.log('Fetching all products');      // [ProductsService] Fetching all products
    return this.products;
  }

  findOne(id: number) {
    this.logger.debug(\`Looking for product #\${id}\`);
    const product = this.products.find(p => p.id === id);
    
    if (!product) {
      this.logger.warn(\`Product #\${id} not found\`);  // Yellow warning
      throw new NotFoundException(...);
    }
    
    return product;
  }

  async create(dto: CreateProductDto) {
    try {
      const product = await this.productRepository.save(dto);
      this.logger.log(\`Product created: \${product.id}\`);
      return product;
    } catch (error) {
      this.logger.error(\`Failed to create product\`, error.stack); // Red error
      throw new InternalServerErrorException();
    }
  }
}`,
      },
      { type: 'section', label: 'what', title: 'Log Levels' },
      {
        type: 'bullets',
        items: [
          'error — Something broke, needs immediate attention 🔴',
          'warn — Something unexpected happened but app still works 🟡',
          'log — Normal application events (request received, data saved) 🟢',
          'debug — Detailed info for debugging (show in dev, hide in prod) 🔵',
          'verbose — Very detailed info (rarely used) ⚪',
        ],
      },
      {
        type: 'tip',
        text: 'For production, consider using Winston or Pino logging libraries. They support JSON format logs, log rotation, and integration with log management services like Datadog or CloudWatch.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          "Always log critical operations: user login, data creation/deletion, errors",
          "Use Logger class per service: new Logger(ServiceName.name)",
          "Log levels: error > warn > log > debug > verbose",
          "Include relevant IDs in log messages for easier debugging",
          "Never log sensitive data: passwords, payment info, tokens",
          "Use structured logging (JSON) in production for searchability",
        ],
      },
      { type: 'section', label: 'example', title: 'What Good Logging Looks Like' },
      {
        type: 'code',
        lang: 'typescript',
        code: `@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  async placeOrder(userId: number, dto: CreateOrderDto) {
    this.logger.log(\`User #\${userId} placing order (\${dto.items.length} items)\`);
    try {
      const order = await this.repo.save(this.repo.create({ userId, ...dto }));
      this.logger.log(\`Order #\${order.id} created. Total: $\${order.total}\`);
      return order;
    } catch (error) {
      this.logger.error(\`Failed for user #\${userId}\`, error.stack);
      throw new InternalServerErrorException('Failed to place order');
    }
  }
}

// NEVER log sensitive data:
// this.logger.log(\`password=\${password}\`);  // ❌
// this.logger.log(\`token=\${jwtToken}\`);     // ❌`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'new Logger(ClassName.name) creates a scoped logger with the class name prefix',
          'Log levels: error (crash) > warn (unexpected) > log (normal) > debug (detail)',
          'Log important business events: user registered, order placed, payment processed',
          'Always include the stack trace on errors: logger.error("msg", error.stack)',
          'Never log passwords, JWT tokens, payment data, emails, or any PII',
          'Request logging middleware gives you one log entry per HTTP request automatically',
          'Use Winston or Pino in production for structured JSON logs and log aggregation',
        ],
      },
    ],
  },

  {
    id: 'testing',
    title: '15. Testing APIs',
    day: 3,
    emoji: '🧪',
    content: [
      { type: 'section', label: 'what', title: 'Why Test Your API?' },
      {
        type: 'paragraph',
        text: "Tests are automated checks that verify your code works correctly. They save you from manually testing every feature after every change. Think of tests as a safety net — they catch bugs before your users do.",
      },
      { type: 'section', label: 'what', title: 'Types of Tests' },
      {
        type: 'bullets',
        items: [
          'Unit Tests — test a single function or service in isolation (fastest)',
          'Integration Tests — test how services work together',
          'E2E Tests — test the full request/response cycle (closest to real usage)',
        ],
      },
      { type: 'section', label: 'example', title: 'Unit Testing a Service' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/products/products.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { NotFoundException } from '@nestjs/common';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should return all products', () => {
    const products = service.findAll();
    expect(products).toBeDefined();
    expect(Array.isArray(products)).toBe(true);
  });

  it('should throw NotFoundException when product not found', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });

  it('should create a product', () => {
    const dto = { name: 'Test Product', price: 99, category: 'electronics' };
    const product = service.create(dto as any);
    expect(product.name).toBe('Test Product');
    expect(product.id).toBeDefined();
  });
});`,
      },
      { type: 'section', label: 'example', title: 'E2E Testing with Supertest' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// test/products.e2e-spec.ts
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('Products (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('GET /products returns 200', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect(res => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  it('POST /products creates a product', () => {
    return request(app.getHttpServer())
      .post('/products')
      .send({ name: 'New Product', price: 49, category: 'electronics' })
      .expect(201)
      .expect(res => {
        expect(res.body.name).toBe('New Product');
      });
  });

  afterAll(async () => await app.close());
});`,
      },
      {
        type: 'code',
        lang: 'bash',
        code: `# Run unit tests
npm run test

# Run tests in watch mode (re-runs on file change)
npm run test:watch

# Run e2e tests
npm run test:e2e

# See code coverage (how much of your code is tested)
npm run test:cov`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Tests catch bugs before users do — write them from the start',
          'NestJS uses Jest for testing (comes pre-configured)',
          'Unit tests are fast — test services in isolation',
          'E2E tests test real HTTP requests — most realistic but slowest',
          'describe() groups tests, it() / test() defines one test',
          'expect() asserts what the result should be',
        ],
      },
      { type: 'section', label: 'example', title: 'Jest Assertions Quick Reference' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Equality
expect(value).toBe(42);              // strict ===
expect(obj).toEqual({ id: 1 });      // deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeNull();
expect(value).toBeDefined();

// Arrays & Strings
expect(arr).toHaveLength(3);
expect(str).toContain('keyword');
expect(arr).toContain('item');

// Async — must await:
await expect(service.findOne(999))
  .rejects.toThrow(NotFoundException);

await expect(service.create(dto))
  .resolves.toEqual({ id: expect.any(Number), ...dto });

// Mock assertions
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith(42, 'test');
expect(mockFn).toHaveBeenCalledTimes(2);

// Mock return values
jest.fn().mockReturnValue('hello')           // sync
jest.fn().mockResolvedValue({ id: 1 })       // async
jest.fn().mockResolvedValueOnce(null)        // first call only`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Unit tests: test one method in isolation. Mock all dependencies with jest.fn().',
          'E2E tests: real HTTP requests to a running NestJS app using Supertest.',
          'describe() groups tests. it() / test() defines one test case.',
          'expect(x).toBe(), .toEqual(), .toThrow(), .toHaveBeenCalledWith() — core assertions',
          'jest.fn().mockResolvedValue(x) mocks an async function to return x',
          'mockFn.mockResolvedValueOnce(null) simulates "not found" for one specific call',
          'npm run test:cov shows code coverage — aim for 70%+ on services',
        ],
      },
    ],
  },

  {
    id: 'api-design',
    title: '16. API Design Best Practices',
    day: 3,
    emoji: '🎨',
    content: [
      { type: 'section', label: 'what', title: 'Why API Design Matters' },
      {
        type: 'paragraph',
        text: "A well-designed API is easy to understand and use. A poorly designed one confuses developers and leads to bugs. These are the conventions that most professional APIs follow.",
      },
      { type: 'section', label: 'what', title: 'URL Design — Use Nouns, Not Verbs' },
      {
        type: 'code',
        lang: 'text',
        code: `# ❌ Bad — verbs in URL
GET  /getProducts
POST /createProduct
PUT  /updateProduct/5
DELETE /deleteProduct/5

# ✅ Good — nouns + HTTP methods
GET    /products         → get all
POST   /products         → create one
GET    /products/5       → get one
PATCH  /products/5       → update one
DELETE /products/5       → delete one

# Nested resources (relationships)
GET    /users/42/orders          → all orders for user 42
POST   /users/42/orders          → create order for user 42
GET    /users/42/orders/7        → specific order for user 42`,
      },
      { type: 'section', label: 'what', title: 'Versioning Your API' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Option 1: URL versioning (most common, most visible)
// /api/v1/products
// /api/v2/products (new version with breaking changes)

// In NestJS:
app.setGlobalPrefix('api/v1');

// Option 2: Header versioning
// X-API-Version: 2

// Always version your public API from day 1 —
// much harder to add versioning later!`,
      },
      { type: 'section', label: 'what', title: 'Pagination for Large Lists' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Standard pagination response format
{
  "data": [...],          // The actual items
  "meta": {
    "total": 100,         // Total number of items
    "page": 2,            // Current page
    "limit": 10,          // Items per page
    "totalPages": 10      // Total pages
  }
}

// Endpoint: GET /products?page=2&limit=10&sort=price&order=asc

// Implementation:
async findAll(page = 1, limit = 10) {
  const [data, total] = await this.repo.findAndCount({
    skip: (page - 1) * limit,
    take: limit,
  });
  return {
    data,
    meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
  };
}`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Use nouns for URLs (/products), HTTP verbs for actions (GET, POST)',
          'Use plural nouns: /products not /product',
          'Use kebab-case for multi-word paths: /user-profiles',
          'Always use HTTPS in production',
          'Version your API from day 1: /api/v1/...',
          'Always paginate large list endpoints to prevent performance issues',
          'Keep response format consistent across all endpoints',
        ],
      },
      { type: 'section', label: 'example', title: 'Design Checklist at a Glance' },
      {
        type: 'code',
        lang: 'text',
        code: `✅ URL design:
  /products         plural nouns
  /user-profiles    kebab-case multi-word
  POST /orders/7/cancel  non-CRUD action as sub-resource

✅ JSON:
  { "firstName": "Alice", "createdAt": "2024-03-15T09:30:00Z" }
  camelCase fields, ISO 8601 UTC dates

✅ Status codes:
  GET → 200,  POST → 201,  DELETE → 204

✅ Pagination response:
  { "data": [...], "meta": { "total": 257, "page": 2, "totalPages": 26 } }

✅ Versioning:
  /api/v1/products  bump to v2 on breaking changes`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Nouns in URLs (/products), HTTP methods are the verbs — never /getProducts',
          'Plural nouns: /products not /product. kebab-case: /user-profiles.',
          'camelCase JSON fields: { "firstName": "Alice", "createdAt": "..." }',
          'ISO 8601 dates: "2024-03-15T09:30:00Z" — always UTC, always the same format',
          'Version from day one: /api/v1/... prevents breaking existing integrations later',
          'Always paginate list endpoints — return { data, meta: { total, page, totalPages } }',
          'Consistent error shape via Global Exception Filter — predictability is kindness',
        ],
      },
    ],
  },

  {
    id: 'vibe-coding',
    title: '17. AI-Assisted Development',
    day: 3,
    emoji: '🤖',
    content: [
      { type: 'section', label: 'what', title: 'What is Vibe Coding?' },
      {
        type: 'paragraph',
        text: 'Vibe coding is the practice of using AI tools (like Claude, ChatGPT, GitHub Copilot) to write, explain, debug, and generate code faster. As a developer, you direct the AI with clear instructions and then review, understand, and customize what it produces.',
      },
      {
        type: 'important',
        text: "Vibe coding amplifies your skills — it doesn't replace understanding. You still need to know what good code looks like to review what the AI produces. This training gives you that foundation.",
      },
      { type: 'section', label: 'what', title: 'Effective AI Prompting for NestJS' },
      {
        type: 'code',
        lang: 'text',
        code: `# ❌ Vague prompt (bad results):
"write me a nestjs api"

# ✅ Specific prompt (great results):
"Write a NestJS service called OrdersService with TypeORM.
It should have these methods:
- findAll(userId: number): returns all orders for a user
- findOne(id: number): returns one order by ID, throws NotFoundException if not found
- create(userId: number, dto: CreateOrderDto): creates a new order
- updateStatus(id: number, status: OrderStatus): updates order status

Use these TypeScript types:
- OrderStatus enum: PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED
- Order entity has: id, userId, items (JSON), total (decimal), status, createdAt

Add proper error handling and logging."`,
      },
      { type: 'section', label: 'example', title: 'Useful Prompt Templates' },
      {
        type: 'code',
        lang: 'text',
        code: `# Generate a complete NestJS resource:
"Generate a complete NestJS resource for [feature name].
Include: entity, DTOs (create + update), service with full CRUD,
controller with all REST endpoints, and module registration.
Use TypeORM with PostgreSQL. Add class-validator decorators to DTOs."

# Debug an error:
"I'm getting this error in my NestJS app: [paste error].
Here's my service code: [paste code].
What's wrong and how do I fix it?"

# Explain existing code:
"Explain this NestJS code step by step, as if I'm a beginner:
[paste code]"

# Improve existing code:
"Review this NestJS service for best practices.
Suggest improvements for error handling, performance, and TypeScript types:
[paste code]"`,
      },
      { type: 'section', label: 'what', title: 'AI Tools for Backend Development' },
      {
        type: 'bullets',
        items: [
          '🤖 Claude (claude.ai) — Best for long, complex code generation and explanation',
          '🤖 ChatGPT (chatgpt.com) — Great for quick answers and code generation',
          '💻 GitHub Copilot — Inline code completion in VS Code (subscription required)',
          '🔍 Cursor — AI-powered VS Code fork, excellent for coding sessions',
          '📚 Codeium — Free Copilot alternative with good NestJS support',
        ],
      },
      { type: 'section', label: 'what', title: 'Golden Rules of Vibe Coding' },
      {
        type: 'bullets',
        items: [
          'Always read and understand the generated code before using it',
          'Test AI-generated code — AI makes mistakes, especially with complex logic',
          'Give context: share your existing code, error messages, and constraints',
          'Iterate: start with a basic version, then ask AI to improve it',
          'Ask AI to explain code you don\'t understand — great for learning',
          'Use AI for boilerplate, focus your own energy on business logic',
        ],
      },
      { type: 'section', label: 'example', title: 'Good vs Bad AI Prompts' },
      {
        type: 'code',
        lang: 'text',
        code: `❌ Too vague:
  "write me a nestjs service"
  "help with auth"

✅ Specific and complete:
  "Write a NestJS service called OrdersService using TypeORM with SQLite.
   The Order entity has: id (auto), userId (number), total (decimal),
   status (enum: pending/shipped/delivered), createdAt (auto).

   Implement:
   - findAll(userId: number): Promise<Order[]>
   - findOne(id: number, userId: number): Promise<Order>  throws 404 if not found
   - create(userId: number, dto: CreateOrderDto): Promise<Order>
   - cancel(id: number): Promise<Order>  throws 400 if status is not pending

   Use @Injectable, throw NestJS HTTP exceptions, add Logger."

❌ AI makes mistakes on:
  Security checks, complex joins, edge cases, compliance rules

✅ Always:
  Read, test, and understand AI code before shipping it`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Specific prompts produce specific code — include entity shape, method names, error handling',
          'Always read, understand, and test AI-generated code before shipping it',
          'Use AI for boilerplate and structure; focus your own energy on business logic',
          'Paste the full error + your code into AI for fast debugging explanations',
          'Ask AI to explain unfamiliar patterns — great for accelerating learning',
          'Best tools: Claude (complex codegen), Copilot (inline), Cursor (full IDE experience)',
          'The best developers use AI as a copilot, not an autopilot',
        ],
      },
    ],
  },

  {
    id: 'debugging',
    title: '18. Debugging',
    day: 3,
    emoji: '🔍',
    content: [
      { type: 'section', label: 'what', title: 'Debugging NestJS Applications' },
      {
        type: 'paragraph',
        text: "Debugging is the skill of finding and fixing bugs. Having good debugging skills is what separates senior developers from juniors. Most bugs come from a few common sources.",
      },
      { type: 'section', label: 'example', title: 'Common Issues and Fixes' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Issue 1: "Cannot GET /products" — Route not working
// Fix: Check that the module is imported in app.module.ts
// Check the @Controller('products') and @Get() decorators

// Issue 2: Validation not working
// Fix: Make sure ValidationPipe is enabled in main.ts:
app.useGlobalPipes(new ValidationPipe({ transform: true }));

// Issue 3: Dependency injection error
// Fix: Make sure the service is in providers[] of its module
// @Module({ providers: [ProductsService] })

// Issue 4: TypeORM "entity was not found in the database"
// Fix: Make sure entity is registered in TypeOrmModule.forRoot({ entities: [...] })
// Or use autoLoadEntities: true

// Issue 5: JWT "invalid signature"
// Fix: Make sure JWT_SECRET is the same everywhere
// Don't generate a new secret on every server restart`,
      },
      { type: 'section', label: 'example', title: 'VS Code Debugger Setup' },
      {
        type: 'code',
        lang: 'json',
        code: `// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug NestJS",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "start:debug"],
      "sourceMaps": true,
      "console": "integratedTerminal"
    }
  ]
}
// Now press F5 to start with debugger
// Set breakpoints by clicking left of line numbers`,
      },
      {
        type: 'tip',
        text: 'The fastest way to debug: console.log() the data at each step. Add console.log("SERVICE REACHED", { id }) inside your service method. If it logs, the issue is in the service. If not, the issue is in routing.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Read the full error message — it usually tells you exactly what\'s wrong',
          'Check NestJS startup logs — import errors appear on startup',
          'Use console.log() to trace where data goes wrong',
          'VS Code debugger with breakpoints is more powerful than console.log',
          'Search the exact error message in Google — someone has had it before',
          'Paste error + your code into an AI tool for quick explanations',
        ],
      },
      { type: 'section', label: 'example', title: 'VS Code Debugger Setup' },
      {
        type: 'code',
        lang: 'json',
        code: `// .vscode/launch.json — place in project root
{
  "version": "0.2.0",
  "configurations": [{
    "type": "node",
    "request": "launch",
    "name": "Debug NestJS",
    "runtimeExecutable": "npm",
    "runtimeArgs": ["run", "start:debug"],
    "sourceMaps": true,
    "console": "integratedTerminal",
    "restart": true
  }]
}`,
      },
      {
        type: 'paragraph',
        text: "With this file in place: press F5 in VS Code → click in the left margin of any line to set a red dot (breakpoint) → send a request → execution pauses at the breakpoint → hover over any variable to see its live value → F10 to step over, F11 to step into.",
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Read the FULL error message — the cause and fix are almost always clearly stated',
          'NestJS startup errors appear in the terminal when you run npm run start:dev',
          'Add console.log at each step to trace exactly where the data goes wrong',
          'VS Code debugger + breakpoints lets you pause and inspect any variable live',
          '"Cannot GET /route" → routing issue — check @Controller, @Get spelling, AppModule',
          '"Cannot resolve dependencies" → service missing from providers[] in the module',
          'When stuck: read error → add logs → Google exact error → AI with full code → ask teammate',
        ],
      },
    ],
  },

  {
    id: 'performance',
    title: '19. Performance Basics',
    day: 3,
    emoji: '⚡',
    content: [
      { type: 'section', label: 'what', title: 'Performance Basics for APIs' },
      {
        type: 'paragraph',
        text: "A fast API makes users happy. Most performance issues come from a few known patterns. Understanding these helps you avoid them from the start.",
      },
      { type: 'section', label: 'what', title: 'Caching — The #1 Speed Trick' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Install: npm install cache-manager @nestjs/cache-manager
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { UseInterceptors } from '@nestjs/common';

// app.module.ts
@Module({
  imports: [
    CacheModule.register({
      ttl: 60,   // Cache for 60 seconds
      max: 100,  // Max 100 cached items
    }),
  ],
})

// In controller — cache the entire endpoint response
@Controller('products')
export class ProductsController {
  @Get()
  @UseInterceptors(CacheInterceptor)  // Response cached for 60s
  findAll() {
    return this.productsService.findAll();  // DB only called once per 60s
  }
}`,
      },
      { type: 'section', label: 'what', title: 'Database Performance Tips' },
      {
        type: 'bullets',
        items: [
          'Add database indexes on columns you frequently query (email, userId)',
          'Only select the columns you need (select specific fields)',
          'Use pagination — never return thousands of rows at once',
          'Avoid N+1 queries — use TypeORM relations with eager/lazy loading',
          'Use connection pooling (TypeORM does this by default)',
        ],
      },
      { type: 'section', label: 'example', title: 'Compression & Rate Limiting' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// Compress responses (reduces data size by 60-80%)
npm install compression @types/compression

// main.ts
import * as compression from 'compression';
app.use(compression());

// Rate limiting — prevent abuse
npm install @nestjs/throttler

// app.module.ts
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,   // 1 minute window
      limit: 100,   // Max 100 requests per minute per IP
    }]),
  ],
})`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'Caching prevents repeated expensive operations (DB calls, API calls)',
          'Paginate list endpoints — never return all rows from a database',
          'Add DB indexes on columns used in WHERE, ORDER BY, JOIN',
          'Compression reduces response size significantly',
          'Rate limiting prevents abuse and protects your server',
          "Don't over-optimize early — measure first, then optimize",
        ],
      },
      { type: 'section', label: 'example', title: 'Fixing the N+1 Query Problem' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// The most common performance killer in NestJS + TypeORM:

// ❌ N+1: 1 query for orders + 1 more per order = 101 queries for 100 orders!
const orders = await orderRepo.find();
for (const order of orders) {
  order.user = await userRepo.findOne({ where: { id: order.userId } });
}

// ✅ Fix 1: TypeORM relations option (1 JOIN query total)
const orders = await orderRepo.find({ relations: ['user'] });

// ✅ Fix 2: QueryBuilder with explicit JOIN (same result, more control)
const orders = await orderRepo
  .createQueryBuilder('order')
  .leftJoinAndSelect('order.user', 'user')
  .where('order.status = :status', { status: 'pending' })
  .getMany(); // always 1 query — fast regardless of row count`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'Measure first — log slow operations before assuming what to optimize',
          'N+1 problem: never query inside a loop — use relations: ["field"] or QueryBuilder JOIN',
          'DB indexes on WHERE, ORDER BY, JOIN columns — huge speedup for large tables',
          'Caching: @nestjs/cache-manager + CacheInterceptor caches endpoint responses',
          'Rate limiting: ThrottlerModule + ThrottlerGuard limits requests per IP per window',
          'Compression: app.use(compression()) cuts response size by 60-80% in one line',
          'TypeORM query logging (logging: true) shows actual SQL so you can spot slow queries',
        ],
      },
    ],
  },

  {
    id: 'deployment',
    title: '20. Deployment Basics',
    day: 3,
    emoji: '🚀',
    content: [
      { type: 'section', label: 'what', title: 'Getting Your API to Production' },
      {
        type: 'paragraph',
        text: "Deployment means making your API accessible to the internet. There are many ways to deploy a NestJS app. We'll cover the simplest and most cost-effective options for beginners.",
      },
      { type: 'section', label: 'example', title: 'Prepare for Production' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// 1. Build your NestJS app
npm run build
// Creates a dist/ folder with compiled JavaScript

// 2. Run in production mode
npm run start:prod
// Runs the optimized built version

// 3. Required .env variables for production
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_SECRET=long-random-secret-change-this
NODE_ENV=production
PORT=3000`,
      },
      { type: 'section', label: 'example', title: 'Deploy to Railway (Recommended for Beginners)' },
      {
        type: 'code',
        lang: 'bash',
        code: `# Railway.app — Free tier available, super simple
# 1. Push your code to GitHub
# 2. Go to railway.app → New Project → Deploy from GitHub
# 3. Select your repository
# 4. Add environment variables in Railway dashboard
# 5. Railway auto-detects Node.js and deploys!

# Your API will be live at: https://your-app.railway.app

# Other free options:
# - Render.com (similar to Railway)
# - Fly.io (more control, steeper learning curve)
# - Heroku (free tier removed, but easy to use)`,
      },
      { type: 'section', label: 'example', title: 'Docker — Package Your App' },
      {
        type: 'code',
        lang: 'dockerfile',
        code: `# Dockerfile — put in project root
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]`,
      },
      {
        type: 'code',
        lang: 'bash',
        code: `# Build and run with Docker
docker build -t my-api .
docker run -p 3000:3000 --env-file .env my-api`,
      },
      { type: 'section', label: 'example', title: 'Pre-Deployment Checklist' },
      {
        type: 'bullets',
        items: [
          '✅ All secrets in environment variables (not in code)',
          '✅ NODE_ENV=production set',
          '✅ synchronize: false in TypeORM (use migrations instead)',
          '✅ Remove console.log debug statements',
          '✅ Enable CORS for your frontend domain',
          '✅ Enable rate limiting',
          '✅ Enable compression',
          '✅ Set up health check endpoint GET /health',
          '✅ Ensure npm run build works without errors',
        ],
      },
      {
        type: 'tip',
        text: 'Add a GET /health endpoint that returns { status: "ok", uptime: process.uptime() }. Most deployment platforms use this to verify your app is running.',
      },
      { type: 'section', label: 'keypoints', title: 'Key Points' },
      {
        type: 'bullets',
        items: [
          'npm run build compiles TypeScript to JavaScript for production',
          'Store ALL secrets in environment variables, never in code',
          'Railway and Render offer free Node.js hosting for beginners',
          'Docker packages your app and all dependencies into one container',
          'Never use synchronize: true in production (data loss risk)',
          'Set up a /health endpoint for monitoring',
        ],
      },
      { type: 'section', label: 'example', title: 'Health Endpoint + Pre-Deploy Checklist' },
      {
        type: 'code',
        lang: 'typescript',
        code: `// src/app.controller.ts
@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status:    'ok',
      uptime:    Math.floor(process.uptime()),   // seconds since start
      timestamp: new Date().toISOString(),
      version:   process.env.npm_package_version,
    };
  }
}

// Pre-deploy checklist:
// ✅ NODE_ENV=production in environment variables
// ✅ synchronize: false in TypeORM
// ✅ All secrets in env vars (no hardcoded values in code)
// ✅ npm run build completes without TypeScript errors
// ✅ GET /health returns 200
// ✅ GlobalExceptionFilter installed
// ✅ Rate limiting enabled (ThrottlerModule)
// ✅ Compression enabled
// ✅ CORS limited to your frontend domain`,
      },
      { type: 'section', label: 'keypoints', title: 'Key Points (expanded)' },
      {
        type: 'bullets',
        items: [
          'npm run build compiles TypeScript → dist/. npm run start:prod runs the compiled app.',
          'All secrets in environment variables on the hosting platform — never hardcoded in code.',
          'synchronize: false in production — use TypeORM migrations for schema changes.',
          'Railway and Render: connect GitHub repo → set env vars → deploy in minutes (free tier).',
          'Docker packages your app + Node.js runtime into a portable container for any server.',
          'GET /health endpoint is required by every deployment platform for uptime monitoring.',
          'Test production build locally first: NODE_ENV=production npm run start:prod.',
        ],
      },
    ],
  },
];

export const SIDEBAR_SECTIONS = [
  {
    label: '📅 Day 1 — Foundations',
    day: 1 as const,
    topics: TOPICS.filter(t => t.day === 1),
  },
  {
    label: '📅 Day 2 — NestJS Core',
    day: 2 as const,
    topics: TOPICS.filter(t => t.day === 2),
  },
  {
    label: '📅 Day 3 — Advanced & Production',
    day: 3 as const,
    topics: TOPICS.filter(t => t.day === 3),
  },
];
