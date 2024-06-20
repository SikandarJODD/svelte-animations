import DeferredTransitionEffect from "./DeferredTransitionEffect.svelte";
import DivHover from "./DivHover.svelte";
import EmilKowalEffect from "./EmilKowalEffect.svelte";
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
    },
    {
        id: 4,
        name: 'Deferred transitions ',
        desc: 'Deferred transitions using crossfade ',
        component: DeferredTransitionEffect,
        link: '/examples/4'
    },
    {
        id: 5,
        name: 'Emil Kowal Effect',
        desc: 'Emil Kowal Transition Effect using spring and blur',
        component: EmilKowalEffect,
        link: '/examples/5'
    }
]