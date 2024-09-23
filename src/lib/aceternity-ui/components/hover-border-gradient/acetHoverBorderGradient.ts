import type { AceternityUI } from "../alltypes";

import HbgPreview from "./HBGPreview.svelte";
import HbgPreviewCode from "./HBGPreview.svelte?raw";
import HoverBorderGradientCode from "./HoverBorderGradient.svelte?raw";

export let acetHoverBorderGradient: AceternityUI = {
  id: "hover-border-gradient",
  title: "Hover Border Gradient",
  tags: ["border", "gradient", "hover", "Tailwind CSS"],
  desc: "A hover effect that expands to the entire container with a gradient border.",
  preview: {
    comp: HbgPreview,
    isgridCenter: true,
    allcode: [
      {
        code: HbgPreviewCode,
        language: "svelte",
        filename: "HoverBorderGradient.svelte",
      },
    ],
  },
  installations: [
    {
      desc: "Installation",
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm i clsx tailwind-merge",
          filename: "Terminal",
          language: "shellscript",
        },
        {
          title: "Add Util File",
          code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`,
          filename: "lib/util.ts",
          language: "ts",
        },
        {
          title: "Copy the Source Code",
          filename: "HoverBorderGradient.svelte",
          code: HoverBorderGradientCode,
          language: "svelte",
          class: "no-scrollbar overflow-y-auto h-[400px]",
        },
      ],
    },
  ],
};
