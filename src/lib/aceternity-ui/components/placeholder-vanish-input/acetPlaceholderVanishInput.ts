import type { AceternityUI } from "../alltypes";
import PhvPreview from "./PHVPreview.svelte";
import PlaceholderVanishInputCode from "./PlaceholderVanishInput.svelte?raw";

export let acetPlaceholderVanishInput: AceternityUI = {
  id: "placeholders-and-vanish-input",
  title: "Placeholders And Vanish Input",
  tags: ["input", "placeholder", "vanish", "Tailwind CSS"],
  desc: "Sliding in placeholders and vanish effect of input on submit",
  preview: {
    comp: PhvPreview,
    isgridCenter: true,
    allcode: [
      {
        code: "",
        language: "svelte",
        filename: "PlaceHolderExample.svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: "npm i clsx tailwind-merge",
          filename: "Terminal",
          language: "shellscript",
        },
        {
          title: "Add Util File",
          code: `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`,
          filename: "$lib/util.ts",
          language: "typescript",
        },
        {
          title: "Copy the Source Code",
          code: PlaceholderVanishInputCode,
          filename: "PlaceholderVanishInput.svelte",
          language: "svelte",
          class: "no-scrollbar overflow-y-auto h-[450px]",
        },
      ],
    },
  ],
};
