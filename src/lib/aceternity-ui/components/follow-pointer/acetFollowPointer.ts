import type { AceternityUI } from "../alltypes";
import AcetFollowPointerExample from "./AcetFollowPointerExample.svelte";
import AcetFollowPointerExampleCode from "./AcetFollowPointerExample.svelte?raw";
import FollowPointerCode from "./FollowPointer.svelte?raw";
import FollowPointerCardCode from "./FollowPointerCard.svelte?raw";

export let acetFollowPointer: AceternityUI = {
  id: "follow-pointer",
  title: "Follow Pointer",
  desc: "A floating card that follows the pointer.",
  tags: ["Cards", "Special", "Tailwind CSS"],
  preview: {
    comp: AcetFollowPointerExample,
    allcode: [
      {
        code: AcetFollowPointerExampleCode,
        language: "svelte",
        filename: "loatingPointerExample.svelte",
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
          filename: "lib/util.ts",
          language: "typescript",
        },
        {
          title: "Copy the Source Code",
          code: FollowPointerCode,
          filename: "FollowPointer.svelte",
          language: "svelte",
          class: "no-scrollbar h-[500px]",
        },
        {
          title: "Add Follow Pointer Card",
          code: FollowPointerCardCode,
          filename: "FollowPointerCard.svelte",
          language: "svelte",
          class: "no-scrollbar h-[500px]",
        },
      ],
    },
  ],
};
