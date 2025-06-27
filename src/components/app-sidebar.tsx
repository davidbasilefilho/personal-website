import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/tanstack-react-start";
import {
  Link,
  LinkComponentProps,
  useRouterState,
} from "@tanstack/react-router";
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
  {
    to: "/posts",
    label: "Posts",
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
            <SidebarMenu className="w-full *:**:w-full">
              {items.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    variant={pathname === item.to ? "active" : "default"}
                    className="p-0">
                    <Link className="no-underline decoration-0 p-2" {...item}>
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
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
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
  const { open, openMobile, isMobile } = useSidebar();
  return (
    <>
      {(!open || (!openMobile && isMobile)) && (
        <SidebarTrigger className="absolute top-2 left-2 md:top-4 md:left-4 z-50" />
      )}
    </>
  );
}
