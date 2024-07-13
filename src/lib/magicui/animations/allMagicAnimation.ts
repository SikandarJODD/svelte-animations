import { cncode } from "$lib/cncode";
import type { MagicComponent } from "../AllTypes";


import BlurFade from "./BlurFade/BlurFade.svelte";
import BlurFadeCode from "./BlurFade/BlurFade.svelte?raw";
import ImagesBlurFade from "./BlurFade/examples/ImagesBlurFade.svelte";
import ImagesBlurFadeCode from "./BlurFade/examples/ImagesBlurFade.svelte?raw";
import TextBlurFade from "./BlurFade/examples/TextBlurFade.svelte";
import TextBlurFadeCode from "./BlurFade/examples/TextBlurFade.svelte?raw";

export let allMagicAnimation: MagicComponent[] = [
    {
        id: 'blur-fade',
        name: 'Blur Fade',
        link: '/magic/blur-fade',
        component: BlurFade,
        code: BlurFadeCode,
        desc: 'Blur Fade is a simple animation that fades in and out with a blur effect.',
        examples: [
            {
                id: 1,
                name: 'Text Fade',
                fileName: 'TextFade.svelte',
                component: TextBlurFade,
                code: TextBlurFadeCode,
                showDots: true
            },
            {
                id: 2,
                name: 'Image Fade',
                fileName: 'ImageFade.svelte',
                component: ImagesBlurFade,
                code: ImagesBlurFadeCode
            }
        ],
        download: `npm i svelte-inview svelte-motion`
    }
]