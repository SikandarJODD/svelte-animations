import type { AceternityUI } from "../alltypes";
import PhCards from "./examples/PHCards.svelte";
import PhCardsCode from "./examples/PHCards.svelte?raw";
import PhExample from "./examples/PHExample.svelte";
import PhExampleCode from "./examples/PHExample.svelte?raw";
import PHhero from "./examples/PHhero.svelte";
import PHheroCode from "./examples/PHhero.svelte?raw";
import Pointer from "./Pointer.svelte?raw";
import PointerHighlightCode from "./PointerHighlight.svelte?raw";

export let acetPointerHighlight: AceternityUI = {
  id: "pointer-highlight",
  title: "Pointer Highlight",
  tags: ["svelte 5", "highlight", "pointer"],
  desc: "A component that highlights elements when the pointer hovers over them.",
  preview: {
    comp: PhExample,
    isgridCenter: true,
    allcode: [
      {
        code: PointerHighlightCode,
        language: "svelte",
        filename: "PointerHighlight.svelte",
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
          code: PointerHighlightCode,
          filename: "PointerHighlight.svelte",
          language: "svelte",
        },
        {
          title: "Pointer Code",
          code: Pointer,
          filename: "Pointer.svelte",
          language: "svelte",
        },
      ],
    },
  ],
  examples: [
    {
      title: "Pointer Highlight Cards",
      desc: "An example showcasing the Pointer Highlight component with cards that highlight on hover.",
      preview: {
        comp: PhCards,
        isgridCenter: true,
        allcode: [
          {
            code: PhCardsCode,
            language: "svelte",
            filename: "PointerHighlightCards.svelte",
          },
        ],
      },
    },
    {
      title: "Pointer Highlight Hero",
      desc: "An example showcasing the Pointer Highlight component with a hero section that highlights on hover.",
      preview: {
        comp: PHhero,
        isgridCenter: true,
        allcode: [
          {
            code: PHheroCode,
            language: "svelte",
            filename: "PointerHighlightHero.svelte",
          },
        ],
      },
    },
  ],
};
