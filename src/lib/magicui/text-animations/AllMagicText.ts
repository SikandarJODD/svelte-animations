import type { MagicComponent } from "../AllTypes";
import NumberTicker from "./NumberTicker/NumberTicker.svelte";
import NumberTickerCode from "./NumberTicker/NumberTicker.svelte?raw";
import NumTickerExample from "./NumberTicker/examples/NumTickerExample.svelte";
import NumTickerExampleCode from "./NumberTicker/examples/NumTickerExample.svelte?raw";

// Animated Shiny Text
import AnimatedShinyText from "./AnimatedShinyText/AnimatedShinyText.svelte";
import AnimatedShinyTextCode from "./AnimatedShinyText/AnimatedShinyText.svelte?raw";
import AnimatedShinyTextExample from "./AnimatedShinyText/AnimatedShinyTextExample.svelte";
import AnimatedShinyTextExampleCode from "./AnimatedShinyText/AnimatedShinyTextExample.svelte?raw";

// Animated Gradient Text
import AnimatedGradientText from "./AnimatedGradientText/AnimatedGradientText.svelte";
import AnimatedGradientTextCode from "./AnimatedGradientText/AnimatedGradientText.svelte?raw";
import AnimatedExample from "./AnimatedGradientText/AnimatedExample.svelte";
import AnimatedExampleCode from "./AnimatedGradientText/AnimatedExample.svelte?raw";

// Text Reveal
import TextReveal from "./TextReveal/TextReveal.svelte";
import TextRevealCode from "./TextReveal/TextReveal.svelte?raw";
import WordCode from "./TextReveal/Word.svelte?raw";

import { allMagicTailwinds } from "../AllMagicTailwinds";
import TextRevealExample from "./TextReveal/TextRevealExample.svelte";
import TextRevealExampleCode from "./TextReveal/TextRevealExample.svelte?raw";

// Box Reveal
import BoxReveal from "./BoxReveal/BoxReveal.svelte";
import BoxRevealCode from "./BoxReveal/BoxReveal.svelte?raw";
import BoxRevealExample from "./BoxReveal/BoxRevealExample.svelte";
import BoxRevealExampleCode from "./BoxReveal/BoxRevealExample.svelte?raw";

//  Flip Text
import FlipText from "./FlipText/FlipText.svelte";
import FlipTextCode from "./FlipText/FlipText.svelte?raw";
import FlipTextExample from "./FlipText/FlipTextExample.svelte";
import FlipTextExampleCode from "./FlipText/FlipTextExample.svelte?raw";

// Gradual Spacing
import GradualSpacing from "./GradualSpacing/GradualSpacing.svelte";
import GradualSpacingCode from "./GradualSpacing/GradualSpacing.svelte?raw";
import GsExample from "./GradualSpacing/GSExample.svelte";
import GsExampleCode from "./GradualSpacing/GSExample.svelte?raw";

// Letter Pull Up
import LetterPullUp from "./LetterPullUp/LetterPullUp.svelte";
import LetterPullUpCode from "./LetterPullUp/LetterPullUp.svelte?raw";
import LpuExample from "./LetterPullUp/LPUExample.svelte";
import LpuExampleCode from "./LetterPullUp/LPUExample.svelte?raw";

// Word Pull Up
import WordPullUp from "./WordPullUp/WordPullUp.svelte";
import WordPullUpCode from "./WordPullUp/WordPullUp.svelte?raw";
import WpuExample from "./WordPullUp/WPUExample.svelte";
import WpuExampleCode from "./WordPullUp/WPUExample.svelte?raw";

//  Words Fade In
import WordsFadeIn from "./WordsFadeIn/WordsFadeIn.svelte";
import WordsFadeInCode from "./WordsFadeIn/WordsFadeIn.svelte?raw";
import WordsFadeInExample from "./WordsFadeIn/WordsFadeInExample.svelte";
import WordsFadeInExampleCode from "./WordsFadeIn/WordsFadeInExample.svelte?raw";

import { cncode } from "$lib/cncode";

// Blur In
import BlurInText from "./BlurIn/BlurInText.svelte";
import BlurInTextCode from "./BlurIn/BlurInText.svelte?raw";
import BlurInExmaple from "./BlurIn/BlurInExmaple.svelte";
import BlurInExmapleCode from "./BlurIn/BlurInExmaple.svelte?raw";

// Word Rotate
import WordRotate from "./WordRotate/WordRotate.svelte";
import WordRotateCode from "./WordRotate/WordRotate.svelte?raw";
import WordRotateExample from "./WordRotate/WordRotateExample.svelte";
import WordRotateExampleCode from "./WordRotate/WordRotateExample.svelte?raw";

// Sparkle Text
import SparklesText from "./SparklesText/SparklesText.svelte";
import SparklesTextCode from "./SparklesText/SparklesText.svelte?raw";

import AuroraText from "./AuroraText/AuroraText.svelte";
import AuroraTextCode from "./AuroraText/AuroraText.svelte?raw";
import AuroraTextExample from "./AuroraText/AuroraTextExample.svelte";
import AuroraTextExampleCode from "./AuroraText/AuroraTextExample.svelte?raw";

import SpinningText from "./SpinningText/SpinningText.svelte";
import SpinningTextCode from "./SpinningText/SpinningText.svelte?raw";
import SpinningTextExample from "./SpinningText/SpinningTextExample.svelte";
import SpinningTextExampleCode from "./SpinningText/SpinningTextExample.svelte?raw";

export let allMagicText: MagicComponent[] = [
  {
    id: "number-ticker",
    name: "Number Ticker",
    tags: ["Tailwind CSS"],
    desc: "A simple number ticker animation",
    code: NumberTickerCode,
    component: NumberTicker,
    link: "/magic/number-ticker",
    examples: [
      {
        id: 1,
        fileName: "NumberTicker.svelte",
        name: "Number Ticker",
        component: NumTickerExample,
        code: NumTickerExampleCode,
      },
    ],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
  },
  {
    id: "animated-shiny-text",
    name: "Animated Shiny Text",
    tags: ["Tailwind CSS"],
    desc: "A simple animated shiny text",
    component: AnimatedShinyText,
    code: AnimatedShinyTextCode,
    link: "/magic/animated-shiny-text",
    tailwind: allMagicTailwinds["animated-shiny-text"],
    examples: [
      {
        id: 1,
        fileName: "AnimatedShinyText.svelte",
        name: "Animated Shiny Text",
        component: AnimatedShinyTextExample,
        code: AnimatedShinyTextExampleCode,
        showDots: true,
      },
    ],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
  },
  {
    id: "animated-gradient-text",
    name: "Animated Gradient Text",
    tags: ["Tailwind CSS"],
    desc: "A simple animated gradient text",
    component: AnimatedGradientText,
    code: AnimatedGradientTextCode,
    link: "/magic/animated-gradient-text",
    tailwind: allMagicTailwinds["animated-gradient-text"],
    examples: [
      {
        id: 1,
        fileName: "AnimatedGradientText.svelte",
        name: "Animated Gradient Text",
        component: AnimatedExample,
        code: AnimatedExampleCode,
        showDots: true,
      },
    ],
    cncode: cncode,
    download: "npm i clsx tailwind-merge",
  },
  {
    id: "text-reveal",
    tags: ["Svelte Motion", "Tailwind CSS"],
    name: "Text Reveal",
    desc: "A simple text reveal animation",
    component: TextReveal,
    link: "/magic/text-reveal",
    class: "relative h-[28rem]",
    code: [
      {
        filename: "TextReveal.svelte",
        code: TextRevealCode,
      },
      {
        filename: "Word.svelte",
        code: WordCode,
      },
    ],
    examples: [
      {
        id: 1,
        fileName: "TextRevealExample.svelte",
        code: TextRevealExampleCode,
        component: TextRevealExample,
        name: "Text Reveal Example",
        class: "relative",
      },
    ],
    cncode: cncode,
    download: "npm i svelte-motion clsx tailwind-merge",
  },
  {
    id: "box-reveal",
    tags: ["Svelte Motion", "Svelte Inview", "Tailwind CSS"],
    name: "Box Reveal",
    desc: "A simple box reveal animation",
    code: BoxRevealCode,
    link: "/magic/box-reveal",
    examples: [
      {
        id: 1,
        name: "Box Reveal Example",
        component: BoxRevealExample,
        code: BoxRevealExampleCode,
        fileName: "BoxRevealExample.svelte",
      },
    ],
    download: "npm i svelte-motion svelte-inview",
  },
  {
    id: "flip-text",
    name: "Flip Text",
    tags: ["Svelte Motion"],
    desc: "A simple flip text animation",
    component: FlipText,
    code: FlipTextCode,
    link: "/magic/flip-text",
    examples: [
      {
        id: 1,
        name: "Flip Text Example",
        fileName: "FlipTextExample.svelte",
        component: FlipTextExample,
        code: FlipTextExampleCode,
      },
    ],
    cncode: cncode,
    download: "npm i svelte-motion clsx tailwind-merge",
  },
  {
    id: "gradual-spacing",
    tags: ["Svelte Motion"],
    name: "Gradual Spacing",
    desc: "Word animation for gradual spacing between letters",
    component: GradualSpacing,
    code: GradualSpacingCode,
    link: "/magic/gradual-spacing",
    examples: [
      {
        id: 1,
        name: "Gradual Spacing Example",
        fileName: "GradualSpacingExample.svelte",
        component: GsExample,
        code: GsExampleCode,
      },
    ],
    download: "npm i svelte-motion",
    cncode: cncode,
  },
  {
    id: "letter-pull-up",
    tags: ["Svelte Motion"],
    name: "Staggered Letter Pull Up Animation",
    desc: "A simple letter pull up animation",
    component: LetterPullUp,
    code: LetterPullUpCode,
    link: "/magic/letter-pull-up",
    examples: [
      {
        id: 1,
        name: "Letter Pull Up Example",
        fileName: "LetterPullUpExample.svelte",
        component: LpuExample,
        code: LpuExampleCode,
      },
    ],
    cncode: cncode,
    download: "npm i svelte-motion clsx tailwind-merge",
  },
  {
    id: "words-pull-up",
    tags: ["Svelte Motion"],
    name: "Words Pull Up",
    desc: "Text animation for words to pull up",
    component: WordPullUp,
    code: WordPullUpCode,
    link: "/magic/words-pull-up",
    examples: [
      {
        id: 1,
        name: "Word Pull Up Example",
        fileName: "WordPullUpExample.svelte",
        component: WpuExample,
        code: WpuExampleCode,
      },
    ],
  },
  {
    id: "words-fade-in",
    tags: ["Svelte Motion"],
    name: "Words Fade In",
    desc: "Text animation which fades in word by word",
    component: WordsFadeIn,
    code: WordsFadeInCode,
    link: "/magic/words-fade-in",
    examples: [
      {
        id: 1,
        name: "Words Fade In Example",
        fileName: "WordsFadeInExample.svelte",
        component: WordsFadeInExample,
        code: WordsFadeInExampleCode,
      },
    ],
    cncode: cncode,
    download: "npm i svelte-motion clsx tailwind-merge",
  },
  {
    id: "blur-in",
    name: "Blur In",
    tags: ["Svelte Motion"],
    desc: "A simple blur in animation",
    component: BlurInText,
    code: BlurInTextCode,
    link: "/magic/blur-in",
    download: "npm i svelte-motion",
    cncode: cncode,
    examples: [
      {
        id: 1,
        name: "Blur In Example",
        fileName: "BlurInExample.svelte",
        component: BlurInExmaple,
        code: BlurInExmapleCode,
      },
    ],
  },
  {
    id: "word-rotate",
    name: "Word Rotate",
    link: "/magic/word-rotate",
    desc: "A simple word rotate animation",
    component: WordRotate,
    code: WordRotateCode,
    examples: [
      {
        id: 1,
        name: "Word Rotate Example",
        fileName: "WordRotateExample.svelte",
        component: WordRotateExample,
        code: WordRotateExampleCode,
      },
    ],
  },
  {
    id: "sparkles-text",
    tags: ["Svelte Motion", "Tailwind CSS", 'Svelte 4'],
    name: "Sparkles Text",
    link: "/magic/sparkles-text",
    desc: "A dynamic text that generates continous sparkles with smooth",
    component: SparklesText,
    download: "npm i clsx tailwind-merge svelte-motion",
    cncode: cncode,
    code: SparklesTextCode,
  },
  {
    id: "aurora-text",
    tags: ["Tailwind CSS", 'Svelte 4', 'Svelte 5'],
    name: "Aurora Text",
    link: "/magic/aurora-text",
    desc: 'A beautiful aurora text effect',
    component: AuroraText,
    download: "npm i clsx tailwind-merge",
    cncode: cncode,
    tailwind: allMagicTailwinds["aurora-text"],
    code: AuroraTextCode,
    examples: [
      {
        id: 1,
        name: 'Aurora Text Example',
        fileName: 'AuroraTextExample.svelte',
        component: AuroraTextExample,
        code: AuroraTextExampleCode
      }
    ],

  },
  {
    id: "spinning-text",
    tags: ["Tailwind CSS", 'Svelte 4', 'Svelte 5'],
    name: "Spinning Text",
    link: "/magic/spinning-text",
    desc: 'The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.',
    download: "npm i clsx tailwind-merge",
    cncode: cncode,
    code: SpinningTextCode,
    examples: [
      {
        id: 1,
        name: 'Example',
        fileName: 'SpinningTextExample.svelte',
        component: SpinningTextExample,
        code: SpinningTextExampleCode
      }
    ]
  },
];
