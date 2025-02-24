import type { AceternityUI } from "../alltypes";
import ColourfulTextCode from "./ColourfulText.svelte?raw";
import ColourfulTextExample from "./ColourfulTextExample.svelte";
import ColourfulTextExampleCode from "./ColourfulTextExample.svelte?raw";


export let acetColorfulText: AceternityUI = {
  id: "colourful-text",
  title: "Colourful Text",
  tags: ["glowing", "svelte 5"],
  desc: "A text component with various colours, filter and scale effects.",
  preview: {
    comp: ColourfulTextExample,
    isgridCenter: true,
    allcode: [
      {
        code: ColourfulTextExampleCode,
        language: "svelte",
        filename: "ColourfulTextExample.svelte",
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
          code: ColourfulTextCode,
          filename: "GlowingEffect.svelte",
          language: "svelte",
        },

      ],
    },
  ],
};
