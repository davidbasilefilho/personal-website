import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/tanstack-react-start";
import { dark } from "@clerk/themes";
import {
  Link,
  LinkComponentProps,
  useRouterState,
} from "@tanstack/react-router";
import { LogIn } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
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
  const router = useRouterState();
  const pathname = router.location.pathname;
  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-0 h-fit mb-0.5">
            <SidebarTrigger />
            David Basile Filho
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    variant={pathname === item.to ? "active" : "default"}>
                    <Link
                      className="w-full no-underline decoration-0"
                      {...item}>
                      {item.label}
                    </Link>
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
              <UserButton appearance={{ baseTheme: dark }} />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" appearance={{ baseTheme: dark }}>
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
  const { open, openMobile } = useSidebar();
  return (
    <>
      {(!open || !openMobile) && (
        <SidebarTrigger className="absolute top-4 left-4 z-50" />
      )}
    </>
  );
}
