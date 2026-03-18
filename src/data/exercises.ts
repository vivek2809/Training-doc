// ─────────────────────────────────────────────────────────────────────────────
// EXERCISE DATA — All 3 Days
// ─────────────────────────────────────────────────────────────────────────────

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Task {
  id: string;
  text: string;           // What to do
  hint?: string;          // Optional hint shown on demand
  solution?: string;      // Code/text solution shown on demand
  solutionLang?: string;  // Language for solution code block
}

export interface Exercise {
  id: string;
  day: 1 | 2 | 3;
  topicId: string;        // Which topic this exercise belongs to
  topicEmoji: string;
  title: string;
  difficulty: Difficulty;
  description: string;    // Short intro to the exercise
  estimatedTime: string;  // e.g. "10–15 min"
  tasks: Task[];
  bonusChallenge?: string; // Optional extra challenge for fast learners
}

// ─────────────────────────────────────────
// DAY 1 EXERCISES
// ─────────────────────────────────────────

const DAY1_EXERCISES: Exercise[] = [
  // ── Backend & API Fundamentals ──────────
  {
    id: 'ex-api-1',
    day: 1,
    topicId: 'backend-fundamentals',
    topicEmoji: '🌐',
    title: 'Understand HTTP Methods',
    difficulty: 'beginner',
    description: 'Match the right HTTP method to real-world actions. No coding required — just solidify your mental model of REST APIs.',
    estimatedTime: '5 min',
    tasks: [
      {
        id: 't1',
        text: 'A user logs in by submitting their email and password. Which HTTP method is used?',
        hint: 'You are sending data to create a new session / token.',
        solution: 'POST — because you are creating a new resource (a login session / token). The body contains the email and password.',
      },
      {
        id: 't2',
        text: 'A user opens their profile page at /users/42. Which HTTP method is used?',
        hint: 'The user is just reading data, not changing anything.',
        solution: 'GET — because the user is only reading/fetching data. No data is being created or changed.',
      },
      {
        id: 't3',
        text: 'A user updates their username. Which method should the endpoint use — PUT or PATCH?',
        hint: 'PUT replaces the entire resource. PATCH updates just the specified fields.',
        solution: 'PATCH — because only the username is being changed, not the entire user object. Use PUT only when you replace the entire resource.',
      },
      {
        id: 't4',
        text: 'Design the REST endpoints for a simple Blog API. Write out: Get all posts, Get one post, Create post, Update post, Delete post.',
        hint: 'Use plural nouns for the resource name and the correct HTTP method for each.',
        solution: `GET    /posts        → list all posts
GET    /posts/:id    → get one post
POST   /posts        → create a post
PATCH  /posts/:id    → update a post
DELETE /posts/:id    → delete a post`,
        solutionLang: 'text',
      },
    ],
    bonusChallenge: 'Design endpoints for a nested resource: comments that belong to a post. Example: how would you GET all comments for post #5?',
  },

  {
    id: 'ex-api-2',
    day: 1,
    topicId: 'backend-fundamentals',
    topicEmoji: '🌐',
    title: 'Read HTTP Status Codes',
    difficulty: 'beginner',
    description: 'A solid understanding of status codes saves hours of debugging. Match these real-world scenarios to the right code.',
    estimatedTime: '5 min',
    tasks: [
      {
        id: 't1',
        text: 'Your API successfully creates a new user. What status code do you return?',
        hint: 'There is a specific code for "resource created" — it is not 200.',
        solution: '201 Created — use this when a new resource is successfully created (POST requests). 200 OK is for successful GET/PATCH/DELETE.',
      },
      {
        id: 't2',
        text: 'The user sends a POST request to /users but forgets to include the required "email" field. What do you return?',
        hint: 'The client made a mistake — they sent wrong/incomplete data.',
        solution: '400 Bad Request — the client sent invalid or incomplete data. This is a client-side error.',
      },
      {
        id: 't3',
        text: 'Someone tries to access GET /admin/dashboard without being logged in. What do you return?',
        hint: 'They are not authenticated — the server doesn\'t know who they are.',
        solution: '401 Unauthorized — the request requires authentication. The user needs to log in first.',
      },
      {
        id: 't4',
        text: 'A logged-in user (with role "user") tries to DELETE /admin/users/5. What do you return?',
        hint: 'They are logged in (authenticated) but don\'t have permission (not authorized).',
        solution: '403 Forbidden — the user is authenticated (logged in) but does not have permission to perform this action. Use 401 for "not logged in", 403 for "logged in but not allowed".',
      },
    ],
  },

  // ── Node.js ──────────────────────────────
  {
    id: 'ex-node-1',
    day: 1,
    topicId: 'nodejs',
    topicEmoji: '💚',
    title: 'Your First HTTP Server',
    difficulty: 'beginner',
    description: 'Build a basic HTTP server using Node.js built-in modules. No frameworks — just raw Node.js.',
    estimatedTime: '15 min',
    tasks: [
      {
        id: 't1',
        text: 'Create a file called server.js. Use the built-in "http" module to create a server that listens on port 3000.',
        hint: 'Use: const http = require("http"); then http.createServer(...).listen(3000)',
        solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`,
        solutionLang: 'javascript',
      },
      {
        id: 't2',
        text: 'Update the server to return JSON instead of plain text. Return: { "message": "Hello Backend!" }',
        hint: 'Change Content-Type to "application/json" and use JSON.stringify() to convert the object.',
        solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello Backend!' }));
});

server.listen(3000, () => console.log('Running on port 3000'));`,
        solutionLang: 'javascript',
      },
      {
        id: 't3',
        text: 'Add basic routing: return different JSON for GET /users and a 404 error for all other routes.',
        hint: 'Check req.url and req.method inside the request handler.',
        solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3000, () => console.log('Running on port 3000'));`,
        solutionLang: 'javascript',
      },
      {
        id: 't4',
        text: 'Test your server using your browser (for GET) and Postman (for checking headers). Confirm the Content-Type header is "application/json".',
        hint: 'In Postman, send a GET request to http://localhost:3000/users. Check the "Headers" tab in the response.',
        solution: 'In the Postman response, under the Headers tab, you should see: Content-Type: application/json. The body should show the JSON array.',
      },
    ],
    bonusChallenge: 'Add a POST /users route that reads the request body and logs the received data. Remember: req.body doesn\'t exist in raw Node.js — you need to collect data chunks manually.',
  },

  {
    id: 'ex-node-2',
    day: 1,
    topicId: 'nodejs',
    topicEmoji: '💚',
    title: 'Express REST API',
    difficulty: 'beginner',
    description: 'Build a proper REST API using Express.js with multiple routes, query params, and JSON responses.',
    estimatedTime: '25 min',
    tasks: [
      {
        id: 't1',
        text: 'Create a new folder, run npm init -y, install Express, and create index.js with a basic Express server on port 3000.',
        hint: 'npm install express — then const express = require("express"); const app = express();',
        solution: `// index.js
const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON request bodies

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

app.listen(3000, () => console.log('Server on port 3000'));`,
        solutionLang: 'javascript',
      },
      {
        id: 't2',
        text: 'Add an in-memory array of 4 products (id, name, price, category). Create GET /products to return all products.',
        hint: 'Define the array above the routes. Use res.json(products) to return it.',
        solution: `const products = [
  { id: 1, name: 'Laptop',   price: 999,  category: 'electronics' },
  { id: 2, name: 'Mouse',    price: 29,   category: 'electronics' },
  { id: 3, name: 'Notebook', price: 5,    category: 'stationery'  },
  { id: 4, name: 'Pen',      price: 2,    category: 'stationery'  },
];

app.get('/products', (req, res) => {
  res.json(products);
});`,
        solutionLang: 'javascript',
      },
      {
        id: 't3',
        text: 'Create GET /products/:id that returns one product by ID. Return 404 with an error message if not found.',
        hint: 'req.params.id is a string — convert to number with parseInt() or the + operator.',
        solution: `app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: \`Product #\${id} not found\` });
  }

  res.json(product);
});`,
        solutionLang: 'javascript',
      },
      {
        id: 't4',
        text: 'Add a query param filter: GET /products?category=electronics should return only electronics products.',
        hint: 'Read the query param with req.query.category. If it exists, filter the array.',
        solution: `app.get('/products', (req, res) => {
  const { category } = req.query;
  
  if (category) {
    const filtered = products.filter(p => p.category === category);
    return res.json(filtered);
  }
  
  res.json(products);
});`,
        solutionLang: 'javascript',
      },
      {
        id: 't5',
        text: 'Add POST /products that accepts a JSON body and adds a new product to the array. Return 201 with the new product.',
        hint: 'The body arrives in req.body (works because of app.use(express.json())). Generate an ID with Date.now().',
        solution: `app.post('/products', (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body,          // spread name, price, category from body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});`,
        solutionLang: 'javascript',
      },
    ],
    bonusChallenge: 'Add DELETE /products/:id that removes a product from the array. Return 204 No Content on success.',
  },

  // ── TypeScript ───────────────────────────
  {
    id: 'ex-ts-1',
    day: 1,
    topicId: 'typescript',
    topicEmoji: '🔷',
    title: 'TypeScript Interfaces & Types',
    difficulty: 'beginner',
    description: 'Practice defining interfaces and writing typed functions — the two most important TypeScript skills for backend development.',
    estimatedTime: '20 min',
    tasks: [
      {
        id: 't1',
        text: 'Define a User interface with: id (number), name (string), email (string), role ("admin" | "user"), createdAt (Date), and optional bio (string).',
        hint: 'Use the | operator for union types. Use ? for optional fields.',
        solution: `interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  bio?: string;         // ? = optional
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Write a function getUserDisplayName(user: User): string that returns "name (role)" — e.g. "Alice (admin)".',
        hint: 'Use template literals: `${user.name} (${user.role})`',
        solution: `function getUserDisplayName(user: User): string {
  return \`\${user.name} (\${user.role})\`;
}

// Test:
const user: User = { id: 1, name: 'Alice', email: 'a@b.com', role: 'admin', createdAt: new Date() };
console.log(getUserDisplayName(user)); // "Alice (admin)"`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Write a typed function filterByRole(users: User[], role: User["role"]): User[] that returns only users with the specified role.',
        hint: 'User["role"] is a TypeScript trick that reuses the role type from the User interface — it equals "admin" | "user".',
        solution: `function filterByRole(users: User[], role: User['role']): User[] {
  return users.filter(u => u.role === role);
}

// Usage:
const admins = filterByRole(allUsers, 'admin');`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Create a type CreateUserInput using Omit<User, "id" | "createdAt"> so that id and createdAt are excluded (they are auto-generated).',
        hint: 'Omit<T, K> creates a type without the specified keys. Use | to omit multiple keys.',
        solution: `// Remove id and createdAt — those are set by the server
type CreateUserInput = Omit<User, 'id' | 'createdAt'>;

// Now CreateUserInput has: name, email, role, bio?
function createUser(input: CreateUserInput): User {
  return {
    id: Date.now(),
    createdAt: new Date(),
    ...input,
  };
}`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Create a generic function findById<T extends { id: number }>(items: T[], id: number): T | undefined. This should work for any array of objects that have an id field.',
  },

  {
    id: 'ex-ts-2',
    day: 1,
    topicId: 'typescript',
    topicEmoji: '🔷',
    title: 'TypeScript with Express',
    difficulty: 'intermediate',
    description: 'Combine TypeScript types with your Express API to build a type-safe backend.',
    estimatedTime: '25 min',
    tasks: [
      {
        id: 't1',
        text: 'Install TypeScript and Express types: npm install typescript ts-node @types/node @types/express --save-dev. Create tsconfig.json.',
        hint: 'Run: npx tsc --init to generate tsconfig.json. Make sure "strict": true is enabled.',
        solution: `// tsconfig.json (key settings)
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}`,
        solutionLang: 'json',
      },
      {
        id: 't2',
        text: 'Create src/types.ts with a Product interface (id, name, price, category, inStock). Export it.',
        hint: 'Use the export keyword before the interface.',
        solution: `// src/types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Create src/app.ts. Import the Product interface and use it to type your in-memory products array and route handlers.',
        hint: 'Type the array as Product[]. Type req.body in POST route as Omit<Product, "id">.',
        solution: `// src/app.ts
import express, { Request, Response } from 'express';
import { Product } from './types';

const app = express();
app.use(express.json());

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics', inStock: true },
];

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.post('/products', (req: Request, res: Response) => {
  const body: Omit<Product, 'id'> = req.body;
  const newProduct: Product = { id: Date.now(), ...body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(3000, () => console.log('Running on port 3000'));`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Run your TypeScript app using ts-node: npx ts-node src/app.ts. Test GET /products and POST /products in Postman.',
        hint: 'Add a start script to package.json: "start": "ts-node src/app.ts"',
        solution: `// package.json scripts section:
{
  "scripts": {
    "start": "ts-node src/app.ts",
    "build": "tsc",
    "start:prod": "node dist/app.js"
  }
}`,
        solutionLang: 'json',
      },
    ],
    bonusChallenge: 'Add full type safety to all routes: type req.params, req.query, and res.json() calls. Explore the Request<Params, ResBody, ReqBody, Query> generic type from @types/express.',
  },
];

// ─────────────────────────────────────────
// DAY 2 EXERCISES
// ─────────────────────────────────────────

const DAY2_EXERCISES: Exercise[] = [
  // ── NestJS Intro ────────────────────────
  {
    id: 'ex-nest-intro-1',
    day: 2,
    topicId: 'nestjs-intro',
    topicEmoji: '🐱',
    title: 'Create Your First NestJS App',
    difficulty: 'beginner',
    description: 'Get NestJS running and explore the generated project structure.',
    estimatedTime: '15 min',
    tasks: [
      {
        id: 't1',
        text: 'Install the NestJS CLI globally and create a new project called "my-api".',
        hint: 'npm install -g @nestjs/cli — then nest new my-api',
        solution: `# Install CLI globally
npm install -g @nestjs/cli

# Create project (choose npm when asked)
nest new my-api

# Move into the project
cd my-api

# Start the dev server
npm run start:dev`,
        solutionLang: 'bash',
      },
      {
        id: 't2',
        text: 'Open the project in VS Code and explore all 5 generated files in src/. Write a comment next to each file explaining its role.',
        hint: 'The files are: main.ts, app.module.ts, app.controller.ts, app.service.ts, app.controller.spec.ts',
        solution: `src/
├── main.ts              ← Entry point: creates & starts the NestJS app
├── app.module.ts        ← Root module: registers all controllers & services
├── app.controller.ts    ← Handles HTTP requests (routes)
├── app.service.ts       ← Business logic (methods the controller calls)
└── app.controller.spec.ts ← Unit tests for the controller`,
        solutionLang: 'text',
      },
      {
        id: 't3',
        text: 'Visit http://localhost:3000 in your browser. Then change the response from "Hello World!" to return a JSON object: { message: "Welcome!", version: "1.0" }.',
        hint: 'Change app.service.ts — the getHello() method. Return a JS object instead of a string.',
        solution: `// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Welcome!', version: '1.0' };
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Use the NestJS CLI to generate a new "health" controller. Add a GET /health endpoint that returns { status: "ok", uptime: process.uptime() }.',
        hint: 'nest generate controller health — or the short form: nest g co health',
        solution: `# Generate controller
nest g controller health

# src/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Generate a complete resource with: nest g resource users. Explore all generated files. Notice how NestJS generates the module, controller, service, and DTOs automatically.',
  },

  // ── NestJS Core ─────────────────────────
  {
    id: 'ex-nest-core-1',
    day: 2,
    topicId: 'nestjs-core',
    topicEmoji: '⚙️',
    title: 'Modules, Controllers & Services',
    difficulty: 'beginner',
    description: 'Build a complete Products feature with module, controller, and service — the NestJS way.',
    estimatedTime: '30 min',
    tasks: [
      {
        id: 't1',
        text: 'Generate a products module, controller, and service using the CLI. Register the module in AppModule.',
        hint: 'nest g module products, nest g controller products, nest g service products',
        solution: `# Generate all three
nest g module products
nest g controller products  
nest g service products

# The CLI auto-registers them. Verify app.module.ts imports ProductsModule`,
        solutionLang: 'bash',
      },
      {
        id: 't2',
        text: 'In ProductsService, create an in-memory array of 3 products and write a findAll() method that returns them.',
        hint: '@Injectable() marks the service. The array should be a private class property.',
        solution: `// products.service.ts
import { Injectable } from '@nestjs/common';

interface Product { id: number; name: string; price: number; }

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse',  price: 29  },
    { id: 3, name: 'Keyboard', price: 79 },
  ];

  findAll(): Product[] {
    return this.products;
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'In ProductsController, inject ProductsService via the constructor and create a GET /products endpoint.',
        hint: 'Use constructor(private readonly productsService: ProductsService) {}',
        solution: `// products.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Add findOne(id: number) to the service and GET /products/:id to the controller. Return 404 if not found.',
        hint: 'Throw new NotFoundException() from @nestjs/common when product is not found.',
        solution: `// In service:
import { Injectable, NotFoundException } from '@nestjs/common';

findOne(id: number): Product {
  const product = this.products.find(p => p.id === id);
  if (!product) throw new NotFoundException(\`Product #\${id} not found\`);
  return product;
}

// In controller:
@Get(':id')
findOne(@Param('id') id: string) {
  return this.productsService.findOne(+id); // + converts to number
}`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Add a create(product) method to the service that accepts a partial product (without id), generates an id, saves it, and returns it. Wire it to POST /products in the controller.',
  },

  // ── Request Handling ─────────────────────
  {
    id: 'ex-request-1',
    day: 2,
    topicId: 'request-handling',
    topicEmoji: '📨',
    title: 'Handle All Request Data Types',
    difficulty: 'intermediate',
    description: 'Practice reading data from params, query strings, body, and headers in NestJS controllers.',
    estimatedTime: '20 min',
    tasks: [
      {
        id: 't1',
        text: 'Create a GET /search endpoint that reads a query parameter "q" and returns: { query: q, results: [] }.',
        hint: '@Query("q") q: string — use the @Query decorator to read query parameters.',
        solution: `@Get('search')
search(@Query('q') q: string) {
  return { query: q, results: [] };
}
// Test: GET /products/search?q=laptop`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Create GET /products with optional query params: limit (default 10) and page (default 1). Return them in the response.',
        hint: 'Mark params as optional with ?: string. Use parseInt() or the + operator to convert to numbers.',
        solution: `@Get()
findAll(
  @Query('limit') limit?: string,
  @Query('page') page?: string,
) {
  return {
    data: this.productsService.findAll(),
    meta: {
      limit: limit ? +limit : 10,
      page: page ? +page : 1,
    },
  };
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Create a GET /products/:category/:id endpoint that reads both a category and an id from the URL path.',
        hint: 'Use @Param("category") and @Param("id") as two separate parameters.',
        solution: `@Get(':category/:id')
findByCategoryAndId(
  @Param('category') category: string,
  @Param('id') id: string,
) {
  return { category, id: +id };
}
// Test: GET /products/electronics/42`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Create a POST /products that reads the request body and returns it back (echo). Add @HttpCode(201) to return 201 status.',
        hint: '@Body() reads the entire request body. @HttpCode() sets the response status code.',
        solution: `import { Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

@Post()
@HttpCode(HttpStatus.CREATED)  // 201
create(@Body() body: any) {
  // In a real app, validate and save to DB
  return body;
}`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Create an endpoint that reads the "x-api-key" header and returns { valid: true } if the key is "secret123", or throws an UnauthorizedException if it is missing or wrong.',
  },

  // ── DTO & Validation ─────────────────────
  {
    id: 'ex-dto-1',
    day: 2,
    topicId: 'dto-validation',
    topicEmoji: '✅',
    title: 'Build and Validate DTOs',
    difficulty: 'intermediate',
    description: 'Create proper Data Transfer Objects with class-validator and test that validation works correctly.',
    estimatedTime: '25 min',
    tasks: [
      {
        id: 't1',
        text: 'Install class-validator and class-transformer. Enable the global ValidationPipe in main.ts with whitelist and transform options.',
        hint: 'npm install class-validator class-transformer — then in main.ts: app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))',
        solution: `// main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // Strip unknown fields
    forbidNonWhitelisted: true, // Throw error on unknown fields
    transform: true,            // Auto-convert types
  }));
  await app.listen(3000);
}
bootstrap();`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Create src/products/dto/create-product.dto.ts with fields: name (required string, max 50 chars), price (required number, min 0), category (one of: electronics | clothing | food), inStock (optional boolean).',
        hint: 'Use @IsString(), @MaxLength(50), @IsNumber(), @Min(0), @IsEnum(), @IsBoolean(), @IsOptional()',
        solution: `// create-product.dto.ts
import { IsString, IsNumber, IsBoolean, IsOptional, Min, MaxLength, IsEnum } from 'class-validator';

export enum ProductCategory {
  ELECTRONICS = 'electronics',
  CLOTHING    = 'clothing',
  FOOD        = 'food',
}

export class CreateProductDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsBoolean()
  @IsOptional()
  inStock?: boolean;
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Update POST /products to accept @Body() dto: CreateProductDto. Test with valid data. Then test with invalid data (e.g. negative price) and observe the error response.',
        hint: 'With ValidationPipe enabled, NestJS automatically validates the incoming body against the DTO.',
        solution: `// Valid request body:
{ "name": "Laptop", "price": 999, "category": "electronics" }
// → 201 Created ✅

// Invalid request body:
{ "name": 123, "price": -50, "category": "invalid" }
// → 400 Bad Request with detailed errors ❌`,
        solutionLang: 'json',
      },
      {
        id: 't4',
        text: 'Create UpdateProductDto using PartialType(CreateProductDto) so all fields are optional for PATCH requests.',
        hint: 'Install @nestjs/mapped-types: npm install @nestjs/mapped-types',
        solution: `// update-product.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}

// Now PATCH /products/1 with just { "price": 799 } works perfectly`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Add @IsEmail() validation to a user registration DTO. Also add @MinLength(8) and @Matches(/[A-Z]/) to ensure passwords have at least 8 characters and one uppercase letter.',
  },

  // ── Exception Handling ───────────────────
  {
    id: 'ex-exception-1',
    day: 2,
    topicId: 'exception-handling',
    topicEmoji: '🚨',
    title: 'Handle Errors the NestJS Way',
    difficulty: 'intermediate',
    description: 'Practice throwing the right exceptions and building a global error filter for consistent error responses.',
    estimatedTime: '20 min',
    tasks: [
      {
        id: 't1',
        text: 'In ProductsService, throw the correct exception for each scenario: (a) product not found, (b) duplicate product name, (c) price update with negative value.',
        hint: 'Use NotFoundException (404), ConflictException (409), BadRequestException (400) from @nestjs/common.',
        solution: `import { NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';

// (a) Not found:
if (!product) throw new NotFoundException('Product not found');

// (b) Duplicate:
const exists = this.products.find(p => p.name === dto.name);
if (exists) throw new ConflictException('Product name already exists');

// (c) Negative price:
if (dto.price < 0) throw new BadRequestException('Price cannot be negative');`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Create a GlobalExceptionFilter that catches all errors and returns a consistent JSON format with: statusCode, message, path, and timestamp.',
        hint: 'Create src/filters/http-exception.filter.ts — use @Catch() decorator (no argument catches all errors).',
        solution: `// src/filters/http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception instanceof HttpException
      ? exception.message
      : 'Internal server error';

    res.status(status).json({
      statusCode: status,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
    });
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Register the GlobalExceptionFilter in main.ts and test it by triggering a 404 error.',
        hint: 'app.useGlobalFilters(new GlobalExceptionFilter())',
        solution: `// main.ts
import { GlobalExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(3000);
}

// Test: GET /products/99999 → now returns your custom format`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Create a custom exception class called ProductOutOfStockException that extends HttpException with a fixed 422 Unprocessable Entity status and the message "Product is out of stock".',
  },
];

// ─────────────────────────────────────────
// DAY 3 EXERCISES
// ─────────────────────────────────────────

const DAY3_EXERCISES: Exercise[] = [
  // ── Middleware / Guards / Interceptors ───
  {
    id: 'ex-guards-1',
    day: 3,
    topicId: 'middleware-pipes-guards',
    topicEmoji: '🔧',
    title: 'Build a Logger Middleware & Auth Guard',
    difficulty: 'intermediate',
    description: 'Create a request logger middleware and a simple API key guard to protect routes.',
    estimatedTime: '25 min',
    tasks: [
      {
        id: 't1',
        text: 'Create a LoggerMiddleware that logs: [TIMESTAMP] METHOD /path for every incoming request.',
        hint: 'Create src/middleware/logger.middleware.ts. Implement NestMiddleware interface.',
        solution: `// src/middleware/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${req.method} \${req.url}\`);
    next(); // Always call next() !
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Apply the LoggerMiddleware to all routes in AppModule by implementing NestModule.',
        hint: 'In AppModule, add configure(consumer: MiddlewareConsumer) and use consumer.apply(LoggerMiddleware).forRoutes("*")',
        solution: `// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({ ... })
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');  // Apply to all routes
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Create an ApiKeyGuard that checks for a header "x-api-key". If the key equals "my-secret-key", allow the request. Otherwise throw UnauthorizedException.',
        hint: 'Implement CanActivate interface. Use context.switchToHttp().getRequest() to read headers.',
        solution: `// src/guards/api-key.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validKey = 'my-secret-key';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    
    if (!apiKey || apiKey !== this.validKey) {
      throw new UnauthorizedException('Invalid or missing API key');
    }
    return true;
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Apply @UseGuards(ApiKeyGuard) to the POST /products endpoint. Test: without the header (should get 401), and with x-api-key: my-secret-key header (should succeed).',
        hint: 'Add @UseGuards(ApiKeyGuard) decorator directly above the @Post() decorator.',
        solution: `import { UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../guards/api-key.guard';

@Post()
@UseGuards(ApiKeyGuard)   // ← Only this endpoint is protected
create(@Body() dto: CreateProductDto) {
  return this.productsService.create(dto);
}`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Create a TransformInterceptor that wraps every successful response in: { success: true, data: <original response>, timestamp: "..." }. Apply it globally.',
  },

  // ── Database ─────────────────────────────
  {
    id: 'ex-db-1',
    day: 3,
    topicId: 'database',
    topicEmoji: '🗄️',
    title: 'Migrate to a Real Database',
    difficulty: 'intermediate',
    description: 'Replace your in-memory array with a real SQLite database using TypeORM.',
    estimatedTime: '35 min',
    tasks: [
      {
        id: 't1',
        text: 'Install TypeORM and SQLite: npm install @nestjs/typeorm typeorm sqlite3. Configure TypeOrmModule.forRoot() in AppModule.',
        hint: 'Use type: "sqlite", database: "db.sqlite", synchronize: true (dev only), entities: [Product]',
        solution: `// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Product],
      synchronize: true,    // Auto-create tables in dev
    }),
    ProductsModule,
  ],
})
export class AppModule {}`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Create src/products/entities/product.entity.ts — convert your Product interface to a TypeORM entity class with proper decorators.',
        hint: '@Entity(), @PrimaryGeneratedColumn(), @Column(), @CreateDateColumn()',
        solution: `// src/products/entities/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  category: string;

  @Column({ default: true })
  inStock: boolean;

  @CreateDateColumn()
  createdAt: Date;
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Update ProductsModule to import TypeOrmModule.forFeature([Product]). Update ProductsService to inject the Product repository and use it instead of the in-memory array.',
        hint: '@InjectRepository(Product) private repo: Repository<Product> — inject in constructor.',
        solution: `// products.service.ts
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.repo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(\`Product #\${id} not found\`);
    return product;
  }

  create(dto: CreateProductDto): Promise<Product> {
    const product = this.repo.create(dto);
    return this.repo.save(product);
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Test all 4 CRUD operations (GET all, GET one, POST, DELETE) using Postman. Restart the server and confirm data persists.',
        hint: 'After running POST to create a product, stop the server (Ctrl+C), restart it, and run GET /products again — the data should still be there.',
        solution: 'If data persists after restart, TypeORM is saving to db.sqlite correctly. You should see a db.sqlite file appear in your project root.',
      },
    ],
    bonusChallenge: 'Implement a PATCH /products/:id endpoint that updates specific fields. Use repo.update(id, dto) followed by findOne(id) to return the updated entity.',
  },

  // ── Swagger ──────────────────────────────
  {
    id: 'ex-swagger-1',
    day: 3,
    topicId: 'swagger',
    topicEmoji: '📖',
    title: 'Document Your API with Swagger',
    difficulty: 'beginner',
    description: 'Add auto-generated API documentation so any developer can explore and test your API without reading your code.',
    estimatedTime: '20 min',
    tasks: [
      {
        id: 't1',
        text: 'Install @nestjs/swagger and set up SwaggerModule in main.ts. Give it a title, description, and version.',
        hint: 'npm install @nestjs/swagger — then use DocumentBuilder and SwaggerModule.setup("api", app, document)',
        solution: `// main.ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API for managing products')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
// Visit: http://localhost:3000/api`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Add @ApiTags("products") to ProductsController and @ApiOperation({ summary: "..." }) to each endpoint.',
        hint: 'Import from @nestjs/swagger. Put @ApiTags on the class, @ApiOperation on each method.',
        solution: `import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'List of all products' })
  @Get()
  findAll() { ... }

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product created' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @Post()
  create(@Body() dto: CreateProductDto) { ... }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Add @ApiProperty() decorators to all fields in CreateProductDto so Swagger shows example values.',
        hint: 'Use @ApiProperty({ example: "Laptop", description: "Product name" }) for each field.',
        solution: `import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Wireless Keyboard', description: 'Product name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 79.99, description: 'Price in USD' })
  @IsNumber()
  price: number;

  @ApiProperty({ enum: ProductCategory, example: 'electronics' })
  @IsEnum(ProductCategory)
  category: ProductCategory;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  inStock?: boolean;
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Open http://localhost:3000/api, expand the POST /products endpoint, click "Try it out", fill in the form, and execute it. Confirm you get a 201 response.',
        hint: 'Click "Try it out" → fill the request body → click "Execute" → see the real API response.',
        solution: 'You should see a 201 Created response with the new product JSON. This is the power of Swagger — a living, interactive API documentation!',
      },
    ],
    bonusChallenge: 'Add .addBearerAuth() to your DocumentBuilder and @ApiBearerAuth() to a protected endpoint. The Swagger UI will show an "Authorize" button to enter JWT tokens.',
  },

  // ── Authentication ────────────────────────
  {
    id: 'ex-auth-1',
    day: 3,
    topicId: 'auth',
    topicEmoji: '🔐',
    title: 'JWT Authentication Flow',
    difficulty: 'advanced',
    description: 'Implement a real register → login → protected route authentication flow using JWT.',
    estimatedTime: '45 min',
    tasks: [
      {
        id: 't1',
        text: 'Install auth packages and create an AuthModule with AuthService and AuthController.',
        hint: 'npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt @types/bcrypt @types/passport-jwt',
        solution: `# Install packages
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/bcrypt @types/passport-jwt

# Generate module
nest g module auth
nest g service auth
nest g controller auth`,
        solutionLang: 'bash',
      },
      {
        id: 't2',
        text: 'Create a simple Users service (in-memory) with register(email, password) that hashes the password with bcrypt before storing.',
        hint: 'Use bcrypt.hash(password, 10) to hash. Store { id, email, hashedPassword }.',
        solution: `// users.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: any[] = [];

  async register(email: string, password: string) {
    if (this.users.find(u => u.email === email)) {
      throw new ConflictException('Email already registered');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), email, hashedPassword };
    this.users.push(user);
    return { id: user.id, email: user.email };
  }

  findByEmail(email: string) {
    return this.users.find(u => u.email === email);
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Create AuthService.login(email, password) that validates the password and returns a JWT token.',
        hint: 'Use bcrypt.compare() to verify password. Use JwtService.sign({ sub: user.id, email }) to create the token.',
        solution: `// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    
    const valid = await bcrypt.compare(password, user.hashedPassword);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    
    return {
      access_token: this.jwtService.sign({ sub: user.id, email }),
    };
  }
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Test the full flow in Postman: POST /auth/register → POST /auth/login (get token) → use the token as Bearer in GET /products/me (a protected route).',
        hint: 'In Postman, set Authorization → Bearer Token and paste the access_token from the login response.',
        solution: `// Test sequence:
// 1. POST /auth/register   body: { email, password }  → { id, email }
// 2. POST /auth/login      body: { email, password }  → { access_token }
// 3. GET  /profile         header: Authorization: Bearer <token> → user data`,
        solutionLang: 'text',
      },
    ],
    bonusChallenge: 'Add a token expiry of "1h" to the JWT config and implement a POST /auth/refresh endpoint that issues a new token if the current one is within 30 minutes of expiry.',
  },

  // ── Testing ───────────────────────────────
  {
    id: 'ex-testing-1',
    day: 3,
    topicId: 'testing',
    topicEmoji: '🧪',
    title: 'Write Unit Tests for Your Service',
    difficulty: 'intermediate',
    description: 'Write real unit tests using Jest for your ProductsService. Learn the basics of mocking and assertions.',
    estimatedTime: '30 min',
    tasks: [
      {
        id: 't1',
        text: 'Open (or create) products.service.spec.ts. Set up a TestingModule that provides only ProductsService.',
        hint: 'Use Test.createTestingModule({ providers: [ProductsService] }).compile()',
        solution: `// products.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Write a test: "findAll() should return an array". Run it with npm run test.',
        hint: 'expect(result).toBeDefined() and expect(Array.isArray(result)).toBe(true)',
        solution: `it('findAll() should return an array', () => {
  const result = service.findAll();
  expect(result).toBeDefined();
  expect(Array.isArray(result)).toBe(true);
});`,
        solutionLang: 'typescript',
      },
      {
        id: 't3',
        text: 'Write a test: "findOne() should throw NotFoundException when product does not exist".',
        hint: 'Wrap the call in expect(() => ...).toThrow(NotFoundException)',
        solution: `import { NotFoundException } from '@nestjs/common';

it('should throw NotFoundException for unknown id', () => {
  expect(() => service.findOne(99999)).toThrow(NotFoundException);
});`,
        solutionLang: 'typescript',
      },
      {
        id: 't4',
        text: 'Write a test: "create() should return the new product with an id". Check that the returned product has the name you sent.',
        hint: 'Call service.create({...}), then check the returned object with expect(product.name).toBe(...)',
        solution: `it('create() should return the new product', () => {
  const dto = { name: 'Test Product', price: 99, category: 'electronics', inStock: true };
  const product = service.create(dto as any);
  
  expect(product.name).toBe('Test Product');
  expect(product.id).toBeDefined();
  expect(product.price).toBe(99);
});`,
        solutionLang: 'typescript',
      },
    ],
    bonusChallenge: 'Write an E2E test using Supertest that tests POST /products with valid data returns 201 and the created product JSON. Look at the test/app.e2e-spec.ts file for reference.',
  },

  // ── Deployment ────────────────────────────
  {
    id: 'ex-deploy-1',
    day: 3,
    topicId: 'deployment',
    topicEmoji: '🚀',
    title: 'Prepare for Production',
    difficulty: 'intermediate',
    description: 'Go through the production-readiness checklist and deploy your NestJS API to Railway or Render.',
    estimatedTime: '30 min',
    tasks: [
      {
        id: 't1',
        text: 'Add a GET /health endpoint to AppController that returns: { status: "ok", uptime: process.uptime(), timestamp: new Date() }.',
        hint: 'process.uptime() returns how many seconds the Node.js process has been running.',
        solution: `// app.controller.ts
@Get('health')
health() {
  return {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  };
}`,
        solutionLang: 'typescript',
      },
      {
        id: 't2',
        text: 'Move all hardcoded secrets to a .env file. Install @nestjs/config and use ConfigService to read them. Create a .env.example file.',
        hint: 'npm install @nestjs/config — add ConfigModule.forRoot({ isGlobal: true }) to AppModule.',
        solution: `# .env (never commit this)
PORT=3000
JWT_SECRET=change-this-to-a-long-random-string
NODE_ENV=development

# .env.example (safe to commit)
PORT=3000
JWT_SECRET=your-jwt-secret-here
NODE_ENV=development`,
        solutionLang: 'text',
      },
      {
        id: 't3',
        text: 'Run npm run build and confirm it creates a dist/ folder. Then run npm run start:prod and confirm the app still works.',
        hint: 'npm run build compiles TypeScript to JavaScript in dist/. npm run start:prod runs node dist/main.',
        solution: `# Build
npm run build
# → Creates dist/ folder

# Run production build
npm run start:prod
# → Server running at http://localhost:3000

# Verify health endpoint
curl http://localhost:3000/health`,
        solutionLang: 'bash',
      },
      {
        id: 't4',
        text: 'Push your project to GitHub. Go to railway.app, create a new project, connect your GitHub repo, add environment variables, and deploy.',
        hint: 'Make sure .env is in .gitignore. Add all .env variables in the Railway "Variables" section.',
        solution: `# Steps:
# 1. git init && git add . && git commit -m "Initial commit"
# 2. Create GitHub repo and push
# 3. Go to railway.app → New Project → Deploy from GitHub
# 4. Select your repo
# 5. In Variables tab, add all your .env variables
# 6. Railway auto-detects Node.js and builds/deploys
# 7. Your API is live at https://your-app.railway.app`,
        solutionLang: 'bash',
      },
    ],
    bonusChallenge: 'Create a Dockerfile for your NestJS app using a multi-stage build. Build the image locally with docker build -t my-api . and run it with docker run -p 3000:3000 my-api.',
  },
];

// ─────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────

export const ALL_EXERCISES: Exercise[] = [
  ...DAY1_EXERCISES,
  ...DAY2_EXERCISES,
  ...DAY3_EXERCISES,
];

export const EXERCISES_BY_DAY = {
  1: DAY1_EXERCISES,
  2: DAY2_EXERCISES,
  3: DAY3_EXERCISES,
} as const;

export const EXERCISES_BY_TOPIC = ALL_EXERCISES.reduce<Record<string, Exercise[]>>(
  (acc, ex) => {
    if (!acc[ex.topicId]) acc[ex.topicId] = [];
    acc[ex.topicId].push(ex);
    return acc;
  },
  {}
);
