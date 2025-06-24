import { createFileRoute } from "@tanstack/react-router";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Separator } from "@/components/ui/separator";
import { AuroraText } from "../components/magicui/aurora-text";
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
    <main className="flex flex-col justify-stretch text-balance items-start h-fit min-h-full">
      <section className="m-6 mt-10">
        <h1 className="**:text-5xl **:md:text-6xl **:font-semibold mb-2">
          <SparklesText className="inline-block">Building</SparklesText>{" "}
          <span className="italic">beautiful</span>{" "}
          <LineShadowText
            className="italic font-mono"
            shadowColor="var(--sidebar-accent-foreground)">
            code
          </LineShadowText>
        </h1>
        <TypingAnimation
          duration={50}
          delay={baseDelay}
          className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-color-2 via-chart-2 to-color-2 font-semibold leading-tight mb-4">
          David Basile Filho
        </TypingAnimation>
        <TypingAnimation
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-tight font-normal"
          duration={10}
          delay={baseDelay + 1500}>
          {`I'm a brazilian ${age} year old college developer who's been building software since the age of ten. I turn ideas into reality with code, and I love every second of it.`}
        </TypingAnimation>
      </section>
      <Separator />
      <section className="self-stretch grow bg-gradient-to-br from-accent to-destructive/10 p-6 rounded-b">
        <h1 className="text-3xl font-semibold">My journey</h1>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="mb-4">
            <h2 className="text-xl font-semibold">Step {i + 1}</h2>
            <p className="text-muted-foreground">
              This is a description of step {i + 1} in my journey.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
