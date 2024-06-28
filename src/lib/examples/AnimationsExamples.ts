import ExampleCrossfade from "./comp/ExampleCrossfade.svelte";
import ExampleDeferredTransition from "./comp/ExampleDeferredTransition.svelte";
import ExampleDivHover from "./comp/ExampleDivHover.svelte";
import ExampleEmilKowal from "./comp/ExampleEmilKowal.svelte";
import ExampleLinkEffect from "./comp/ExampleLinkEffect.svelte";
import ExampleLinkMovingEffect from "./comp/ExampleLinkMovingEffect.svelte";
import ExampleRevealLinkRender from "./comp/ExampleRevealLinkRender.svelte";
import ExampleSlideTab from "./comp/ExampleSlideTab.svelte";
import ExampleTextHoverBounceEffect from "./comp/ExampleTextHoverBounceEffect.svelte";
import ExShiftDropDown from "./comp/shiftingDropDown/ExShiftDropDown.svelte";



export let animationExamples = [
    {
        id: 1,
        name: 'Emil Kowal Effect',
        desc: 'Emil Kowal Transition Effect using spring and blur',
        component: ExampleEmilKowal,
        link: '/examples/1'
    },
    {
        id: 2,
        name: 'Link Image Hover',
        desc: 'Link Image Hover Effect using Svelte Spring.',
        component: ExampleLinkEffect,
        link: "/examples/2",
    },
    {
        id: 10,
        name: 'Link Image Moving',
        desc: 'Link Image Moving Effect using Svelte Spring.',
        component: ExampleLinkMovingEffect,
        link: "/examples/10",
    },
    {
        id: 3,
        name: 'Modul Card Effect',
        desc: 'Modul Card Effect using crossfade and spring.',
        component: ExampleCrossfade,
        link: '/examples/3'
    },
    {
        id: 4,
        name: 'Deferred transitions ',
        desc: 'Deferred transitions using crossfade ',
        component: ExampleDeferredTransition,
        link: '/examples/4'
    },
    {
        id: 5,
        name: 'Div Hover',
        desc: 'Simple Div Hover Effect using Svelte Spring.',
        component: ExampleDivHover,
        link: "/examples/5",

    },
    {
        id: 6,
        name: 'Reveal Link Effect',
        desc: 'Hover Link to see animation Effect using Svelte Motion',
        component: ExampleRevealLinkRender,
        link: '/examples/6'
    }, {
        id: 7,
        name: 'Shifting Dropdown',
        desc: 'Shifting Dropdown using Svelte Motion',
        component: ExShiftDropDown,
        link: '/examples/7'
    },
    {
        id: 8,
        name: 'Text Hover Bounce Effect',
        desc: 'Text Hover Bounce Effect using Svelte Motion',
        component: ExampleTextHoverBounceEffect,
        link: '/examples/8'
    },
    {
        id: 9,
        name: 'Slide Tab',
        desc: 'Slide Tab Effect using Svelte Motion',
        component: ExampleSlideTab,
        link: '/examples/9'
    },
]