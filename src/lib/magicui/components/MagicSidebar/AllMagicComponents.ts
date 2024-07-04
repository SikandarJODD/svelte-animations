import { DotPattern } from "$lib/magicui/backgrounds/DotPattern";
import DotPatternCode from "$lib/magicui/backgrounds/DotPattern/DotPattern.svelte?raw";
import DotsCenterExample from "$lib/magicui/backgrounds/DotPattern/examples/DotsCenterExample.svelte";
import DotsCenterExampleCode from "$lib/magicui/backgrounds/DotPattern/examples/DotsCenterExample.svelte?raw";

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
}
type Code = {
    filename: string;
    code: string
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
}
]