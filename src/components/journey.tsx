import { Link } from "@tanstack/react-router";
import { Calendar, Code, GamepadIcon, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MagicCard } from "./magicui/magic-card";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const steps: {
  title: ReactNode;
  description: ReactNode;
  year: number;
  icon: ReactNode;
  tags: string[];
  highlight?: boolean;
}[] = [
  {
    year: 2018,
    title: "My introduction to programming",
    description: `I was introduced to programming at the age of 10, when I started a game development course. I learned the basics of programming and game design, which sparked my interest in coding.`,
    icon: <Sparkles className="w-5 h-5" />,
    tags: ["Beginner", "Game Development", "Learning"],
    highlight: true,
  },
  {
    year: 2019,
    title: "First actual programming language",
    description: `I started learning C# and Python, which were my first actual programming languages. I built small projects and games, which helped me understand the fundamentals of programming. I learned to use Unity and Unreal Engine, which allowed me to create 2D and 3D games.`,
    icon: <Code className="w-5 h-5" />,
    tags: ["C#", "Python", "Unity", "Unreal Engine"],
  },
  {
    year: 2020,
    title: "Going further into game development",
    description: `I continued to explore game development, learning more about game engines and programming languages, learned more about Unity and built projects.`,
    icon: <GamepadIcon className="w-5 h-5" />,
    tags: ["Unity", "Game Engines", "Projects"],
  },
  {
    year: 2021,
    title: "Deepening my game development knowledge",
    description: `I focused on improving my skills in game development, learning even more about Unity and released my first game. I also started collaborating with other developers on projects, which helped me gain valuable experience working in a team environment. I even participated in a game jam, which was a great experience.`,
    icon: <GamepadIcon className="w-5 h-5" />,
    tags: ["First Release", "Collaboration", "Game Jam"],
    highlight: true,
  },
  {
    year: 2022,
    title:
      "Started high school, dived into web development and other technologies",
    description: `I started exploring web development, learning HTML, CSS, and JavaScript. This marked the beginning of my journey into full-stack development and modern web technologies.`,
    icon: <Code className="w-5 h-5" />,
    tags: ["Web Development", "HTML", "CSS", "JavaScript", "C++", "Raylib"],
  },
  {
    year: 2023,
    title: "Exploring new technologies and frameworks",
    description: `I started learning about new technologies and frameworks, such as React, Next.js, and TypeScript. This helped me build more complex and efficient applications. And I continued dabbling with game development, using C++, Raylib and Unity.`,
    icon: <Code className="w-5 h-5" />,
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    year: 2024,
    title: "Built real world projects and continued learning",
    description: `I continued to build real-world projects, applying my knowledge of web development and game development. I also started learning about backend development, databases, and cloud technologies.`,
    icon: <Code className="w-5 h-5" />,
    tags: ["Backend Development", "Databases", "SQL", "Supabase"],
    highlight: true,
  },
  {
    year: 2025,
    title: "Looking forward to the future and I continue learning",
    description: `I got my first job this year, I am enjoying it a lot. I am excited to continue my journey as a developer, exploring new technologies and building innovative applications. I am always looking for new challenges and opportunities to grow. This year I learned Bun, Tanstack Start, Clerk, Convex, and built projects with them (such as this one). And I am looking forward to continue my journey in the future.`,
    icon: <Sparkles className="w-5 h-5" />,
    tags: ["Future", "Innovation", "Growth"],
    highlight: true,
  },
];

type GradientOptions = {
  gradientOpacity: number; // overlay opacity for the gradient
  gradientSize: number; // size of the gradient overlay
  gradientColor: string; // color of the gradient overlay
  gradientFrom: string; // starting color of the border gradient
  gradientTo: string; // ending color of the border gradient
};

const normalGradientOptions: GradientOptions = {
  gradientOpacity: 0.1,
  gradientSize: 400,
  gradientColor: "var(--primary)",
  gradientFrom: "var(--primary)",
  gradientTo: "var(--accent)",
};

const highlightGradientOptions: GradientOptions = {
  gradientOpacity: 0.1,
  gradientSize: 400,
  gradientColor: "var(--chart-4)",
  gradientFrom: "var(--chart-4)",
  gradientTo: "var(--chart-2)",
};

export function Journey() {
  return (
    <div className="space-y-6">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="text-2xl font-semibold">My Journey</h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-snug">
          From my first lines of code to building complex applications, here's
          how I've grown as a developer.
          <br />
          If you'd like to see more details about my skills, go to the{" "}
          <Link
            to={"/skills"}
            className="text-primary hover:border-b-2 border-primary pb-0.5 no-underline">
            <Sparkles className="inline-block w-4 h-4 mr-1" />
            Skills
          </Link>{" "}
          page.
        </p>
      </motion.div>

      <div className="relative mt-8">
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}>
              <motion.div
                className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
              />

              <div className="md:ml-16 transition-all duration-300 group-hover:translate-x-2">
                <Card
                  className={`
                    transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 gap-2 p-0 shadow-none border-none`}>
                  <MagicCard
                    className={cn("py-6")}
                    borderWidth={step.highlight ? 1 : 1}
                    {...(step.highlight
                      ? highlightGradientOptions
                      : normalGradientOptions)}>
                    <CardHeader className="pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {step.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                variant="outline"
                                className="text-xs font-mono">
                                <Calendar className="w-3 h-3 mr-1" />
                                {step.year}
                              </Badge>
                              {step.highlight && (
                                <Badge className="text-xs bg-gradient-to-r from-primary to-primary/80">
                                  ✨ Milestone
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-xl font-semibold leading-tight">
                              {step.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </MagicCard>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-8 w-0.5 h-8 bg-gradient-to-t from-transparent to-transparent hidden md:block" />
      </div>

      <motion.div
        className="text-right pr-8 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 + steps.length * 0.1 }}>
        <p className="text-sm text-muted-foreground">
          The journey continues... 🚀
        </p>
      </motion.div>
    </div>
  );
}
