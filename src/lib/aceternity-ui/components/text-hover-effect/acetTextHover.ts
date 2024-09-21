import type { AceternityUI } from "../alltypes";
// import TextHoverComp from "./TextHoverComp.svelte";
import TextHoverCompCode from "./TextHoverComp.svelte?raw";

import TextHoverPreview from "./TextHoverPreview.svelte";
import TextHoverPreviewCode from "./TextHoverPreview.svelte?raw";

// Text Hover Effect Component
export let acetTextHoverEffect: AceternityUI = {
  id: "text-hover-effect",
  title: "Text Hover Effect",
  desc: "A text hover effect component to animate text on hover.",
  tags: ["Text", "Special", "Tailwind CSS"],
  preview: {
    comp: TextHoverPreview,
    allcode: [
      {
        code: TextHoverPreviewCode,
        filename: "TextHoverPreview.svelte",
        language: "svelte",
      },
    ],
  },
  installations: [
    {
      desc: "Installation",
      allcode: [
        {
          title: "Install dependencies",
          code: "npm i clsx tailwind-merge",
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
          title: "Add Tailwind CSS Plugin for variable classes",
          filename: "tailwind.config.ts",
          language: "json",
          code: `import { fontFamily } from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
const config: Config = {
darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme:{ 
            // rest of the code
  },
  plugins: [addVariablesForColors]
}
  
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [\`--\${key}\`, val])
  );

  addBase({
    ":root": newVars,
  });
}`,
        },
        {
            title:'Copy the Source Code - Text Hover Effect',
            code: TextHoverCompCode,
            language: 'svelte',
            filename: 'TextHoverEffect.svelte',
            class: 'no-scrollbar overflow-y-auto h-[500px]'
        }
      ],
    },
  ],
};
