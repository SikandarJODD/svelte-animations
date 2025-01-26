import type { AceternityUI } from "../alltypes";
import AnimatedTooltipCode from "./AnimatedTooltip.svelte?raw";
import AtExample from "./ATExample.svelte";
import AtExampleCode from "./ATExample.svelte?raw";


export let acet_animated_tooltip: AceternityUI = {
  id: "animated-tooltip",
  title: "Animated Tooltip",
  desc: "A tooltip that animates in and out. Good for showing more information on hover",
  tags: ["tooltip", "animation", "Svelte-Motion", 'Svelte 4'],
  preview: {
    comp: AtExample,
    allcode: [
      {
        code: AtExampleCode,
        filename: "AnimatedTooltipExample.svelte",
        language: "svelte"
      }
    ]
  },
  installations: [
    {
      allcode: [
        {
          title: "Install Dependencies",
          desc: "works only in svelte 4",
          code: "npm i svelte-motion clsx tailwind-merge",
          language: "bash",
          filename: "Terminal"
        },
        {
          title: "Add Util File",
          code: `import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`,
          filename: "lib/util.ts",
        },
        {
          title: "Copy the Source Code",
          code: AnimatedTooltipCode,
          filename: "AnimatedTooltip.svelte",
        }
      ]
    }
  ]
};