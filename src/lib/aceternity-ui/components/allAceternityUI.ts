import type { AceternityUI } from "./alltypes";

// Lens Component
import Lens from "./Lens/Lens.svelte";
import LensCode from "./Lens/Lens.svelte?raw";
import LensPreview from "./Lens/LensPreview.svelte";
import LensPreviewCode from "./Lens/LensPreview.svelte?raw";
import LensWholeComp from "./Lens/examples/LensWholeComp.svelte";
import LensWholeCompCode from "./Lens/examples/LensWholeComp.svelte?raw";
import BaiscWithAnimation from "./Lens/examples/BaiscWithAnimation.svelte";
import BaiscWithAnimationCode from "./Lens/examples/BaiscWithAnimation.svelte?raw";

export let allAceternityUI: AceternityUI[] = [
  {
    id: "lens",
    title: "Lens",
    desc: "A lens component to zoom into images, videos, or practically anything.",
    tags: ["Cards", "Special", "Tailwind CSS"],
    preview: {
      comp: LensPreview,
      allcode: [
        {
          code: LensPreviewCode,
          filename: "LensPreview.svelte",
          language: "svelte",
        },
      ],
    },
    installations: [
      {
        desc: "Install the package",
        allcode: [
          {
            title: "Install dependencies",
            code: "npm clsx tailwind-merge",
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
            code: LensCode,
            filename: "Lens.svelte",
            language: "svelte",
            class: "no-scrollbar overflow-y-auto h-[400px]",
          },
        ],
      },
    ],
    examples: [
      {
        title: "Basic with Animation",
        desc: "A basic example with animation",
        preview: {
          comp: BaiscWithAnimation,
          allcode: [
            {
              code: BaiscWithAnimationCode,
              filename: "LensExample.svelte",
            },
          ],
        },
      },
      {
        title: "Lens on Whole Svelte Component",
        desc: "A basic example with animation",
        preview: {
          comp: LensWholeComp,
          allcode: [
            {
              code: LensWholeCompCode,
              filename: "LensWholeCompExample.svelte",
            },
          ],
        },
      },
    ],
  },
];
