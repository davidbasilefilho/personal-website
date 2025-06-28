import { ReactNode, useState } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs-baseui";
import { cn } from "@/lib/utils";

const skillsData = [
  {
    name: "TypeScript",
    color: "#3178c6",
    icon: <i className="devicon-typescript-plain"></i>,
    category: "Frontend",
    proficiency: 95,
  },
  {
    name: "React",
    color: "#61dafb",
    icon: <i className="devicon-react-plain"></i>,
    category: "Frontend",
    proficiency: 90,
  },
  {
    name: "Node.js",
    color: "#3c873a",
    icon: <i className="devicon-nodejs-plain"></i>,
    category: "Backend",
    proficiency: 85,
  },
  {
    name: "Next.js",
    color: "#000",
    darkColor: "#fff",
    icon: <i className="devicon-nextjs-plain"></i>,
    category: "Frontend",
    proficiency: 88,
  },
  {
    name: "Tanstack Start",
    color: "#0891B2",
    category: "Frontend",
    proficiency: 94,
  },
  {
    name: "Bun",
    color: "#22223b",
    darkColor: "#fbf0df",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" />
    ),
    category: "Backend",
    proficiency: 88,
  },
  {
    name: "Tailwind CSS",
    color: "#38bdf8",
    icon: <i className="devicon-tailwindcss-original"></i>,
    category: "Frontend",
    proficiency: 92,
  },
  {
    name: "shadcn/ui",
    color: "#555",
    darkColor: "#666",
    category: "Frontend",
    proficiency: 94,
  },
  {
    name: "Go",
    color: "#00acd7",
    icon: <i className="devicon-go-original-wordmark"></i>,
    category: "Backend",
    proficiency: 76,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: <i className="devicon-postgresql-plain"></i>,
    category: "Database",
    proficiency: 80,
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: <i className="devicon-mysql-original"></i>,
    category: "Database",
    proficiency: 75,
  },
  {
    name: "Convex",
    color: "#ffb300",
    category: "Backend",
    proficiency: 75,
  },
  {
    name: "Vite",
    color: "#646cff",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
    ),
    category: "Tools",
    proficiency: 85,
  },
  {
    name: "Python",
    color: "#3572A5",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
    ),
    category: "Backend",
    proficiency: 70,
  },
  {
    name: "Linux",
    color: "#e74c3c",
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
    ),
    category: "Tools",
    proficiency: 88,
  },
  {
    name: "Supabase",
    color: "#3ecf8e",
    icon: <i className="devicon-supabase-plain colored"></i>,
    category: "Backend",
    proficiency: 78,
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: <i className="devicon-javascript-plain"></i>,
    category: "Frontend",
    proficiency: 88,
  },
  {
    name: "Git",
    color: "#f05032",
    icon: <i className="devicon-git-plain"></i>,
    category: "Tools",
    proficiency: 90,
  },
];

const categories = [
  "All",
  ...Array.from(new Set(skillsData.map((skill) => skill.category))),
];

export default function SkillsPageComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();

  const skills = skillsData.map((skill) => ({
    ...skill,
    color:
      resolvedTheme === "dark" && skill.darkColor
        ? skill.darkColor
        : skill.color,
  }));

  return (
    <main className="flex flex-col justify-stretch text-balance items-start h-fit min-h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      </div>

      <section className="m-6 mt-10 w-full">
        <div className="text-center animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            My Skills
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            A comprehensive overview of my technical expertise, ranging from
            frontend development to backend architecture.
          </p>
        </div>
      </section>

      <div>
        <Separator />
      </div>

      <section className="self-stretch grow bg-accent p-6 rounded-b border-t w-full">
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full">
          <div className="flex justify-center mb-4 animate-fade-in [animation-delay:0.2s]">
            <TabsList className="flex h-fit w-full md:w-3/5 lg:1/2 xl:w-fit bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-1 flex-wrap gap-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    selectedCategory !== category &&
                      "hover:bg-sidebar-accent! dark:hover:bg-accent!",
                    "relative cursor-pointer px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 data-[state=active]:bg-primary! data-[state=active]:text-primary-foreground! min-w-0",
                  )}>
                  <span className="truncate w-16">{category}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {categories.map((categoryValue) => (
            <TabsContent
              key={categoryValue}
              value={categoryValue}
              className="mt-0">
              <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6">
                {skills
                  .filter(
                    (skill) =>
                      categoryValue === "All" ||
                      skill.category === categoryValue,
                  )
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 50}ms` }}>
                      {isMobile ? (
                        <Card className="p-0 shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group h-full flex items-stretch hover:scale-105 origin-bottom">
                          <div
                            className="h-full w-full relative p-3 sm:p-4 md:p-6 flex flex-col justify-between min-h-[160px] sm:min-h-[180px]"
                            style={{
                              background: `radial-gradient(ellipse at center, ${skill.color}20, transparent 60%)`,
                            }}>
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-[5%] transition-opacity duration-300"
                              style={{ backgroundColor: skill.color }}
                            />
                            <div className="flex flex-col items-center text-center mb-3 sm:mb-4 md:mb-6 relative z-10 w-full flex-1">
                              {skill.icon ? (
                                <div
                                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-105 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-lg sm:rounded-xl md:rounded-3xl flex items-center justify-center shadow-lg"
                                  style={{ color: skill.color }}>
                                  {skill.icon}
                                </div>
                              ) : (
                                <div
                                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-3 md:mb-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                                  style={{ backgroundColor: skill.color }}>
                                  {skill.name.charAt(0).toUpperCase()}
                                </div>
                              )}
                              <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 transition-colors duration-200 leading-tight">
                                {skill.name}
                              </h3>
                              <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-wrap justify-center">
                                <span
                                  className="text-xs px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full font-medium border transition-all duration-200 group-hover:scale-102"
                                  style={{
                                    backgroundColor: `${skill.color}15`,
                                    color: skill.color,
                                    borderColor: `${skill.color}30`,
                                  }}>
                                  {skill.category}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2 md:space-y-3 relative z-10">
                              <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                                  Proficiency
                                </span>
                                <span className="text-xs sm:text-sm font-bold text-foreground">
                                  {skill.proficiency}%
                                </span>
                              </div>
                              <div className="w-full bg-muted/50 rounded-full h-2 sm:h-2.5 md:h-3 overflow-hidden shadow-inner">
                                <div
                                  className="h-2 sm:h-2.5 md:h-3 rounded-full shadow-sm relative overflow-hidden animate-progress-bar"
                                  style={{
                                    backgroundColor: skill.color,
                                    width: `${skill.proficiency}%`,
                                    animationDelay: `${index * 50 + 200}ms`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Card>
                      ) : (
                        <Card className="p-0 shadow-lg border-0 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group h-full flex items-stretch hover:scale-105 origin-bottom">
                          <MagicCard
                            gradientColor={skill.color}
                            gradientFrom={skill.color}
                            gradientTo={skill.color}
                            gradientOpacity={0.1}
                            className="h-full w-full relative">
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-[5%] transition-opacity duration-300"
                              style={{ backgroundColor: skill.color }}
                            />
                            <div className="h-full w-full flex flex-col p-3 sm:p-4 md:p-6 justify-between min-h-[160px] sm:min-h-[180px]">
                              <div className="flex flex-col items-center text-center mb-3 sm:mb-4 md:mb-6 relative z-10 w-full flex-1">
                                {skill.icon ? (
                                  <div
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:scale-105 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-lg sm:rounded-xl md:rounded-3xl flex items-center justify-center shadow-lg"
                                    style={{ color: skill.color }}>
                                    {skill.icon}
                                  </div>
                                ) : (
                                  <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-3 md:mb-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundColor: skill.color }}>
                                    {skill.name.charAt(0).toUpperCase()}
                                  </div>
                                )}
                                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 transition-colors duration-200 leading-tight">
                                  {skill.name}
                                </h3>
                                <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-wrap justify-center">
                                  <span
                                    className="text-xs px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full font-medium border transition-all duration-200 group-hover:scale-102"
                                    style={{
                                      backgroundColor: `${skill.color}15`,
                                      color: skill.color,
                                      borderColor: `${skill.color}30`,
                                    }}>
                                    {skill.category}
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 relative z-10">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                                    Proficiency
                                  </span>
                                  <span className="text-xs sm:text-sm font-bold text-foreground">
                                    {skill.proficiency}%
                                  </span>
                                </div>
                                <div className="w-full bg-muted/50 rounded-full h-2 sm:h-2.5 md:h-3 overflow-hidden shadow-inner">
                                  <div
                                    className="h-2 sm:h-2.5 md:h-3 rounded-full shadow-sm relative overflow-hidden animate-progress-bar"
                                    style={{
                                      backgroundColor: skill.color,
                                      width: `${skill.proficiency}%`,
                                      animationDelay: `${index * 50 + 200}ms`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </MagicCard>
                        </Card>
                      )}
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
}
