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

// Bento Grid Component
import BasicBento from "./BentoGrid/examples/BasicBento.svelte";
import BasicBentoCode from "./BentoGrid/examples/BasicBento.svelte?raw";
import BentoSkeletonCode from "./BentoGrid/examples/BentoSkeleton.svelte?raw";
import BentoGridCode from "./BentoGrid/BentoGrid.svelte?raw";
import BentoGridItemCode from "./BentoGrid/BentoGridItem.svelte?raw";

// Bento Premium Example
import BentoPremium from "./BentoGrid/examples/premium/BentoPremium.svelte";
import BentoPremiumCode from "./BentoGrid/examples/premium/BentoPremium.svelte?raw";
import SkeletonOneCode from "./BentoGrid/examples/premium/SkeletonOne.svelte?raw";
import SkeletonTwoCode from "./BentoGrid/examples/premium/SkeletonTwo.svelte?raw";
import SkeletonThreeCode from "./BentoGrid/examples/premium/SkeletonThree.svelte?raw";
import SkeletonFourCode from "./BentoGrid/examples/premium/SkeletonFour.svelte?raw";
import SkeletonFiveCode from "./BentoGrid/examples/premium/SkeletonFive.svelte?raw";

// BentoTwo Column Example
import BentoTwoColumn from "./BentoGrid/examples/TwoColumn/BentoTwoColumn.svelte";
import BentoTwoColumnCode from "./BentoGrid/examples/TwoColumn/BentoTwoColumn.svelte?raw";
import TwoColumnSkeletonCode from "./BentoGrid/examples/TwoColumn/TwoColumnSkeleton.svelte?raw";
import { featuresSections } from "./feature-sections/feature-sections";
import { acetTextHoverEffect } from "./text-hover-effect/acetTextHover";
import { acetSvgMaskEffect } from "./SvgMaskEffect/acetSvgMask";
import { acetCompare } from "./Compare/acetCompare";
import { acetDirectionHover } from "./DirectionHover/acetDirectionHover";
import { acetHoverBorderGradient } from "./hover-border-gradient/acetHoverBorderGradient";
import { acetPlaceholderVanishInput } from "./placeholder-vanish-input/acetPlaceholderVanishInput";

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
      {
        title: "Populated with Header and Content",
        preview: {
          comp: BentoPremium,
          isgrid: true,
          allcode: [
            {
              code: BentoPremiumCode,
              filename: "BentoPremium.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[400px]",
            },
            {
              code: SkeletonOneCode,
              filename: "SkeletonOne.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[300px]",
            },
            {
              code: SkeletonTwoCode,
              filename: "SkeletonTwo.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[300px]",
            },
            {
              code: SkeletonThreeCode,
              filename: "SkeletonThree.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[300px]",
            },
            {
              code: SkeletonFourCode,
              filename: "SkeletonFour.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[300px]",
            },
            {
              code: SkeletonFiveCode,
              filename: "SkeletonFive.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[300px]",
            },
          ],
        },
      },
      {
        title: "2 Column Grid",
        preview: {
          comp: BentoTwoColumn,
          isgrid: true,
          allcode: [
            {
              code: BentoTwoColumnCode,
              filename: "BentoTwoColumn.svelte",
              language: "svelte",
              class: "no-scrollbar overflow-y-auto h-[400px]",
            },
            {
              code: TwoColumnSkeletonCode,
              filename: "TwoColumnSkeleton.svelte",
              language: "svelte",
            },
          ],
        },
      },
    ],
  },
  featuresSections,
  acetTextHoverEffect,
  acetSvgMaskEffect,
  acetCompare,
  acetDirectionHover,
  acetHoverBorderGradient,
  acetPlaceholderVanishInput,
];
