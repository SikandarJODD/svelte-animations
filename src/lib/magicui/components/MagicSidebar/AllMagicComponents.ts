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
import { allMagicTailwinds } from "./AllMagicTailwinds";

type MagicComponent = {
    id: string;
    name: string;
    desc: string;
    component: any;
    link: string;
    code: string | Code[];
    class?: string;
    showGrid?: boolean;
    previewComp?: any;
    previewCode?: string | Code[];
    examples?: ExampleComponent[];
    tailwind?: string;
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
}
// Create a list of all Magic Components 
export let allMagicComponents: MagicComponent[] = [{
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
    }]
}, {
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
}
]