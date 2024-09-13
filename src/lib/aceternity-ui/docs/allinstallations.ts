type Installation = {
  id: string;
  title: string;
  desc: string;
  allcode: Code[];
};

type Code = {
  title: string; // title of the code snippet
  code: string; // code snippet
  desc?: string; // description of the code snippet
  language?: string; // bash, javascript, svelte
  filename?: string; // filename if the code is from a file
};

export let allInstallations: Installation[] = [
  {
    id: "install-sveltekit",
    title: "Install Sveltekit",
    desc: "Install Sveltekit using npm",
    allcode: [
      {
        title: "Create a new project",
        code: "npm create svelte@latest folder_name",
        language: "shellscript",
      },
      {
        title: "On installation, you'll see the following promps:",
        code: `Welcome to Sveltekit!

Which Svelte app template?
  > SvelteKit demo app 
  > Skeleton project ✅ 
  > Library project 
        
Add type checking with TypeScript?
  > Yes, using TypeScript syntax 
  > Yes, using JavaScript with JSDoc comments
  > No 
        
Select additional options 
  > Add ESLint for code linting
  > Add Prettier for code formatting ✅
  > Add Playwright for browser testing
  > Add Vitest for unit testing
  > Try the Svelte 5 preview
        
cd folder_name
npm install

npx svelte-add
CSS
  > Tailwind CSS ✅
# press enter to continue

Which package manager do you want to install dependencies with?
  > None
  > npm ✅
  > pnpm
  > yarn
  > bun

Successfully installed dependencies 
# ✨ Yeep! Your project is ready to go! ✨
        `,
        desc: "Select the options as per your requirement and proceed with the installation. make sure to install Tailwind CSS for styling.",
        language: "shellscript",
      },
      {
        title: "Start the development server",
        code: "npm run dev -- --open",
        language: "shellscript",
      },
    ],
  },
  {
    id: "install-tailwindcss",
    title: "Install Tailwind CSS",
    desc: "Install Tailwind CSS with Sveltekit",
    allcode: [
      {
        title: "Create your project",
        code: `npm create svelte@latest folder_name
cd folder_name`,
        language: "shellscript",
      },
      {
        title: "Install Tailwind CSS",
        code: `npx svelte-add@latest tailwindcss`,
        desc: "This will install Tailwind CSS in your project.",
        language: "shellscript",
      },
      {
        title: "Start your development server",
        code: "npm run dev -- --open",
        language: "shellscript",
      },
    ],
  },
  {
    id: "add-utilities",
    title: "Add utilities",
    desc: "Commonly used utilites for Svelte Acternity UI",
    allcode: [
      {
        title: "Install dependencies",
        code: `npm i svelte-motion clsx tailwind-merge`,
        language: "shellscript",
      },
      {
        title: "Add util file",
        code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
        language: "js",
        filename: "lib/util.ts",
      },
      {
        title: "Base Tailwind Config File",
        code: `import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import svgToDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
 
const config: Config= {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
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
}`,
        language: "ts",
        filename: "tailwind.config.ts",
      },
    ],
  },
];
