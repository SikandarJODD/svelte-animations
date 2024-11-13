import type { AceternityUI } from "../alltypes";
import AnimatedTestimonialsCode from "./AnimatedTestimonials.svelte?raw";
import ExampleAt from "./ExampleAT.svelte";
import ExampleAtCode from "./ExampleAT.svelte?raw";

export let acetAnimatedTestimonials: AceternityUI = {
  id: "animated-testimonials",
  title: "Animated Testimonials",
  desc: "Minimal testimonials sections with image and quote.",
  tags: ["testimonial", "animation", "svelte-motion"],
  preview: {
    comp: ExampleAt,
    allcode: [
      {
        code: ExampleAtCode,
        language: "svelte",
        filename: "ExampleAT.svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm install clsx tailwind-merge svelte-motion",
          filename: "Terminal",
          language: "shellscript",
        },
        {
          title: "Add Util File",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`,
          filename: "lib/util.ts",
          language: "ts",
        },
        {
          title: "Copy the Source Code",
          code: AnimatedTestimonialsCode,
          filename: "AnimatedTestimonials.svelte",
        },
      ],
    },
  ],
};
