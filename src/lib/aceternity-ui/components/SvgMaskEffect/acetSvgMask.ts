import { type AceternityUI } from "../alltypes";
import SvgMaskEffectCode from "./SvgMaskEffect.svelte?raw";
import SvgMaskPreview from "./SvgMaskPreview.svelte";
import SvgMaskPreviewCode from "./SvgMaskPreview.svelte?raw";

export let acetSvgMaskEffect: AceternityUI = {
  id: "svg-mask-effect",
  title: "SVG Mask Effect",
  desc: "A mask reveal effect, hover the cursor over a container to reveal what's underneath.",
  tags: ["SVG", "Special", "Tailwind CSS",'Svelte Motion'],
  preview: {
    comp: SvgMaskPreview,
    class: "overflow-hidden relative",
    allcode: [
      {
        code: SvgMaskPreviewCode,
        language: "svelte",
        filename: "SvgMaskPreview.svelte",
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
          title: "Add Mask in Folder",
          language: 'svelte',
          filename: "mask.svg",
          code: `<svg
  width="1298"
  height="1298"
  viewBox="0 0 1298 1298"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="649" cy="649" r="649" fill="black" />
</svg>
`,
        },
        {
          title: "Copy the Source Code",
          filename: "SvgMaskEffect.svelte",
          language: "svelte",
          code: SvgMaskEffectCode,
          class: "h-[500px] relative no-scrollbar",
        },
      ],
    },
  ],
};
