import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutoLink from "rehype-autolink-headings";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      // rehypePlugins: [rehypeSlug, [rehypeAutoLink, { behavior: "append" }]],
      remarkPlugins: [
        [
          remarkToc,
          {
            skip: /Alexandre CADIOT|Senior Front-end Developer/gi,
          },
        ],
      ],
    }),
  ],
});
