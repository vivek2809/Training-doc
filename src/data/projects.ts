export interface Project {
  id: string;
  trainee: string;
  title: string;
  modules: string[];
  apis: string[];
  exampleReq: string;
  exampleRes: string;
  explanation: string;
  aiPrompt: string;
}

export const PROJECTS: Project[] = [
  {
    id: "user-management-api",
    trainee: "Trainee 1",
    title: "1. User Management API",
    modules: ["UsersModule"],
    apis: [
      "GET /users - Get all users",
      "GET /users/:id - Get a user",
      "POST /users - Create a user",
      "PATCH /users/:id - Update a user",
      "DELETE /users/:id - Delete a user"
    ],
    exampleReq: `POST /users
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}`,
    exampleRes: `{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}`,
    explanation: "A simple CRUD application to manage users. Focuses on learning the basics of controllers, services, and validation.",
    aiPrompt: "Generate a NestJS User Management API with CRUD operations. Include CreateUserDto and UpdateUserDto with validation. Use an in-memory array or simple DB."
  },
  {
    id: "product-management-api",
    trainee: "Trainee 2",
    title: "2. Product Management API",
    modules: ["ProductsModule"],
    apis: [
      "GET /products - Get all products",
      "GET /products/:id - Get a product",
      "POST /products - Create a product",
      "PATCH /products/:id - Update product price/stock",
      "DELETE /products/:id - Delete a product"
    ],
    exampleReq: `POST /products
{
  "name": "Wireless Mouse",
  "price": 29.99,
  "stock": 100
}`,
    exampleRes: `{
  "id": 1,
  "name": "Wireless Mouse",
  "price": 29.99,
  "stock": 100
}`,
    explanation: "Inventory system for products. Focuses on data types and updating specific fields like stock or price.",
    aiPrompt: "Generate a NestJS Product Management API. Allow creating products with name, price, and stock. Add endpoints to update price and stock separately."
  },
  {
    id: "todo-api",
    trainee: "Trainee 3",
    title: "3. Todo API",
    modules: ["TodosModule"],
    apis: [
      "GET /todos - Get all tasks",
      "POST /todos - Create new task",
      "PATCH /todos/:id/complete - Mark task as done",
      "DELETE /todos/:id - Remove task"
    ],
    exampleReq: `POST /todos
{
  "title": "Learn NestJS",
  "description": "Complete the first 3 days of training"
}`,
    exampleRes: `{
  "id": 1,
  "title": "Learn NestJS",
  "description": "Complete the first 3 days of training",
  "isCompleted": false
}`,
    explanation: "A classic Todo app API. It teaches how to manage boolean states and custom update endpoints.",
    aiPrompt: "Generate a simple Todo API in NestJS. Task should have title, description, and isCompleted boolean. Provide endpoint to toggle completion status."
  },
  {
    id: "blog-api",
    trainee: "Trainee 4",
    title: "4. Blog API",
    modules: ["PostsModule"],
    apis: [
      "GET /posts - Get all published posts",
      "GET /posts/:id - Read a post",
      "POST /posts - Create a draft post",
      "PATCH /posts/:id/publish - Publish a post",
      "DELETE /posts/:id - Delete post"
    ],
    exampleReq: `POST /posts
{
  "title": "My first blog",
  "content": "Hello world!"
}`,
    exampleRes: `{
  "id": 1,
  "title": "My first blog",
  "content": "Hello world!",
  "status": "draft"
}`,
    explanation: "A blog engine backend. Focuses on handling strings, text limits, and status workflows (draft to published).",
    aiPrompt: "Generate a NestJS Blog API. Posts start as 'draft'. Provide a specific API endpoint to change status to 'published'. Only return published posts on GET /posts."
  },
  {
    id: "student-management-api",
    trainee: "Trainee 5",
    title: "5. Student Management API",
    modules: ["StudentsModule"],
    apis: [
      "GET /students - Get all students",
      "POST /students - Enroll a student",
      "PATCH /students/:id/grade - Update grades",
      "DELETE /students/:id - Remove student"
    ],
    exampleReq: `POST /students
{
  "name": "David",
  "course": "Computer Science",
  "year": 1
}`,
    exampleRes: `{
  "id": 1,
  "name": "David",
  "course": "Computer Science",
  "year": 1,
  "grade": null
}`,
    explanation: "Manage students and their grades. Teaches how to structure numeric updates and validations.",
    aiPrompt: "Generate a Student API in NestJS. Use class-validator to ensure grades are between 0-100. Provide standard CRUD for students."
  },
  {
    id: "order-api",
    trainee: "Trainee 6",
    title: "6. Order API",
    modules: ["OrdersModule"],
    apis: [
      "GET /orders - View all orders",
      "POST /orders - Place a new order",
      "PATCH /orders/:id/status - Update shipping status",
      "GET /orders/customer/:customerId - View specific customer orders"
    ],
    exampleReq: `POST /orders
{
  "customerId": 100,
  "items": ["Laptop", "Mouse"],
  "totalAmount": 1029.99
}`,
    exampleRes: `{
  "id": 5001,
  "customerId": 100,
  "items": ["Laptop", "Mouse"],
  "totalAmount": 1029.99,
  "status": "processing"
}`,
    explanation: "Handle e-commerce orders. Great for tracking multi-step statuses (processing, shipped, delivered) and associating records with a customer ID.",
    aiPrompt: "Generate a NestJS Order tracking API. Order statuses should use an Enum! Add routes to transition order status and fetch orders by customer ID."
  },
  {
    id: "employee-api",
    trainee: "Trainee 7",
    title: "7. Employee API",
    modules: ["EmployeesModule"],
    apis: [
      "GET /employees - Get all employees",
      "POST /employees - Hire employee",
      "PATCH /employees/:id/promote - Update role/salary",
      "GET /employees/department/:dept - Filter by department"
    ],
    exampleReq: `POST /employees
{
  "name": "Sarah",
  "department": "Engineering",
  "role": "Junior Developer",
  "salary": 60000
}`,
    exampleRes: `{
  "id": 1,
  "name": "Sarah",
  "department": "Engineering",
  "role": "Junior Developer",
  "salary": 60000
}`,
    explanation: "Corporate employee directory. Introduces endpoint filtering based on criteria (e.g. by department) and specialized patches (promoting).",
    aiPrompt: "Generate a NestJS Employee API. Ensure validations are used for salary rules. Include an endpoint to easily promote an employee (changing role and salary at once)."
  },
  {
    id: "category-product-api",
    trainee: "Trainee 8",
    title: "8. Category + Product API (Relational)",
    modules: ["CategoriesModule", "ProductsModule"],
    apis: [
      "POST /categories - Create a category",
      "GET /categories - List categories",
      "POST /products - Create product (link to category)",
      "GET /categories/:id/products - Get products for category"
    ],
    exampleReq: `POST /products
{
  "categoryId": 1,
  "name": "MacBook Air",
  "price": 999
}`,
    exampleRes: `{
  "id": 101,
  "categoryId": 1,
  "categoryName": "Laptops",
  "name": "MacBook Air",
  "price": 999
}`,
    explanation: "Slightly more advanced. Introduces working with two different modules that depend on or relate to each other.",
    aiPrompt: "Generate a NestJS app with Categories and Products modules. Products must have a categoryId. Build an endpoint to fetch all products that belong to a specific category."
  },
  {
    id: "auth-user-api",
    trainee: "Trainee 9",
    title: "9. Auth + User API (Basic login concept)",
    modules: ["UsersModule", "AuthModule"],
    apis: [
      "POST /auth/register - Register new user",
      "POST /auth/login - Simulate login",
      "GET /users/me - Return profile",
      "POST /auth/logout - Simulate logout"
    ],
    exampleReq: `POST /auth/login
{
  "email": "user@test.com",
  "password": "password123"
}`,
    exampleRes: `{
  "userId": 1,
  "token": "simulated_jwt_token_12345",
  "message": "Login successful"
}`,
    explanation: "Basic authentication simulation (without real JWTs yet). Great for understanding the distinction between user data and the login mechanism.",
    aiPrompt: "Generate a NestJS API with a basic Auth controller and User controller. The login endpoint should just check hardcoded credentials and return a fake token."
  }
];
