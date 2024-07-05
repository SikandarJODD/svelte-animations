
import { backgroundMagic } from "$lib/magicui/backgrounds/backgroundMagic";
import { buttonMagic } from "$lib/magicui/buttons/buttonMagic";
import { allMagicText } from "$lib/magicui/text-animations/AllMagicText";



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
type AllMagic = {
    id: number | string;
    heading: string;
    sub: MagicComponent[] | any;

}

export let allMagicComponents = [...buttonMagic, ...backgroundMagic, ...allMagicText];

