// All Magic Tailwinds 

// Dot Pattern
import { DotPattern } from "$lib/magicui/backgrounds/DotPattern";
import DotPatternCode from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte?raw";
import DotsCenterExample from "$lib/magicui/backgrounds/DotPattern/examples/DotsCenterExample.svelte";
import DotsCenterExampleCode from "$lib/magicui/backgrounds/DotPattern/examples/DotsCenterExample.svelte?raw";
import LinerGradientDotPattern from "$lib/magicui/backgrounds/DotPattern/examples/LinerGradientDotPattern.svelte";
import LinerGradientDotPatternCode from "$lib/magicui/backgrounds/DotPattern/examples/LinerGradientDotPattern.svelte?raw";

// Ripple Effect
import { Ripple } from "$lib/magicui/backgrounds/Ripple";
import RippleCode from "$lib/magicui/backgrounds/Ripple/Ripple.svelte?raw";
import RippleExample from "$lib/magicui/backgrounds/Ripple/examples/RippleExample.svelte";
import RippleExampleCode from "$lib/magicui/backgrounds/Ripple/examples/RippleExample.svelte?raw";

// Grid Pattern 
import GridPattern from "$lib/magicui/backgrounds/GridPattern/GridPattern.svelte";
import GridPatternCode from "$lib/magicui/backgrounds/GridPattern/GridPattern.svelte?raw";
import LinearGradientGridPattern from "$lib/magicui/backgrounds/GridPattern/examples/LinearGradientGridPattern.svelte";
import LinearGradientGridPatternCode from "$lib/magicui/backgrounds/GridPattern/examples/LinearGradientGridPattern.svelte?raw";
import DashedStrokeGrid from "$lib/magicui/backgrounds/GridPattern/examples/DashedStrokeGrid.svelte";
import DashedStrokeGridCode from "$lib/magicui/backgrounds/GridPattern/examples/DashedStrokeGrid.svelte?raw";
import SkewGridExample from "$lib/magicui/backgrounds/GridPattern/examples/SkewGridExample.svelte";
import SkewGridExampleCode from "$lib/magicui/backgrounds/GridPattern/examples/SkewGridExample.svelte?raw";


// Retro Grid
import RetroGrid from "./RetroGrid/RetroGrid.svelte";
import RetroGridCode from "./RetroGrid/RetroGrid.svelte?raw";
import RgExample from "./RetroGrid/example/RGExample.svelte";
import RgExampleCode from "./RetroGrid/example/RGExample.svelte?raw";


import { allMagicTailwinds } from "../AllMagicTailwinds";

//  Background Boxes
// import BgDarkTiles from "./backgroundLights/BgDarkTiles.svelte";
import BgDarkTilesCode from "./backgroundLights/BgDarkTiles.svelte?raw";
import BgDarkTilesExample from "./backgroundLights/examples/BgDarkTilesExample.svelte";
import BgDarkTilesExampleCode from "./backgroundLights/examples/BgDarkTilesExample.svelte?raw";
// import SkewBgBoxesExample from "./backgroundLights/examples/SkewBgBoxesExample.svelte";
// import SkewBgBoxesExampleCode from "./backgroundLights/examples/SkewBgBoxesExample.svelte?raw";
import BackgroundLights from "./backgroundLights/examples/BackgroundLights.svelte";
import BackgroundLightsCode from "./backgroundLights/examples/BackgroundLights.svelte?raw";

import LightsCode from "./backgroundLights/Lights.svelte?raw";
import BgDarkTiles from "./backgroundLights/BgDarkTiles.svelte";

import GridBeamExample from "./backgroundLights/examples/GridBeamExample.svelte";
import GridBeamExampleCode from "./backgroundLights/examples/GridBeamExample.svelte?raw";
import GridBeamCode from "./backgroundLights/GridBeam.svelte?raw";
import { cncode } from "$lib/cncode";

type MagicComponent = {
    id: string;
    name: string;
    desc: string;
    component?: any;
    link: string;
    code: string | Code[];
    class?: string;
    showGrid?: boolean;
    previewComp?: any;
    previewCode?: string | Code[];
    examples?: ExampleComponent[];
    tailwind?: string;
    showDots?: boolean
    cncode?: string;
    download?: string;
    tags?:string[];
}
type Code = {
    filename: string;
    code: string
}
type ExampleComponent = {
    id: number,
    name: string;
    fileName: string;
    code: string | Code[];
    component: any;
    class?: string;
    showGrid?: boolean
    showDots?: boolean
}
// Create a list of all Magic Components 
export let backgroundMagic: MagicComponent[] = [
    {
        id: 'dot-pattern',
        name: 'Dot Pattern',
        desc: 'A background dot pattern made with SVGs, fully customizable using Tailwind CSS.',
        component: DotPattern,
        previewComp: DotsCenterExample,
        link: "/magic-components/dot-pattern",
        code: DotPatternCode,
        previewCode: DotsCenterExampleCode,
        class: 'relative overflow-hidden',
        examples: [{
            id: 1,
            name: 'Center Dots',
            fileName: 'DotsCenterExample.svelte',
            code: DotsCenterExampleCode,
            component: DotsCenterExample,
            showGrid: true
        },
        {
            id: 2,
            name: 'Linear Gradient Dots',
            fileName: 'LinerGradientDotPattern.svelte',
            code: LinerGradientDotPatternCode,
            component: LinerGradientDotPattern,
            showGrid: true
        }],
        cncode: cncode,
        download: `npm i clsx tailwind-merge`
    },
    {
        id: 'ripple',
        name: 'Ripple',
        desc: 'A ripple effect component made with SVGs and Tailwind CSS.',
        component: Ripple,
        link: "/magic-components/ripple",
        code: RippleCode,
        class: 'relative overflow-hidden h-[440px]',
        tailwind: allMagicTailwinds['ripple'],
        examples: [{
            id: 1,
            name: 'Ripple Effect',
            fileName: 'Ripple.svelte',
            component: RippleExample,
            code: RippleExampleCode,
        }]
    }, {
        id: 'grid-pattern',
        name: 'Grid Pattern',
        desc: 'A background grid pattern made with SVGs, fully customizable using Tailwind CSS.',
        component: GridPattern,
        link: '/magic/grid-pattern',
        code: GridPatternCode,
        class: 'relative overflow-hidden',
        examples: [
            {
                id: 0,
                name: 'Grid Pattern',
                fileName: 'GridPattern.svelte',
                component: SkewGridExample,
                code: SkewGridExampleCode,
                showDots: true

            },
            {
                id: 1,
                name: 'Linear Gradient Grid Pattern',
                fileName: 'LinearGradientGridPattern.svelte',
                component: LinearGradientGridPattern,
                code: LinearGradientGridPatternCode,
            }, {
                id: 2,
                name: 'Dashed Stroke',
                fileName: 'DashedStrokeGrid.svelte',
                component: DashedStrokeGrid,
                code: DashedStrokeGridCode
            }
        ],
        cncode: cncode,
        download: `npm i clsx tailwind-merge`
    },
    {
        id: 'retro-grid',
        name: 'Retro Grid',
        desc: 'A retro grid pattern made with SVGs, fully customizable using Tailwind CSS.',
        component: RetroGrid,
        code: RetroGridCode,
        tailwind: allMagicTailwinds['retro-grid'],
        link: '/magic/retro-grid',
        examples: [
            {
                id: 1,
                name: 'Retro Grid',
                fileName: 'RetroGridExample.svelte',
                component: RgExample,
                code: RgExampleCode
            }
        ]
    },
    {
        id: 'bg-boxes',
        name: 'Background Boxes Examples',
        tags: ['Svelte Motion'],
        desc: 'A background box pattern made with SVGs, fully customizable using Tailwind CSS.',
        code: BgDarkTilesCode,
        component: BgDarkTiles,
        link: '/magic/bg-boxes',
        class: ' overflow-hidden relative justify-center items-start md:h-[300px]',
        examples: [
            {
                id: 4,
                name: 'Background Grid Beam',
                fileName: 'GridBeamExample.svelte',
                component: GridBeamExample,
                code: [
                    {
                        filename: 'GridBeamExample.svelte',
                        code: GridBeamExampleCode,
                    },
                    {
                        filename: 'GridBeam.svelte',
                        code: GridBeamCode
                    }

                ]
            },
            {
                id: 1,
                name: 'Hover Dark Tiles',
                fileName: 'BgDarkTilesExample.svelte',
                component: BgDarkTilesExample,
                code: [
                    {
                        filename: 'BgDarkTilesExample.svelte',
                        code: BgDarkTilesExampleCode
                    },
                    {
                        filename: 'BgDarkTiles.svelte',
                        code: BgDarkTilesCode
                    }
                ]
            },
            // {
            //     id: 2,
            //     name: 'Hover Skew Tiles',
            //     fileName: 'BgSkewExample.svelte',
            //     component: SkewBgBoxesExample,
            //     code: SkewBgBoxesExampleCode
            // },
            {
                id: 3,
                name: 'Background Grid Hero',
                fileName: 'BgGridHero.svelte',
                component: BackgroundLights,
                code: [
                    {
                        filename: 'BackgroundLights.svelte',
                        code: BackgroundLightsCode
                    },
                    {
                        filename: 'Lights.svelte',
                        code: LightsCode
                    }
                ]
            },
        ],
        cncode: cncode,
        download: `npm i svelte-motion clsx tailwind-merge`

    }
]
