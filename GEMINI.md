## Building and running
To build the project locally, with Netlify as the target, run:
```powershell
bun run build
```

To run the dev environment, run:
```powershell
bun run dev
```

To lint and format with Biome, run:
```powershell
bun run format
bun run lint
```

To generate the Tanstack Start route tree, run:
```powershell
bun run generate
bun run watch # for watching changes
```

## Git Repo 
The main branch for this project is called `main`.

## Tech Stack
The Tech Stack for this project is:
- Tanstack Start (with Tanstack Router) as the framework.
- Convex as the BaaS. The files related to it are in convex/
- Clerk for authentication. It is integrated with Convex in this codebase.
- shadcn/ui and TailwindCSS for the UI components. Check src/components for the components. the CSS files are at src/styles/
- The app routes are at src/routes. Fetch `https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts.md` to verify how routes are made in Tanstack Start/Router.
- Arktype for validation of route params, search params, form input, etc.

## JavaScript/TypeScript

When contributing to this React, Node, and TypeScript codebase, please prioritize the use of plain JavaScript objects with accompanying TypeScript interface or type declarations over JavaScript class syntax. This approach offers significant advantages, especially concerning interoperability with React and overall code maintainability.

### Preferring Plain Objects over Classes

Prioritize plain JavaScript objects with TypeScript interfaces/types over class syntax for React components. This approach offers:

-   **Seamless React Integration:** Simplifies prop and state management, promoting immutable data flow.
-   **Reduced Boilerplate:** TypeScript interfaces provide static type checking without class verbosity, leading to more concise and readable code.
-   **Enhanced Readability & Predictability:** Clearer structure and direct property access reduce bugs and improve maintainability.
-   **Simplified Immutability:** Encourages creating new objects for updates, aligning with React's reconciliation.
-   **Better Serialization:** Plain objects are naturally easier to serialize/deserialize (e.g., to JSON).

### Embracing ES Module Syntax for Encapsulation

Leverage ES module syntax (`import`/`export`) for encapsulating private and public APIs, rather than Java-esque private/public class members.

-   **Clearer Public API Definition:** Exported members define the public API; unexported members are private to the module.
-   **Enhanced Testability:** Promotes testing public APIs, discouraging reliance on internal implementation details.
-   **Reduced Coupling:** Explicit module boundaries simplify refactoring, debugging, and understanding components.

### Avoiding `any` Types and Type Assertions; Preferring `unknown`

Avoid `any` types and use type assertions (`as Type`) with caution.

-   **`any` is dangerous**: It bypasses TypeScript's type checking, leading to potential runtime errors, reduced readability, and masked issues.
-   **Prefer `unknown`**: When types are uncertain, use `unknown`. It's type-safe, requiring explicit type narrowing (e.g., `typeof`, `instanceof`) before operations, preventing accidental errors.
    ```typescript
    function processValue(value: unknown) {
       if (typeof value === 'string') {
          console.log(value.toUpperCase());
       } else if (typeof value === 'number') {
          console.log(value * 2);
       }
    }
    ```
-   **Type Assertions (`as Type`)**: Use sparingly. They bypass type checks, introducing runtime errors if incorrect. Often a "code smell" in testing; consider refactoring for better testability.

### Embracing JavaScript's Array Operators

Leverage JavaScript's array operators (`.map()`, `.filter()`, `.reduce()`, etc.) for clean, functional, and immutable data manipulation.

-   **Promotes Immutability:** Operators return new arrays, preventing side effects.
-   **Improves Readability:** Chaining operators leads to concise and expressive code.
-   **Facilitates Functional Programming:** Encourages pure functions for robust and testable code.

## React (mirrored and adjusted from [react-mcp-server](https://github.com/facebook/react/blob/4448b18760d867f9e009e810571e7a3b8930bb19/compiler/packages/react-mcp-server/src/index.ts#L376C1-L441C94))

### Role

You are a React assistant that helps users write more efficient and optimizable React code. You specialize in identifying patterns that enable React Compiler to automatically apply optimizations, reducing unnecessary re-renders and improving application performance.

### Follow these guidelines in all code you produce and suggest

-   **Functional Components & Hooks**: Use `useState`, `useReducer`, and `useEffect` for state and side effects. Prefer functions and Hooks for new logic.
-   **Pure Components**: Ensure render logic is a pure function of props and state, free of side effects.
-   **One-Way Data Flow**: Pass data down via props. Lift state up or use Context for shared data.
-   **Immutable State Updates**: Never mutate state directly. Use spread syntax or new objects/arrays.
-   **Accurate `useEffect` Usage**: Use `useEffect` for synchronization only. Avoid `setState` within `useEffect`. Include all dependencies. Return cleanup functions.
-   **Rules of Hooks**: Call Hooks unconditionally at the top level of components or other Hooks.
-   **Refs Only When Necessary**: Use `useRef` for specific tasks (e.g., focusing, animations). Avoid for reactive state.
-   **Composition & Small Components**: Break UI into small, reusable components. Abstract repetitive logic into custom Hooks.
-   **Optimize for Concurrency**: Write code that is correct even if rendered multiple times. Use functional state updates. Include cleanup functions in effects.
-   **Reduce Network Waterfalls**: Use parallel data fetching. Leverage Suspense. Fetch related data together.
-   **Rely on React Compiler**: Omit `useMemo`, `useCallback`, and `React.memo` if React Compiler is enabled. Focus on clear, simple components.
-   **Good User Experience**: Provide clear UI states. Use placeholders for loading. Handle errors gracefully. Leverage Suspense for loading states.

### Process

1. Analyze the user's code for optimization opportunities:

   - Check for React anti-patterns that prevent compiler optimization
   - Look for component structure issues that limit compiler effectiveness
   - Think about each suggestion you are making and consult React docs for best practices

2. Provide actionable guidance:
   - Explain specific code changes with clear reasoning
   - Show before/after examples when suggesting changes
   - Only suggest changes that meaningfully improve optimization potential

### Optimization Guidelines

- State updates should be structured to enable granular updates
- Side effects should be isolated and dependencies clearly defined

## Comments policy

Only write high-value comments if at all. Avoid talking to the user through comments.