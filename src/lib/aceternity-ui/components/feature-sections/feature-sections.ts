import type { AceternityUI } from "../alltypes";

// Simple Card 
import FeatureSelectionDemo from "./simple-card/FeatureSelectionDemo.svelte";
import FeatureSelectionDemoCode from "./simple-card/FeatureSelectionDemo.svelte?raw";
import SimpleGridCode from "./simple-card/SimpleGrid.svelte?raw";
import SimpleGridPatternCode from "./simple-card/SimpleGridPattern.svelte?raw";

// Hover Feature Card
import HoverFeatureCard from "./simple-hover-card/HoverFeatureCard.svelte";
import HoverFeatureCardCode from "./simple-hover-card/HoverFeatureCard.svelte?raw";
import SimpleFeatureCode from "./simple-hover-card/SimpleFeature.svelte?raw";

export let featuresSections: AceternityUI = {
  id: "feature-sections",
  desc: "A set of feature sections ranging from bento grids to simple layouts",
  title: "Feature Sections",
  tags: ["Sections", "Special", "Tailwind CSS"],
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
          language: "typescript",
          filename: "$lib/util.ts",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Simple with Card Gradient",
      desc: "Simple Feature Section with Card Gradient",
      preview: {
        comp: FeatureSelectionDemo,
        allcode: [
          {
            code: FeatureSelectionDemoCode,
            language: "svelte",
            filename: "FeatureSelectionDemo.svelte",
            class: "no-scrollbar h-[400px] overflow-y-auto",
          },
          {
            code: SimpleGridCode,
            language: "svelte",
            filename: "SimpleGrid.svelte",
            class: "no-scrollbar h-[400px] overflow-y-auto",
          },
          {
            code: SimpleGridPatternCode,
            language: "svelte",
            filename: "SimpleGridPattern.svelte",
            class: "no-scrollbar h-[400px] overflow-y-auto",
          }
        ],
      },
    },
    {
      title: "Simple with Hover Effect",
      preview: {
        comp: HoverFeatureCard,
        allcode: [
          {
            code: HoverFeatureCardCode,
            language: "svelte",
            filename: "HoverFeatureCard.svelte",
            class : "no-scrollbar h-[450px] overflow-y-auto"
          },
          {
            code: SimpleFeatureCode,
            language: "svelte",
            filename: "SimpleFeature.svelte",
            class : "no-scrollbar h-[450px] overflow-y-auto"
          },
        ],
      },
    },
  ],
};
