const features = [
  "Next.js 16 & React 19",
  "TypeScript",
  "Tailwind CSS & shadcn/ui",
  "Prisma & MySQL",
  "Auth.js",
  "React Query & Zustand",
  "Axios",
  "React Hook Form & Zod",
  "Dark & Light Mode",
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium text-primary">
            DEVELOPER STARTER KIT
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Next.js Starter
          </h1>

          <p className="mx-auto max-w-xl text-muted-foreground">
            A modern, scalable and reusable Next.js starter
            template with everything you need to build
            production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-lg border bg-card p-4 text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Built for developers. Ready for your next project.
        </p>
      </div>
    </main>
  );
}
