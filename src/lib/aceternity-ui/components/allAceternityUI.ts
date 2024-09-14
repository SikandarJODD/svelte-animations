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

import BasicBento from "./BentoGrid/examples/BasicBento.svelte";
import BasicBentoCode from "./BentoGrid/examples/BasicBento.svelte?raw";
import BentoSkeletonCode from "./BentoGrid/examples/BentoSkeleton.svelte?raw";
import BentoGridCode from "./BentoGrid/BentoGrid.svelte?raw";
import BentoGridItemCode from "./BentoGrid/BentoGridItem.svelte?raw";

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
      isgridCenter: true,
    },
    installations: [
      {
        desc: "Install the package",
        allcode: [
          {
            title: "Install dependencies",
            code: "npm i clsx tailwind-merge",
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
          isgridCenter: true,
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
          isgridCenter: true,
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
  {
    id: "bento-grid",
    title: "Bento Grid",
    desc: "A grid component to display images, videos, or practically anything.",
    tags: ["Grid", "Special", "Tailwind CSS"],
    preview: {
      comp: BasicBento,
      isgrid: true,
      allcode: [
        {
          code: BasicBentoCode,
          filename: "BasicBento.svelte",
          language: "svelte",
          class: "no-scrollbar overflow-y-auto h-[500px]",
        },
        {
          code: BentoSkeletonCode,
          filename: "BentoSkeleton.svelte",
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
            code: "npm i clsx tailwind-merge @tabler/icons-svelte",
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
            title: "Copy the Source Code - Bento Grid",
            code: BentoGridCode,
            filename: "BentoGrid.svelte",
            language: "svelte",
          },
          {
            title: "Copy the Source Code - Bento Grid Item",
            code: BentoGridItemCode,
            filename: "BentoGridItem.svelte",
            language: "svelte",
          },
        ],
      },
    ],
    examples: [
      {
        title: "Basic Bento",
        preview: {
          comp: BasicBento,
          allcode: [
            {
              code: BasicBentoCode,
              filename: "BasicBento.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[450px]",
            },
            {
              code: BentoSkeletonCode,
              filename: "BentoSkeleton.svelte",
              language: "svelte",
            },
          ],
        },
      },
    ],
  },
];
