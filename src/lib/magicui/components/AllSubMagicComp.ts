import { allMagicTailwinds } from "../AllMagicTailwinds";
import type { MagicComponent } from "../AllTypes";


import OrbitingCirclesCode from "./orbitingCircles/OrbitingCircles.svelte?raw";
import OribtingExample from "./orbitingCircles/OribtingExample.svelte";
import OribtingExampleCode from "./orbitingCircles/OribtingExample.svelte?raw";

// Marquee
import Marquee from "./Marquee/Marquee.svelte";
import MarqueeCode from "./Marquee/Marquee.svelte?raw";
import MarqueExample from "./Marquee/example/MarqueExample.svelte";
import MarqueExampleCode from "./Marquee/example/MarqueExample.svelte?raw";
import ReviewcardCode from "./Marquee/example/Reviewcard.svelte?raw";

// Bento Grid
import BentoGridCode from "./BentoGrid/BentoGrid.svelte?raw";
import BentoCardCode from "./BentoGrid/BentoCard.svelte?raw";
import BentoExample from "./BentoGrid/example/BentoExample.svelte";
import BentoExampleCode from "./BentoGrid/example/BentoExample.svelte?raw";


// Cards from Lukacho UI
// Simple Variant 
import SimpleVariant from "./Cards/simpleVairant/SimpleVariant.svelte";
import SimpleVariantCode from "./Cards/simpleVairant/SimpleVariant.svelte?raw";
import CardContainerCode from "./Cards/simpleVairant/CardContainer.svelte?raw";
import CardBodyCode from "./Cards/simpleVairant/CardBody.svelte?raw";
import EllipsesCode from "./Cards/simpleVairant/Ellipses.svelte?raw";

//  Square Border Card
import SimpleVariant3 from "./Cards/simpleVariant3/SimpleVariant3.svelte";
import SimpleVariant3Code from "./Cards/simpleVariant3/SimpleVariant3.svelte?raw";
import CardBody3Code from "./Cards/simpleVariant3/CardBody.svelte?raw";
import CardIconCode from "./Cards/simpleVariant3/CardIcon.svelte?raw";

// Animated Beam
import AnimatedBeam from "./AnimatedBeam/AnimatedBeam.svelte";
import AnimatedBeamUniDirection from "./AnimatedBeam/examples/AnimatedBeamUniDirection.svelte";
import AnimatedBeamBiDirectional from "./AnimatedBeam/examples/AnimatedBeamBiDirectional.svelte";
import AnimatedBeamMultipleInput from "./AnimatedBeam/examples/AnimatedBeamMultipleInput.svelte";
// Animated Beam Codes
import AnimatedBeamCode from "./AnimatedBeam/AnimatedBeam.svelte?raw";
import CircleCode from "./AnimatedBeam/Circle.svelte?raw";
import AnimatedBeamUniDirectionCode from "./AnimatedBeam/examples/AnimatedBeamUniDirection.svelte?raw";
import AnimatedBeamBiDirectionalCode from "./AnimatedBeam/examples/AnimatedBeamBiDirectional.svelte?raw";
import AnimatedBeamMultipleInputCode from "./AnimatedBeam/examples/AnimatedBeamMultipleInput.svelte?raw";

export let allSubMagicComps: MagicComponent[] = [
    {
        id: 'bento-grid',
        name: 'Bento Grid',
        desc: `Bento grid is a layout used to showcase the features of a product in a simple and elegant way. <br/> Below Components include 4 Minor Components : <span class='text-white'>BentoCalendar, BentoCommand, BentoComposable, BentoMarquee</span> <br/> <a class='mt-2 underline underline-offset-2 text-primary' href='/bento-grid'>Visit to view the example.</a> `,
        link: '/magic/bento-grid',
        code: [
            {
                filename: 'BentoGrid.svelte',
                code: BentoGridCode
            },
            {
                filename: 'BentoCard.svelte',
                code: BentoCardCode,
            }
        ],
        examples: [
            {
                id: 1,
                name: 'Bento Grid',
                fileName: 'BentoGrid.svelte',
                component: BentoExample,
                code: [
                    {
                        filename: 'BentoGridExample.svelte',
                        code: BentoExampleCode,
                    },
                    // {
                    //     filename: 'BentoCalendar.svelte',
                    //     code: BentoCalendarCode
                    // },
                    // {
                    //     filename: 'BentoCommand.svelte',
                    //     code: BentoCommandCode
                    // }, {
                    //     filename: 'BentoResizable.svelte',
                    //     code: BentoResizableCode
                    // },
                    // {
                    //     filename: 'BentoMarquee.svelte',
                    //     code: BentoMarqueeCode
                    // }
                ]
            }
        ]

    },
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
                showGrid: true,
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
                        filename: 'MarqueeExample.svelte',
                        code: MarqueExampleCode
                    },
                    {
                        filename: 'Reviewcard.svelte',
                        code: ReviewcardCode
                    }
                ]
            }
        ]
    },
    {
        id: 'simple-cards',
        name: 'Simple Cards',
        link: '/magic/simple-cards',
        desc: 'Simple cards with good border effect',
        examples: [
            {
                id: 1,
                name: 'Simple Cards',
                fileName: 'SimpleCardExample.svelte',
                component: SimpleVariant,
                showGrid: true,
                code: [
                    {
                        filename: 'SimpleVariant.svelte',
                        code: SimpleVariantCode,
                    },
                    {
                        filename: 'CardContainer.svelte',
                        code: CardContainerCode,
                    },
                    {
                        filename: 'CardBody.svelte',
                        code: CardBodyCode,
                    },
                    {
                        filename: 'Ellipses.svelte',
                        code: EllipsesCode,
                    }
                ]
            },
            {
                id: 2,
                name: 'Square Border Card',
                fileName: 'SquareCardExample.svelte',
                component: SimpleVariant3,
                showGrid: true,
                code: [
                    {
                        filename: 'SquareCard.svelte',
                        code: SimpleVariant3Code,
                    },
                    {
                        filename: 'CardBody.svelte',
                        code: CardBody3Code,
                    },
                    {
                        filename: 'CardIcon.svelte',
                        code: CardIconCode,
                    }
                ]
            }
        ]
    },
    {
        id: 'animated-beam',
        name: 'Animated Beam',
        link: '/magic/animated-beam',
        desc: 'A simple animation of a beam. Preview :  <a href="/mint" class="underline underline-offset-2 text-primary">Visit</a>',
        code: [
            {
                filename: 'AnimatedBeam.svelte',
                code: AnimatedBeamCode
            },
        ],
        examples: [
            {
                id: 1,
                name: 'Animated Beam Uni-Directional',
                fileName: 'AnimatedBeamUniDirection.svelte',
                component: AnimatedBeamUniDirection,
                showGrid: true,
                code: [
                    {
                        filename: 'AnimatedBeamUniDirection.svelte',
                        code: AnimatedBeamUniDirectionCode
                    },
                    {
                        filename: 'Circle.svelte',
                        code: CircleCode
                    }
                ]
            },
            {
                id: 2,
                name: 'Animated Beam Bi-Directional',
                fileName: 'AnimatedBeamBiDirection.svelte',
                component: AnimatedBeamBiDirectional,
                showGrid: true,
                code: [
                    {
                        filename: 'AnimatedBeamBiDirectional.svelte',
                        code: AnimatedBeamBiDirectionalCode
                    },
                    {
                        filename: 'Circle.svelte',
                        code: CircleCode
                    }
                ],
            },
            {
                id: 3,
                name: 'Animated Beam Multiple Inputs',
                fileName: 'AnimatedBeamMultipleInputs.svelte',
                component: AnimatedBeamMultipleInput,
                showGrid: true,
                code: [
                    {
                        filename: 'AnimatedBeamMultipleInput.svelte',
                        code: AnimatedBeamMultipleInputCode
                    },
                    {
                        filename: 'Circle.svelte',
                        code: CircleCode
                    }
                ]
            }
        ]
    }
]