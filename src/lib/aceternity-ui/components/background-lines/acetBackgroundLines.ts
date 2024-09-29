import type { AceternityUI } from "../alltypes";

import BGlinesExample from "./BGlinesExample.svelte";
import BGlinesExampleCode from "./BGlinesExample.svelte?raw";

import BackgroundSvgCode from "./BackgroundSvg.svelte?raw";
import BackgroundLinesCode from "./BackgroundLines.svelte?raw";

export let acetBackgroundLines: AceternityUI = {
  id: "background-lines",
  title: "Background Lines",
  desc: "A set of svg paths that animate in a wave pattern. Good for hero sections background, as seen on height.app",
  tags: ["svg", "animation", "Svelte-Motion"],
  preview: {
    comp: BGlinesExample,
    allcode: [
      {
        code: BGlinesExampleCode,
        language: "svelte",
        filename: "BGlinesExample.svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm install tailwind-merge clsx svelte-motion",
          language: "shellscript",
          filename: "Terminal",
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
          code: BackgroundLinesCode,
          filename: "BackgroundLines.svelte",
          language: "svelte",
        },
        {
          title: "Copy the Source Code for SVG",
          code: BackgroundSvgCode,
          filename: "BackgroundSvg.svelte",
          language: "svelte",
          class: "no-scrollbar overflow-y-auto h-[550px]",
        },
      ],
    },
  ],
};
