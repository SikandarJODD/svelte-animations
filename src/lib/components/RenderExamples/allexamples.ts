import DivEffect from "./DivEffect.svelte";
import DivHover from "./DivHover.svelte";
import LinkEffect from "./LinkEffect.svelte";
import ModulDivEffect from "./ModulDivEffect.svelte";

export let allExamples = [
    {
        id: 1,
        name: 'Div Hover',
        desc: 'Simple Div Hover Effect using Svelte Spring.',
        component: DivHover,
        link: "/examples/1",

    },
    {
        id: 2,
        name: 'Link Hover',
        desc: 'Link Hover Effect using Svelte Spring.',
        component: LinkEffect,
        link: "/examples/2",
    },
    {
        id: 3,
        name: 'Modul Card Effect',
        desc: 'Modul Card Effect using crossfade and spring.',
        component: ModulDivEffect,
        link: '/examples/3'
    }
]