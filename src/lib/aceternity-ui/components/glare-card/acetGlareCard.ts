import type { AceternityUI } from "../alltypes";
import GlareExampleCard from "./GlareExampleCard.svelte";
import GlareExampleCardCode from "./GlareExampleCard.svelte?raw";

import GlareCardCode from "./GlareCard.svelte?raw";
import GlareSvgCode from "./svelte.svg?raw";

export let acetGlareCard: AceternityUI = {
  id: "glare-card",
  title: "Glare Card",
  tags: ["card", "glare", "hover", "svelte"],
  desc: "A glare effect that happens on hover, as seen on Linear's website",
  preview: {
    comp: GlareExampleCard,
    isgridCenter: true,
    allcode: [
      {
        code: GlareExampleCardCode,
        language: "svelte",
        filename: "GlareExampleCard.svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm install clsx tailwind-merge",
          language: "shellscript",
          filename: "Terminal",
        },
        {
          title: "Add Util File",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
          filename: "lib/util.ts",
          language: "ts",
        },
        {
          title: "Copy the Source Code",
          code: GlareCardCode,
          filename: "GlareCard.svelte",
          language: "svelte",
        },
        {
          title: "Add SVG",
          code: GlareSvgCode,
          filename: "svelte.svg",
        },
      ],
    },
  ],
};
