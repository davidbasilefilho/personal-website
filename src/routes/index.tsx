import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Journey } from "@/components/journey";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Separator } from "@/components/ui/separator";
import { LineShadowText } from "../components/magicui/line-shadow-text";
import { SparklesText } from "../components/magicui/sparkles-text";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function calculateAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function RouteComponent() {
  const dateOfBirth = new Date(2007, 1, 16); // 16/02/2007
  const age = calculateAge(dateOfBirth);
  const baseDelay = 500;

  return (
    <motion.main
      className="flex flex-col justify-stretch text-balance items-start h-fit min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <motion.section
        className="m-6 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
        <motion.h1
          className="**:text-5xl **:md:text-6xl **:font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}>
          <SparklesText className="inline-block">Building</SparklesText>{" "}
          <span className="italic">beautiful</span>{" "}
          <LineShadowText
            className="italic font-mono"
            shadowColor="var(--sidebar-accent-foreground)"
            offset="0.05em">
            code
          </LineShadowText>
        </motion.h1>
        <h1 className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-color-2 via-chart-2 to-color-2 font-semibold leading-tight mb-3">
          David Basile Filho
        </h1>
        <h1 className="font-normal text-muted-foreground text-lg max-w-2xl leading-snug">
          I'm a brazilian {age} year old college developer who's been building
          software since the age of ten. I turn ideas into reality with code,
          and I love every second of it.
        </h1>
      </motion.section>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}>
        <Separator />
      </motion.div>
      <section className="self-stretch grow bg-accent p-6 rounded-b border-t">
        <Journey />
      </section>
    </motion.main>
  );
}
