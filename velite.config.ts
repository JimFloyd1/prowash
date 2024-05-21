import { Description } from "@headlessui/react";
import { defineConfig, defineCollection, s } from "velite";


const posts = defineCollection({
    name: "Post",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999).optional()
})
})
