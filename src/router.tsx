import { ConvexQueryClient } from "@convex-dev/react-query";
import {
  dehydrate,
  hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { DefaultCatchBoundary } from "./components/DefaultCatchBoundary";
import { NotFound } from "./components/NotFound";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL!;
  if (!CONVEX_URL) {
    throw new Error("missing VITE_CONVEX_URL envar");
  }
  const convex = new ConvexReactClient(CONVEX_URL, {
    unsavedChangesWarning: false,
  });
  const convexQueryClient = new ConvexQueryClient(convex);

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
      },
    },
  });
  convexQueryClient.connect(queryClient);

  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultSsr: true,
    defaultPendingMs: 0,
    defaultViewTransition: true,
    defaultNotFoundComponent: () => <NotFound />,
    context: { queryClient, convexClient: convex, convexQueryClient },

    dehydrate: () => {
      return {
        queryClientState: dehydrate(queryClient),
      };
    },

    hydrate: (dehydrated) => {
      hydrate(queryClient, dehydrated.queryClientState);
    },

    Wrap: ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={convexQueryClient.queryClient}>
        <ConvexProvider client={convexQueryClient.convexClient}>
          {children}
        </ConvexProvider>
      </QueryClientProvider>
    ),
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
