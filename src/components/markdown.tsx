import { HooksOptions, MarkdownHooks } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeStarryNight from "rehype-starry-night";
import remarkGfm from "remark-gfm";

export function Markdown({ children, ...props }: HooksOptions) {
  return (
    <MarkdownHooks
      {...props}
      rehypePlugins={[rehypeStarryNight, remarkGfm, rehypeRaw]}>
      {children}
    </MarkdownHooks>
  );
}
