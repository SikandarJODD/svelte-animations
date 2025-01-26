import type { AceternityUI } from "../alltypes";
import AuroraBackgroundCode from "./AuroraBackground.svelte?raw";
import AurorabgExample from "./AurorabgExample.svelte";
import AurorabgExampleCode from "./AurorabgExample.svelte?raw";


export let acetAuroraBackground: AceternityUI = {
  id: 'aurora-background',
  title: 'Aurora Background',
  desc: 'Aurora Background is a component that can be used to create a background that changes color over time. Svelte 5 Code is mentioned below in Source Code file.',
  tags: ['background', 'aurora', 'color', 'Svelte 4 & 5'],
  preview: {
    comp: AurorabgExample,
    allcode: [
      {
        language: 'svelte',
        filename: 'AurorabgExample.svelte',
        code: AurorabgExampleCode,

      }
    ]
  },
  installations: [
    {
      allcode: [{
        title: 'Install Dependencies',
        desc: 'works only in svelte 4',
        code: 'npm i clsx tailwind-merge',
        filename: 'Terminal',
        language: 'shell'
      },
      {
        title: 'Add Util File',
        code: `import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`,
        filename: 'lib/util.ts',
        language: 'ts'
      },
      {
        title: 'Copy Tailwind CSS Config',
        code: `import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [\`--\${key}\`, val])
  );

  addBase({
    ":root": newVars,
  });
}
`,
        filename: 'tailwind.config.ts',
        language: 'ts'
      },
      {
        title: 'Copy Source Code',
        code: AuroraBackgroundCode,
        filename: 'AuroraBackground.svelte',

      }
      ]
    }
  ]
}