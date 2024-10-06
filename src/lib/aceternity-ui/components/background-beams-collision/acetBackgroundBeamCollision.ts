import type { AceternityUI } from "../alltypes";
import BbCollisionExample from "./BBCollisionExample.svelte";
import BbCollisionExampleCode from "./BBCollisionExample.svelte?raw";

import BackgroundBeamCollisionCode from "./BackgroundBeamCollision.svelte?raw";
import CollisionMechanismCode from "./CollisionMechanism.svelte?raw";
import ExplosionCode from "./Explosion.svelte?raw";

export let acetBackgroundBeamCollision: AceternityUI = {
  id: "background-beam-collision",
  title: "Background Beam Collision",
  tags: ["background", "beam", "collision"],
  desc: "A background beam collision effect",
  preview: {
    comp: BbCollisionExample,
    allcode: [
      {
        code: BbCollisionExampleCode,
        language: "svelte",
        filename: "BBCollisionExample.svelte",
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
          code: BackgroundBeamCollisionCode,
          filename: "BackgroundBeamCollision.svelte",
        },
        {
          title: "Add Collision Mechanism Code",
          code: CollisionMechanismCode,
          filename: "CollisionMechanism.svelte",
        },
        {
          title: "Add Explosion Effect Code",
          code: ExplosionCode,
          filename: "ExplosionEffect.svelte",
        },
      ],
    },
  ],
};
