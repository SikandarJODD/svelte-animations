import { DotPattern } from "$lib/magicui/backgrounds/DotPattern";
import DotPatternCode from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte?raw";
import DotsCenterExample from "$lib/magicui/backgrounds/DotPattern/examples/DotsCenterExample.svelte";

type MagicComponent = {
    id: string;
    name: string;
    desc: string;
    component: any;
    link: string;
    code: string | Code[];
    class?: string;
    showGrid?: boolean;
}
type Code = {
    filename: string;
    code: string
}
// Create a list of all Magic Components 
export let allMagicComponents: MagicComponent[] = [{
    id: 'dot-pattern',
    name: 'Dot Pattern',
    desc: 'Dot Pattern using Framer Motion.',
    component: DotPattern,
    link: "/magic-components/dot-pattern",
    code: DotPatternCode,
    class: 'relative overflow-hidden',
}
]