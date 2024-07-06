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




export let allMagicText: MagicComponent[] = [
    {
        id: 'number-ticker',
        name: 'Number Ticker',
        desc: 'A simple number ticker animation',
        code: NumberTickerCode,
        component: NumberTicker,
        link: '/magic/number-ticker',
        examples: [
            {
                id: 1,
                fileName: 'NumberTicker.svelte',
                name: 'Number Ticker',
                component: NumTickerExample,
                code: NumTickerExampleCode
            }
        ]
    },
    {
        id: 'animated-shiny-text',
        name: 'Animated Shiny Text',
        desc: 'A simple animated shiny text',
        component: AnimatedShinyText,
        code: AnimatedShinyTextCode,
        link: '/magic/animated-shiny-text',
        tailwind: allMagicTailwinds['animated-shiny-text'],
        examples: [
            {
                id: 1,
                fileName: 'AnimatedShinyText.svelte',
                name: 'Animated Shiny Text',
                component: AnimatedShinyTextExample,
                code: AnimatedShinyTextExampleCode
            }
        ]
    },
    {
        id: 'animated-gradient-text',
        name: 'Animated Gradient Text',
        desc: 'A simple animated gradient text',
        component: AnimatedGradientText,
        code: AnimatedGradientTextCode,
        link: '/magic/animated-gradient-text',
        tailwind: allMagicTailwinds['animated-gradient-text'],
        examples: [
            {
                id: 1,
                fileName: 'AnimatedGradientText.svelte',
                name: 'Animated Gradient Text',
                component: AnimatedExample,
                code: AnimatedExampleCode,
                showDots: true
            }
        ]
    },
    {
        id: 'text-reveal',
        name: 'Text Reveal',
        desc: 'A simple text reveal animation',
        component: TextReveal,
        link: '/magic/text-reveal',
        class: 'relative h-[28rem]',
        code: [
            {
                filename: 'TextReveal.svelte',
                code: TextRevealCode,
            },
            {
                filename: 'Word.svelte',
                code: WordCode,
            }
        ],
        examples: [
            {
                id: 1,
                fileName: 'TextRevealExample.svelte',
                code: TextRevealExampleCode,
                component: TextRevealExample,
                name: 'Text Reveal Example',
                class: 'relative'
            }
        ]
    },
    {
        id: 'box-reveal',
        name: 'Box Reveal',
        desc: 'A simple box reveal animation',
        code: BoxRevealCode,
        link: '/magic/box-reveal',
        examples: [
            {
                id: 1,
                name: 'Box Reveal Example',
                component: BoxRevealExample,
                code: BoxRevealExampleCode,
                fileName: 'BoxRevealExample.svelte'
            }
        ]
    },
    {
        id: 'flip-text',
        name: 'Flip Text',
        desc: 'A simple flip text animation',
        component: FlipText,
        code: FlipTextCode,
        link: '/magic/flip-text',
        examples: [
            {
                id: 1,
                name: 'Flip Text Example',
                fileName: 'FlipTextExample.svelte',
                component: FlipTextExample,
                code: FlipTextExampleCode
            }
        ]
    },
    {
        id: 'gradual-spacing',
        name: 'Gradual Spacing',
        desc: 'Word animation for gradual spacing between letters',
        component: GradualSpacing,
        code: GradualSpacingCode,
        link: '/magic/gradual-spacing',
        examples: [{
            id: 1,
            name: 'Gradual Spacing Example',
            fileName: 'GradualSpacingExample.svelte',
            component: GsExample,
            code: GsExampleCode
        }]
    },
    {
        id: 'letter-pull-up',
        name: 'Staggered Letter Pull Up Animation',
        desc: 'A simple letter pull up animation',
        component: LetterPullUp,
        code: LetterPullUpCode,
        link: '/magic/letter-pull-up',
        examples: [
            {
                id: 1,
                name: 'Letter Pull Up Example',
                fileName: 'LetterPullUpExample.svelte',
                component: LpuExample,
                code: LpuExampleCode
            }
        ]
    },
    {
        id: 'words-pull-up',
        name: 'Words Pull Up',
        desc: 'Text animation for words to pull up',
        component: WordPullUp,
        code: WordPullUpCode,
        link: '/magic/words-pull-up',
        examples: [
            {
                id: 1,
                name: 'Word Pull Up Example',
                fileName: 'WordPullUpExample.svelte',
                component: WpuExample,
                code: WpuExampleCode
            }
        ]
    },
    {
        id: 'words-fade-in',
        name: 'Words Fade In',
        desc: 'Text animation which fades in word by word',
        component: WordsFadeIn,
        code: WordsFadeInCode,
        link: '/magic/words-fade-in',
        examples: [
            {
                id: 1,
                name: 'Words Fade In Example',
                fileName: 'WordsFadeInExample.svelte',
                component: WordsFadeInExample,
                code: WordsFadeInExampleCode
            }
        ]
    }
]