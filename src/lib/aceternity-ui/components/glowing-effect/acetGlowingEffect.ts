import type { AceternityUI } from "../alltypes";

import GlowingEffectCode from "./GlowingEffect.svelte?raw";
import GlowingEffectExample from "./GlowingEffectExample.svelte";
import GlowingEffectExampleCode from "./GlowingEffectExample.svelte?raw";

export let acetGlowingEffect: AceternityUI = {
  id: "glowing-effect",
  title: "Glowing Effect",
  tags: ["glowing", "svelte 4 only"],
  desc: "A glare effect that happens on hover, as seen on Linear's website",
  preview: {
    comp: GlowingEffectExample,
    isgridCenter: true,
    allcode: [
      {
        code: GlowingEffectExampleCode,
        language: "svelte",
        filename: "GlowingEffectExample.svelte",
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
          code: GlowingEffectCode,
          filename: "GlowingEffect.svelte",
          language: "svelte",
        },

      ],
    },
  ],
};
