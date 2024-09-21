import type { AceternityUI } from "../alltypes";
import CompareCode from "./Compare.svelte?raw";
import ComparePreview from "./ComparePreview.svelte";
import ComparePreviewCode from "./ComparePreview.svelte?raw";
export let acetCompare: AceternityUI = {
  id: "compare",
  title: "Compare",
  desc: "A comparison component between two images, slide or drag to compare",
  tags: ["Image", "Special", "Tailwind CSS", "Svelte Motion"],
  preview: {
    comp: ComparePreview,
    isgrid: true,
    allcode: [
      {
        code: ComparePreviewCode,
        language: "svelte",
        filename: "ComparePreview.svelte",
      },
    ],
  },
  installations: [
    {
      desc: "Installation",
      allcode: [
        {
          title: "Install dependencies",
          code: "npm i clsx tailwind-merge svelte-motion",
          filename: "Terminal",
          language: "shellscript",
        },
        {
          title: "Add Util File",
          filename: "lib/util.ts",
          language: "ts",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
        },
        {
          title: "Copy the Source Code - Compare.svelte",
          filename: "Compare.svelte",
          language: "svelte",
          code: CompareCode,
          class: "no-scrollbar  h-[500px]",
        },
      ],
    },
  ],
};
