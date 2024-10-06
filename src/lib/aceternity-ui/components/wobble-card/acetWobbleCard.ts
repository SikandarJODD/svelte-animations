import type { AceternityUI } from "../alltypes";
import ExampleWobbleCard from "./ExampleWobbleCard.svelte";
import ExampleWobbleCardCode from "./ExampleWobbleCard.svelte?raw";
import WobbleCard from "./WobbleCard.svelte?raw";

export let acetWobbleCard: AceternityUI = {
  id: "wobble-card",
  title: "Wobble Card",
  tags: ["card", "wobble", "hover", "svelte"],
  desc: "A wobble effect that happens on hover.",
  preview: {
    comp: ExampleWobbleCard,
    isgrid: true,
    allcode: [
      {
        code: ExampleWobbleCardCode,
        language: "svelte",
        filename: "ExampleWobbleCard.svelte",
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
          code: WobbleCard,
          filename: "WobbleCard.svelte",
        },
      ],
    },
  ],
};
