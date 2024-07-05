import type { MagicComponent } from "../AllTypes";
import OrbitingCirclesCode from "./orbitingCircles/OrbitingCircles.svelte?raw";
import OribtingExample from "./orbitingCircles/OribtingExample.svelte";
import OribtingExampleCode from "./orbitingCircles/OribtingExample.svelte?raw";

// Marquee
import Marquee from "./Marquee/Marquee.svelte";
import MarqueeCode from "./Marquee/Marquee.svelte?raw";
import MarqueExample from "./Marquee/example/MarqueExample.svelte";
import ReviewcardCode from "./Marquee/example/Reviewcard.svelte?raw";
import { allMagicTailwinds } from "../AllMagicTailwinds";

export let allSubMagicComps: MagicComponent[] = [
    {
        id: 'orbiting-circles',
        name: 'Orbiting Circles',
        desc: 'A simple animation of orbiting circles',
        link: '/magic/orbiting-circles',
        code: OrbitingCirclesCode,
        tailwind: allMagicTailwinds['orbiting-circles'],
        examples: [
            {
                id: 1,
                name: 'Orbiting Circles',
                fileName: 'OrbitingCircles.svelte',
                component: OribtingExample,
                code: OribtingExampleCode
            }
        ]
    },
    {
        id: 'marquee',
        name: 'Marquee',
        desc: 'A simple marquee animation',
        link: '/magic/marquee',
        component: Marquee,
        code: MarqueeCode,
        tailwind: allMagicTailwinds['marquee'],
        examples: [
            {
                id: 1,
                name: 'Marquee',
                fileName: 'Marquee.svelte',
                component: MarqueExample,
                code: [
                    {
                        filename: 'Marquee.svelte',
                        code: MarqueeCode
                    },
                    {
                        filename: 'Reviewcard.svelte',
                        code: ReviewcardCode
                    }
                ]
            }
        ]

    }

]