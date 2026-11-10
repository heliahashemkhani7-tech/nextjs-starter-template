# Next.js Starter Template

A modern, reusable Next.js starter template designed to help developers kickstart their projects with a solid foundation, clean structure, and essential tools.

## ✨ Features

- **Next.js 16** – App Router and modern React architecture
- **React 19** – Modern UI development
- **TypeScript** – Type-safe development
- **Tailwind CSS 4** – Utility-first styling
- **shadcn/ui** – Reusable UI components
- **Auth.js** – Authentication with email and password
- **Prisma ORM** – Database access and management
- **MySQL** – Relational database support
- **TanStack React Query** – Server-state management
- **Zustand** – Lightweight client-state management
- **Axios** – HTTP client configuration
- **React Hook Form** – Form management
- **Zod** – Schema validation
- **next-themes** – Dark and light mode support
- **Sonner** – Toast notifications

## 🛠️ Tech Stack

| Category       | Technology           |
| -------------- | -------------------- |
| Framework      | Next.js 16           |
| Library        | React 19             |
| Language       | TypeScript           |
| Styling        | Tailwind CSS 4       |
| UI Components  | shadcn/ui            |
| Authentication | Auth.js              |
| ORM            | Prisma 7             |
| Database       | MySQL                |
| Server State   | TanStack React Query |
| Client State   | Zustand              |
| Forms          | React Hook Form      |
| Validation     | Zod                  |
| HTTP Client    | Axios                |

## 📁 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── api/
│   │   ├── auth/
│   │   └── register/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── shared/
│   └── ui/
│
├── generated/
│   └── prisma/
│
├── lib/
├── providers/
├── schemas/
├── types/
├── auth.ts
└── proxy.ts

prisma/
├── migrations/
└── schema.prisma

prisma.config.ts
```

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have the following installed:

- Node.js
- pnpm
- MySQL

### 2. Clone the repository

```bash
git clone https://github.com/heliahashemkhani7-tech/nextjs-starter-template.git

cd nextjs-starter-template
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Configure environment variables

Create your local environment file:

```bash
cp .env.example .env
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Update the values in `.env`:

```env
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/nextjs_starter"

DB_HOST="localhost"
DB_PORT="3306"
DB_USER="USER"
DB_PASSWORD="PASSWORD"
DB_NAME="nextjs_starter"

AUTH_SECRET="your-auth-secret"
AUTH_TRUST_HOST="true"
```

Generate a secure authentication secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the generated value into `AUTH_SECRET`.

### 5. Set up the database

Create a MySQL database named `nextjs_starter` or update the database name in your environment variables.

Generate the Prisma Client:

```bash
pnpm prisma generate
```

Apply the existing migrations:

```bash
pnpm prisma migrate deploy
```

### 6. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication

This starter includes an Auth.js Credentials authentication setup.

Available authentication functionality:

- User registration
- Email and password login
- Password hashing with bcrypt
- Session management
- Protected dashboard route
- Sign out functionality

Registration and login use the configured MySQL database.

## 🌓 Theme Support

The project includes dark and light theme support using `next-themes`.

The theme provider is configured to support system preferences.

## 📦 Available Scripts

| Command                      | Description                              |
| ---------------------------- | ---------------------------------------- |
| `pnpm dev`                   | Start the development server             |
| `pnpm build`                 | Create a production build                |
| `pnpm start`                 | Start the production server              |
| `pnpm lint`                  | Run ESLint                               |
| `pnpm prisma generate`       | Generate Prisma Client                   |
| `pnpm prisma migrate dev`    | Create and apply a development migration |
| `pnpm prisma migrate deploy` | Apply existing migrations                |

## 🔒 Environment Variables

Never commit your `.env` file or expose your database credentials and authentication secrets.

Use `.env.example` as a reference when configuring the project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
