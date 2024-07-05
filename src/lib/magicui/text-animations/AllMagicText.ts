import type { MagicComponent } from "../components/MagicSidebar/AllTypes";
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


import { allMagicTailwinds } from "../components/MagicSidebar/AllMagicTailwinds";
import TextRevealExample from "./TextReveal/TextRevealExample.svelte";
import TextRevealExampleCode from "./TextReveal/TextRevealExample.svelte?raw";

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
                code: AnimatedExampleCode
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
                class:'relative'
            }
        ]
    }
]