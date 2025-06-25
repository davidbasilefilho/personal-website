import { createFileRoute } from "@tanstack/react-router";
import { motion, Variants } from "motion/react";
import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AuroraText } from "../components/magicui/aurora-text";
import { MagicCard } from "../components/magicui/magic-card";

export const Route = createFileRoute("/skills")({
  component: RouteComponent,
});

// use colors that work well on light and dark backgrounds
const skills: {
  name: string;
  color: string;
  icon?: ReactNode;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  proficiency: number;
}[] = [
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
    color: "#fff",
    icon: <i className="devicon-nextjs-plain"></i>,
    category: "Frontend",
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
    icon: <i className="devicon-vitejs-plain"></i>,
    category: "Tools",
    proficiency: 85,
  },
  {
    name: "Python",
    color: "#3572A5",
    icon: <i className="devicon-python-plain"></i>,
    category: "Backend",
    proficiency: 82,
  },
  {
    name: "Linux",
    color: "#e74c3c",
    icon: <i className="devicon-linux-plain"></i>,
    category: "Tools",
    proficiency: 88,
  },
  {
    name: "Supabase",
    color: "#3ecf8e",
    icon: <i className="devicon-supabase-plain"></i>,
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

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 25,
        duration: 0.4,
      },
    },
  };

  return (
    <main className="min-h-full h-full px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-background via-accent/30 to-background rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <AuroraText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            My Skills
          </AuroraText>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            A comprehensive overview of my technical expertise, ranging from
            frontend development to backend architecture.
          </p>
        </motion.div>

        <Tabs defaultValue={categories[0]} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8">
            <TabsList className="flex h-fit w-full max-w-fit bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-1 flex-wrap gap-1">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 hover:bg-accent/80 data-[state=active]:text-primary-foreground min-w-0 border-0"
                  onClick={() => setSelectedCategory(category)}>
                  <span className="truncate">{category}</span>
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-lg -z-10"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={selectedCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}>
                    <Card className="p-0 shadow-lg border-border/50 hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group h-full">
                      <MagicCard
                        className="h-full"
                        gradientColor={`${skill.color}50`}
                        gradientTo={skill.color}
                        gradientFrom={skill.color}
                        gradientOpacity={0.1}>
                        <div className="p-4 sm:p-6 h-full flex flex-col justify-between relative">
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{ backgroundColor: `${skill.color}5` }}
                          />

                          <div className="flex flex-col items-center text-center mb-4 sm:mb-6 relative z-10">
                            {skill.icon ? (
                              <motion.div
                                className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-105 h-12 w-12 sm:h-16 sm:w-16 rounded-xl flex items-center justify-center shadow-lg"
                                style={{ color: skill.color }}
                                whileHover={{ rotate: [0, -2, 2, 0] }}
                                transition={{ duration: 0.3 }}>
                                {skill.icon}
                              </motion.div>
                            ) : (
                              <div
                                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                                style={{ backgroundColor: skill.color }}>
                                {skill.name.charAt(0)}
                              </div>
                            )}
                            <h3 className="font-semibold text-base sm:text-lg mb-2 transition-colors duration-200 leading-tight">
                              {skill.name}
                            </h3>
                            <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center">
                              <span
                                className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium border transition-all duration-200 group-hover:scale-102"
                                style={{
                                  backgroundColor: `${skill.color}15`,
                                  color: skill.color,
                                  borderColor: `${skill.color}30`,
                                }}>
                                {skill.category}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2 sm:space-y-3 relative z-10">
                            <div className="flex justify-between items-center">
                              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                                Proficiency
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-foreground">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <div className="w-full bg-muted/50 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
                              <motion.div
                                className="h-2.5 sm:h-3 rounded-full shadow-sm relative overflow-hidden"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency}%` }}
                                transition={{
                                  duration: 1.5,
                                  delay: index * 0.05,
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                }}>
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                  initial={{ x: "-100%" }}
                                  animate={{ x: "100%" }}
                                  transition={{
                                    duration: 2,
                                    delay: index * 0.05 + 1.5,
                                    ease: "easeInOut",
                                  }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </MagicCard>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          className="mt-24 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <h2 className="text-3xl font-bold text-center mb-6">
            Skills Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Total Skills",
                value: skills.length,
                icon: "🚀",
                color: "#3b82f6",
              },
              {
                label: "Categories",
                value: categories.length - 1,
                icon: "📂",
                color: "#10b981",
              },
              {
                label: "Avg Proficiency",
                value: `${Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)}%`,
                icon: "📊",
                color: "#f59e0b",
              },
              {
                label: "Years Experience",
                value: `${new Date().getFullYear() - 2018}+`,
                icon: "⏱️",
                color: "#ef4444",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="text-center p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: stat.color }}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-105 transition-transform duration-200">
                    {stat.icon}
                  </div>
                  <div
                    className="text-3xl font-bold mb-2 transition-colors duration-200"
                    style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "100%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
