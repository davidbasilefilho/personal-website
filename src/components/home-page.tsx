import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Journey } from "./journey";
import { LineShadowText } from "./magicui/line-shadow-text";
import { SparklesText } from "./magicui/sparkles-text";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export default function HomePageComponent() {
  function calculateAge(birthDate: Date) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const dateOfBirth = new Date(2007, 1, 16); // 16/02/2007
  const age = calculateAge(dateOfBirth);
  const [test, setTest] = useState(0);
  const { resolvedTheme, theme, setTheme } = useTheme();
  setTheme("dark"); // Force dark theme for testing purposes
  useEffect(() => setTheme("dark"), [setTheme]);

  return (
    <main className="flex flex-col justify-stretch text-balance items-start h-fit min-h-full">
      <Button type="button" onClick={() => setTest((prev) => prev++)}>
        Test {test}
      </Button>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <section className="m-6 mt-10">
        <h1 className="**:text-5xl **:md:text-6xl **:font-semibold mb-2">
          <SparklesText className="inline-block">Building</SparklesText>{" "}
          <span className="italic">beautiful</span>{" "}
          <LineShadowText
            className="italic font-mono"
            shadowColor="var(--sidebar-accent-foreground)"
            offset="0.05em">
            code
          </LineShadowText>
        </h1>
        <h1 className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-color-2 via-chart-2 to-color-2 font-semibold leading-tight mb-3">
          David Basile Filho
        </h1>
        <h1 className="font-normal text-muted-foreground text-lg max-w-2xl leading-snug">
          I'm a brazilian {age} year old college developer who's been building
          software since the age of ten. I turn ideas into reality with code,
          and I love every second of it.
        </h1>
      </section>
      <div className="separator-animation" style={{ transformOrigin: "left" }}>
        <Separator />
      </div>
      <section className="self-stretch grow bg-accent p-6 rounded-b border-t">
        <Journey />
      </section>
    </main>
  );
}
