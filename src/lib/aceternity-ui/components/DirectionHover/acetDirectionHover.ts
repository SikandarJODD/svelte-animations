import type { AceternityUI } from "../alltypes";
import DirectionHoverCode from "./DirectionHover.svelte?raw";
import DirectionHoverPreview from "./DirectionHoverPreview.svelte";
import DirectionHoverPreviewCode from "./DirectionHoverPreview.svelte?raw";

export let acetDirectionHover: AceternityUI = {
  id: "direction-hover",
  title: "Direction Hover",
  desc: "A direction aware hover effect using Svelte Motion, Tailwindcss and good old javascript.",
  tags: ["Hover", "Special", "Tailwind CSS", "Svelte Motion"],
  preview: {
    comp: DirectionHoverPreview,
    isgrid: true,
    allcode: [
      {
        code: DirectionHoverPreviewCode,
        language: "svelte",
        filename: "DirectionHoverExample.svelte",
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
          language: "shellscript",
          filename: "Terminal",
        },
        {
          title: "Add Util file",
          filename: "$lib/util.ts",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
          language: "typescript",
        },
        {
            title:'Copy the Source Code of DirectionHover.svelte',
            filename:'DirectionHover.svelte',
            code:DirectionHoverCode,
            language:'svelte',
            class: 'h-[400px] no-scrollbar'
        }
      ],
    },
  ],
};
