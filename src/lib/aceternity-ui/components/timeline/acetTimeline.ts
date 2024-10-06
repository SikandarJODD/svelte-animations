import type { AceternityUI } from "../alltypes";

import Content1Code from "./example/Content1.svelte?raw";
import Content2Code from "./example/Content3.svelte?raw";
import Content3Code from "./example/Content3.svelte?raw";
import ExampleTimeline from "./example/ExampleTimeline.svelte";
import ExampleTimelineCode from "./example/ExampleTimeline.svelte?raw";

import Timeline from "./Timeline.svelte?raw";

export let acetTimeline: AceternityUI = {
  id: "timeline",
  title: "Timeline",
  tags: ["timeline", "svelte"],
  desc: "A timeline component",
  preview: {
    comp: ExampleTimeline,
    class: "overflow-hidden",
    allcode: [
      {
        code: ExampleTimelineCode,
        language: "svelte",
        filename: "ExampleTimeline.svelte",
      },
      {
        code: Content1Code,
        filename: "Content1.svelte",
        language: "svelte",
        class: "h-[400px]",
      },
      {
        code: Content2Code,
        filename: "Content2.svelte",
        language: "svelte",
        class: "h-[400px]",
      },
      {
        code: Content3Code,
        filename: "Content3.svelte",
        language: "svelte",
        class: "h-[400px]",
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
          code: Timeline,
          filename: "Timeline.svelte",
        },
      ],
    },
  ],
};
