import type { AceternityUI } from "../alltypes";
import AcetDockExample from "./AcetDockExample.svelte";
import AcetDockExampleCode from "./AcetDockExample.svelte?raw";
import FloatingDockDesktopCode from "./FloatingDockDesktop.svelte?raw";
import FloatingDockMobileCode from "./FloatingDockMobile.svelte?raw";

export let acetFloatingDock: AceternityUI = {
  id: "floating-dock",
  title: "Floating Dock",
  desc: "A floating dock mac os style component, acts as a navigation bar.",
  tags: ["mac os", "floating", "navigation"],
  preview: {
    comp: AcetDockExample,
    allcode: [
      {
        code: AcetDockExampleCode,
        language: "svelte",
        filename: "AcetDockExample.svelte",
      },
    ],
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          code: `npm i tailwind-merge clsx svelte-motion`,
          filename: "Terminal",
        },
        {
          title: "Add Util file",
          code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
          filename: "lib/util.ts",
          language: "typescript",
        },
        {
          title: "Copy the Source Code - Desktop",
          code: FloatingDockDesktopCode,
          filename: "FloatingDockDesktop.svelte",
          language: "svelte",
        },
        {
          title: "Copy the Source Code - Mobile",
          code: FloatingDockMobileCode,
          filename: "FloatingDockMobile.svelte",
          language: "svelte",
        },
      ],
    },
  ],
};
