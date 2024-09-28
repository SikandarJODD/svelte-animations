import type { AceternityUI } from "../alltypes";
import AcetSidebarExample from "./example/AcetSidebarExample.svelte";
import AcetSidebarExampleCode from "./example/AcetSidebarExample.svelte?raw";
import DesktopSidebarCode from "./DesktopSidebar.svelte?raw";
import MobileSidebarCode from "./MobileSidebar.svelte?raw";
import SidebarBodyCode from "./SidebarBody.svelte?raw";
import SidebarLinkCode from "./SidebarLink.svelte?raw";

export let acetSidebar: AceternityUI = {
  id: "sidebar",
  title: "Sidebar",
  desc: "Expandable sidebar that expands on hover, mobile responsive and dark mode support",
  tags: ["sidebar", "expandable", "responsive"],
  preview: {
    comp: AcetSidebarExample,
    allcode: [
      {
        code: AcetSidebarExampleCode,
        language: "svelte",
        filename: "AcetSidebarExample.svelte",
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
          title: "Copy the Source Code",
          code: `import { writable } from "svelte/store";
export let vopen = writable(false);
export let vanimate = writable(true);
`,
          filename: "svelteContent.ts",
          language: "typescript",
        },
        {
          title: "Add Source Code for Desktop",
          code: DesktopSidebarCode,
          filename: "DesktopSidebar.svelte",
          language: "svelte",
        },
        {
          title: "Add Source Code for Mobile",
          code: MobileSidebarCode,
          filename: "MobileSidebar.svelte",
          language: "svelte",
          class:'no-scrollbar h-[400px]'
        },
        {
          title: "Add Source Code for Sidebar Body",
          code: SidebarBodyCode,
          filename: "Sidebar.svelte",
          language: "svelte",
        },
        {
          title: "Add Source Code for Sidebar Link",
          code: SidebarLinkCode,
          filename: "SidebarLink.svelte",
          language: "svelte",
          class:'no-scrollbar h-[400px]'
        },
      ],
    },
  ],
};
