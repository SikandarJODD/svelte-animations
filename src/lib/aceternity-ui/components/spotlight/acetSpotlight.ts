import type { AceternityUI } from "../alltypes";
import ExampleSpotlight from "./ExampleSpotlight.svelte";
import ExampleSpotlightCode from "./ExampleSpotlight.svelte?raw";
import SpotlightCode from "./Spotlight.svelte?raw";

export let acetSpotlight: AceternityUI = {
  id: "spotlight",
  title: "Spotlight",
  desc: "Spotlight component that highlights a particular content",
  tags: ["spotlight", "highlight", "content"],
  preview: {
    comp: ExampleSpotlight,
    allcode: [
      {
        code: ExampleSpotlightCode,
        language: "svelte",
        filename: "ExampleSpotlight.svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: `npm i tailwind-merge clsx`,
          filename: "Terminal",
        },
        {
          title: "Add Util file",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`,
          language: "ts",
          filename: "lib/util.ts",
        },
        {
          title: "Copy tailwind.config.js",
          filename: "tailwind.config.ts",
          code: `theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  }`,
        },
        {
          title: "Copy the Source Code",
          code: SpotlightCode,
        },
      ],
    },
  ],
};
