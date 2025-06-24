import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/tanstack-react-start";
import { dark, experimental__simple } from "@clerk/themes";
import { Link, LinkComponentProps } from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import { buttonVariants } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";

const items: (LinkComponentProps & { label: React.ReactNode })[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/skills",
    label: "Skills",
  },
];

export function AppSidebar() {
  const { theme } = useTheme();
  let resolvedTheme = theme;
  if (theme === "system") {
    resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const clerkTheme = resolvedTheme === "dark" ? dark : experimental__simple;
  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-0 h-fit">
            <SidebarTrigger />
            David Basile Filho
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton>
                    <Link {...item}>{item.label}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SignedIn>
              <UserButton appearance={{ baseTheme: clerkTheme }} />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" appearance={{ baseTheme: clerkTheme }}>
                <div
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                  })}>
                  <LogIn className="w-4 h-4" />
                </div>
              </SignInButton>
            </SignedOut>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export function AppSidebarTrigger() {
  const { open } = useSidebar();
  return (
    <>{!open && <SidebarTrigger className="absolute top-4 left-4 z-50" />}</>
  );
}
