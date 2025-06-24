import { createFileRoute } from "@tanstack/react-router";
import { AuroraText } from "../components/magicui/aurora-text";

export const Route = createFileRoute("/skills")({
  component: RouteComponent,
});

const skills = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#3c873a" },
  { name: "Next.js", color: "#000" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Convex", color: "#ffb300" },
  { name: "Vite", color: "#646cff" },
  { name: "Python", color: "#3572A5" },
  { name: "Linux", color: "#fff" },
  // Add more as needed
];

function RouteComponent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">
        <AuroraText>Skills</AuroraText>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-center rounded-xl shadow-lg bg-slate-800/80 p-6 hover:scale-105 transition-transform border border-slate-700">
            <span
              className="text-xl font-semibold"
              style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
