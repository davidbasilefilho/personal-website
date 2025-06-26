import { MotionProps, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  offset?: string;
  as?: React.ElementType;
}

export function LineShadowText({
  children,
  shadowColor = "black",
  offset = "0.04em",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion.create(Component);
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  return (
    <MotionComponent
      style={
        {
          "--shadow-color": shadowColor,
          "--shadow-offset": offset,
        } as React.CSSProperties
      }
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:left-[var(--shadow-offset)] after:top-[var(--shadow-offset)] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className,
      )}
      data-text={content}
      {...props}>
      {content}
    </MotionComponent>
  );
}
