import { cncode } from "$lib/cncode";
import { allMagicTailwinds } from "../AllMagicTailwinds";
import type { MagicComponent } from "../AllTypes";

// Shimmer Button
import ShimmerButton from "./shimmer/ShimmerButton.svelte";
import ShimmerButtonCode from "./shimmer/ShimmerButton.svelte?raw";
import ShimmerExampleBtn from "./shimmer/example/ShimmerExampleBtn.svelte";
import ShimmerExampleBtnCode from "./shimmer/example/ShimmerExampleBtn.svelte?raw";

// Pulstating Button
import PulsatingButton from "./pulsating/PulsatingButton.svelte";
import PulsatingButtonCode from "./pulsating/PulsatingButton.svelte?raw";
import PulsatingBtnExample from "./pulsating/PulsatingBtnExample.svelte";
import PulsatingBtnExampleCode from "./pulsating/PulsatingBtnExample.svelte?raw";

// Animated Subscribe Button
import AnimatedSubscribeButton from "./animatedSubscribe/AnimatedSubscribeButton.svelte";
import AnimatedSubscribeButtonCode from "./animatedSubscribe/AnimatedSubscribeButton.svelte?raw";

import AsExample from "./animatedSubscribe/ASExample.svelte";
import AsExampleCode from "./animatedSubscribe/ASExample.svelte?raw";

import RippleButton from "./ripple/RippleButton.svelte";
import RippleButtonCode from "./ripple/RippleButton.svelte?raw";

import RainbowButton from "./rainbow/RainbowButton.svelte";
import RainbowButtonCode from "./rainbow/RainbowButton.svelte?raw";

import InteractiveHover from "./interactive-hover/InteractiveHover.svelte";
import InteractiveHoverCode from "./interactive-hover/InteractiveHover.svelte?raw";

import RippleExample from "./ripple/RippleExample.svelte";
import RippleExampleCode from "./ripple/RippleExample.svelte?raw";
import RainbowBtnExample from "./rainbow/RainbowBtnExample.svelte";
import RainbowBtnExampleCode from "./rainbow/RainbowBtnExample.svelte?raw";
import InteractiveHoverBtnExample from "./interactive-hover/InteractiveHoverBtnExample.svelte";
import InteractiveHoverBtnExampleCode from "./interactive-hover/InteractiveHoverBtnExample.svelte?raw";

export let buttonMagic: MagicComponent[] = [
  {
    id: "shimmer-button",
    name: "Shimmer Button",
    tags: ["Tailwind CSS"],
    desc: "A button with shimmer effect.",
    component: ShimmerButton,
    code: ShimmerButtonCode,
    link: "/magic/shimmer-button",
    showGrid: true,
    tailwind: allMagicTailwinds["shimmer"],
    examples: [
      {
        id: 1,
        name: "Shimmer Button",
        fileName: "ShimmerButton.svelte",
        code: ShimmerExampleBtnCode,
        component: ShimmerExampleBtn,
        showDots: true,
      },
    ],
  },
  {
    id: "pulsating-button",
    name: "Pulsating Button",
    desc: "A button with pulsating effect.",
    tags: ["Tailwind CSS"],
    component: PulsatingButton,
    code: PulsatingButtonCode,
    showDots: true,
    link: "/magic/pulsating-button",
    examples: [
      {
        id: 1,
        name: "Pulsating Button",
        component: PulsatingBtnExample,
        code: PulsatingBtnExampleCode,
        fileName: "PulsatingBtnExample.svelte",
        showDots: true,
      },
    ],
    tailwind: allMagicTailwinds["pulsaing-button"],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
  },
  {
    id: "animated-subscribe",
    name: "Animated Subscribe Button",
    desc: "A button with animated subscribe effect.",
    tags: ["Svelte Motion"],
    component: AnimatedSubscribeButton,
    code: AnimatedSubscribeButtonCode,
    showDots: true,
    link: "/magic/animated-subscribe",
    examples: [
      {
        id: 1,
        name: "Animated Subscribe Button",
        component: AsExample,
        code: AsExampleCode,
        fileName: "AnimatedSubscribeButton.svelte",
        showDots: true,
      },
    ],
    cncode: cncode,
    download: "npm i clsx tailwind-merge svelte-motion",
  },
  {
    id: 'ripple-button',
    link: '/magic/ripple-button',
    name: 'Ripple Button',
    desc: 'A button with ripple effect.',
    component: RippleButton,
    code: RippleButtonCode,
    tailwind: allMagicTailwinds['rippling'],
    examples: [
      {
        id: 1,
        name: 'Ripple Button',
        fileName: 'RippleButton.svelte',
        code: RippleExampleCode,
        component: RippleExample,
        showDots: true
      }
    ],
  },
  {
    id: 'rainbow',
    link: '/magic/rainbow',
    name: 'Rainbow Button',
    desc: 'A button with rainbow effect.',
    tailwind: allMagicTailwinds['rainbow-button'],
    component: RainbowButton,
    code: RainbowButtonCode,
    examples: [
      {
        id: 1,
        name: 'Rainbow Button',
        fileName: 'RainbowButton.svelte',
        code: RainbowBtnExampleCode,
        component: RainbowBtnExample,
        showDots: true,
      },
    ],
  },
  {
    id: 'interactive-hover',
    link: '/magic/interactive-hover',
    name: 'Interactive Hover',
    desc: 'A button with interactive hover effect.',
    component: InteractiveHover,
    code: InteractiveHoverCode,
    examples: [
      {
        id: 1,
        name: 'Interactive Hover',
        fileName: 'InteractiveHover.svelte',
        code: InteractiveHoverBtnExampleCode,
        component: InteractiveHoverBtnExample,
        showGrid: true,
      },
    ],
  },
];
