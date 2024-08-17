import { cncode } from "$lib/cncode";
import { allMagicTailwinds } from "../AllMagicTailwinds";
import type { MagicComponent } from "../AllTypes";

//  Border Beam
import BorderBeam from "./BorderBeam/BorderBeam.svelte";
import BorderBeamCode from "./BorderBeam/BorderBeam.svelte?raw";
import BorderBeamExample from "./BorderBeam/BorderBeamExample.svelte";
import BorderBeamExampleCode from "./BorderBeam/BorderBeamExample.svelte?raw";

// Cool Mode
import CoolMode from "./CoolMode/CoolMode.svelte";
import CoolModeCode from "./CoolMode/CoolMode.svelte?raw";
import CModeExample from "./CoolMode/examples/CModeExample.svelte";
import CModeExampleCode from "./CoolMode/examples/CModeExample.svelte?raw";
import ImageModeExample from "./CoolMode/examples/ImageModeExample.svelte";
import ImageModeExampleCode from "./CoolMode/examples/ImageModeExample.svelte?raw";

// Magic Card
import MagicCard from "./MagicCard/MagicCard.svelte";
import MagicCardCode from "./MagicCard/MagicCard.svelte?raw";
import MagicCardExample from "./MagicCard/example/MagicCardExample.svelte";
import MagicCardExampleCode from "./MagicCard/example/MagicCardExample.svelte?raw";

// Meteors
import Meteors from "./Meteors/Meteors.svelte";
import MeteorsCode from "./Meteors/Meteors.svelte?raw";
import MeteorsExample from "./Meteors/MeteorsExample.svelte";
import MeteorsExampleCode from "./Meteors/MeteorsExample.svelte?raw";

// Particles
import Particles from "./Particles/Particles.svelte";
import ParticlesCode from "./Particles/Particles.svelte?raw";
import ParticlesExample from "./Particles/example/ParticlesExample.svelte";
import ParticlesExampleCode from "./Particles/example/ParticlesExample.svelte?raw";

// Shine Border
import ShineBorder from "./ShineBorder/ShineBorder.svelte";
import ShineBorderCode from "./ShineBorder/ShineBorder.svelte?raw";
import SbExample from "./ShineBorder/example/SBExample.svelte";
import SbExampleCode from "./ShineBorder/example/SBExample.svelte?raw";
import SbMultipleColor from "./ShineBorder/example/SBMultipleColor.svelte";
import SbMultipleColorCode from "./ShineBorder/example/SBMultipleColor.svelte?raw";

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
  {
    id: "shine-border",
    name: "Shine Border",
    tags: ["Tailwind CSS"],
    desc: "A border beam effect that moves the border around the element",
    link: "/magic/shine-border",
    component: ShineBorder,
    code: ShineBorderCode,
    tailwind: allMagicTailwinds["shine-border"],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
    showDots: true,
    examples: [
      {
        id: 1,
        name: "Shine Border Example",
        fileName: "ShineBorderExample.svelte",
        component: SbExample,
        code: SbExampleCode,
        showDots: true,
      },
      {
        id: 2,
        name: "Multiple Shine Border",
        fileName: "MultipleBorderExample.svelte",
        component: SbMultipleColor,
        code: SbMultipleColorCode,
        showGrid: true,
      },
    ],
  },
  {
    id: "cool-mode",
    name: "Cool Mode",
    tags: ["Tailwind CSS"],
    desc: "Cool mode effect for buttons, links, and other DOMs",
    link: "/magic/cool-mode",
    component: CoolMode,
    code: CoolModeCode,
    showDots: true,
    examples: [
      {
        id: 1,
        name: "Cool Mode Example",
        fileName: "CoolModeExample.svelte",
        component: CModeExample,
        code: CModeExampleCode,
        showDots: true,
      },
      {
        id: 2,
        name: "Image Mode Example",
        fileName: "CoolModeExample.svelte",
        component: ImageModeExample,
        code: ImageModeExampleCode,
        showDots: true,
      },
    ],
  },
  {
    id: "magic-card",
    name: "Magic Card",
    tags: ["Tailwind CSS", "Svelte-Motion"],
    desc: "A spotlight effect that follows your mouse cursor and highlights borders on hover.",
    link: "/magic/magic-card",
    component: MagicCard,
    code: MagicCardCode,
    examples: [
      {
        id: 1,
        name: "Magic Card Example",
        fileName: "MagicCardExample.svelte",
        component: MagicCardExample,
        code: MagicCardExampleCode,
      },
    ],
  },
  {
    id: "particles",
    name: "Particles",
    tags: ["Tailwind CSS"],
    desc: "Particles are a fun way to add some visual flair to your website. They can be used to create a sense of depth, movement, and interactivity.",
    link: "/magic/particles",
    component: Particles,
    code: ParticlesCode,
    class: "relative overflow-hidden",
    examples: [
      {
        id: 1,
        name: "Particles Example",
        fileName: "ParticlesExample.svelte",
        component: ParticlesExample,
        code: ParticlesExampleCode,
      },
    ],
  },
];
