import type { AceternityUI } from "../alltypes";
import LayoutGridExample from "./examples/LayoutGridExample.svelte";
import LayoutGridExampleCode from "./examples/LayoutGridExample.svelte?raw";
import LayoutGridCode from "./LayoutGrid.svelte?raw";

export let acetLayoutGrid: AceternityUI = {
  id: "layout-grid",
  title: "Layout Grid",
  desc: "A layout effect that animates the grid item on click, powered by framer motion layout",
  tags: ["animation", "Svelte-Motion"],
  preview: {
    comp: LayoutGridExample,
    allcode: [
      {
        code: LayoutGridExampleCode,
        language: "svelte",
        filename: "LayoutGridExample.svelte",
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
          code: LayoutGridCode,
          filename: "LayoutGrid.svelte",
          class: "no-scrollbar overflow-y-auto h-[550px]",
        },
      ],
    },
  ],
};
