import type { AceternityUI } from "../alltypes";
import FeatureDemoCard from "./feature-block-animated/FeatureDemoCard.svelte";
import FeatureDemoCardCode from "./feature-block-animated/FeatureDemoCard.svelte?raw";

import Card from "./feature-block-animated/Card.svelte?raw";
import CardTitle from "./feature-block-animated/CardTitle.svelte?raw";
import CardDesc from "./feature-block-animated/CardDesc.svelte?raw";
import CardSkeletonContainer from "./feature-block-animated/CardSkeletonContainer.svelte?raw";
import FeatureSkeleton from "./feature-block-animated/FeatureSkeleton.svelte?raw";
import Container from "./feature-block-animated/Container.svelte?raw";
import SparkleCard from "./feature-block-animated/SparkleCard.svelte?raw";

export let acetCards: AceternityUI = {
  id: "cards",
  title: "Cards",
  desc: "A set of cards that can be used for different use cases",
  tags: ["cards", "ui"],
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm i tailwind-merge clsx",
          filename: "Terminal",
          language: "shellscript",
        },
        {
          title: "Add Util file",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`,
          filename: "lib/util.ts",
          language: "typescript",
        },
        {
          title: "Modify Tailwind Config File",
          code: `theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    }
},`,
          filename: "tailwind.config.ts",
          language: "typescript",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Feature Block Animated Card",
      preview: {
        comp: FeatureDemoCard,
        allcode: [
          {
            code: FeatureDemoCardCode,
            filename: "FeatureDemoCard.svelte",
            language: "svelte",
          },
          {
            code: Card,
            filename: "Card.svelte",
            language: "svelte",
          },
          {
            code: CardTitle,
            filename: "CardTitle.svelte",
            language: "svelte",
          },
          {
            code: CardDesc,
            filename: "CardDesc.svelte",
            language: "svelte",
          },
          {
            code: CardSkeletonContainer,
            filename: "CardSkeletonContainer.svelte",
            language: "svelte",
          },
          {
            code: FeatureSkeleton,
            filename: "FeatureSkeleton.svelte",
            language: "svelte",
          },
          {
            code: Container,
            filename: "Container.svelte",
          },
          {
            code: SparkleCard,
            filename: "SparkleCard.svelte",
          },
        ],
      },
    },
  ],
};
