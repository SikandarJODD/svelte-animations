import { cncode } from "$lib/cncode";
import { allMagicTailwinds } from "../AllMagicTailwinds";
import type { MagicComponent } from "../AllTypes";

//  Border Beam
import BorderBeam from "./BorderBeam/BorderBeam.svelte";
import BorderBeamCode from "./BorderBeam/BorderBeam.svelte?raw";
import BorderBeamExample from "./BorderBeam/BorderBeamExample.svelte";
import BorderBeamExampleCode from "./BorderBeam/BorderBeamExample.svelte?raw";

// Meteors
import Meteors from "./Meteors/Meteors.svelte";
import MeteorsCode from "./Meteors/Meteors.svelte?raw";
import MeteorsExample from "./Meteors/MeteorsExample.svelte";
import MeteorsExampleCode from "./Meteors/MeteorsExample.svelte?raw";

export let allSpecialEffects: MagicComponent[] = [
  {
    id: "border-beam",
    name: "Border Beam",
    tags: ["Tailwind CSS"],
    desc: "A border beam effect that moves the border around the element",
    link: "/magic/border-beam",
    tailwind: allMagicTailwinds["border-beam"],
    code: BorderBeamCode,
    examples: [
      {
        id: 1,
        name: "Border Beam Example",
        fileName: "BorderBeamExample.svelte",
        component: BorderBeamExample,
        code: BorderBeamExampleCode,
        showGrid: true,
      },
    ],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
  },
  {
    id: "meteors",
    name: "Meteors",
    tags: ["Tailwind CSS"],
    desc: "A meteor shower effect",
    link: "/magic/meteors",
    tailwind: allMagicTailwinds["meteors"],
    code: MeteorsCode,
    examples: [
      {
        id: 1,
        name: "Meteors Example",
        fileName: "MeteorsExample.svelte",
        component: MeteorsExample,
        code: MeteorsExampleCode,
        class: "relative overflow-hidden",
        showGrid: true,
      },
    ],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
  },
];
