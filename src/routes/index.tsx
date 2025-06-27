import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import HomePageComponent from "@/components/home-page";

export const Route = createFileRoute("/")({
  component: lazyRouteComponent(() => import("@/components/home-page")),
});
