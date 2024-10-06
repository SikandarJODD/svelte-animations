import type { AceternityUI } from "../alltypes";
import Card from "./Card.svelte?raw";
import CardTitle from "./CardTitle.svelte?raw";
import CardDesc from "./CardDesc.svelte?raw";
import CardHoverEffect from "./CardHoverEffect.svelte?raw";

import CardHoverExample from "./CardHoverExample.svelte";
import CardHoverExampleCode from "./CardHoverExample.svelte?raw";

export let acetCardHoverEffect: AceternityUI = {
  id: "card-hover-effect",
  title: "Card Hover Effect",
  tags: ["card", "hover", "effect"],
  desc: "A card hover effect that zooms in on the card.",
  preview: {
    comp: CardHoverExample,
    allcode: [
      {
        code: CardHoverExampleCode,
        filename: "CardHoverExample.svelte",
        language: "svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm install clsx tailwind-merge",
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
          code: CardHoverEffect,
          filename: "Card.svelte",
          language: "svelte",
        },
        {
          title: "Copy the Card Source Code",
          code: Card,
          filename: "Card.svelte",
          language: "svelte",
        },
        {
          title: "Add Title Code",
          code: CardTitle,
          filename: "CardTitle.svelte",
          language: "svelte",
        },
        {
          title: "Add Description Code",
          code: CardDesc,
          filename: "CardDesc.svelte",
          language: "svelte",
        },
      ],
    },
  ],
};
