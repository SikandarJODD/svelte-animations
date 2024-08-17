// Crossfade Example
import ExampleCrossFade from "./comp/ExampleCrossfade.svelte";
import ExampleCrossFadeCode from "./comp/ExampleCrossfade.svelte?raw";

// Deferred Transition Example
import ExampleDeferredTransition from "./comp/ExampleDeferredTransition.svelte";
import ExampleDeferredTransitionCode from "./comp/ExampleDeferredTransition.svelte?raw";

// Div Element Hover Example
import ExampleDivHover from "./comp/ExampleDivHover.svelte";
import ExampleDivHoverCode from "./comp/ExampleDivHover.svelte?raw";

// Emil Kowal Example
import ExampleEmilKowal from "./comp/ExampleEmilKowal.svelte";
import ExampleEmilKowalCode from "./comp/ExampleEmilKowal.svelte?raw";

// Link Effect Example
import ExampleLinkEffect from "./comp/ExampleLinkEffect.svelte";
import ExampleLinkEffectCode from "./comp/ExampleLinkEffect.svelte?raw";

// Link Moving Effect
import ExampleLinkMovingEffect from "./comp/ExampleLinkMovingEffect.svelte";
import ExampleLinkMovingEffectCode from "./comp/ExampleLinkMovingEffect.svelte?raw";

// Reveal Link Render
import ExampleRevealLinkRender from "./comp/ExampleRevealLinkRender.svelte";
import ExampleRevealLinkRenderCode from "./comp/ExampleRevealLinkRender.svelte?raw";

// Slide Tab Example
import ExampleSlideTab from "./comp/ExampleSlideTab.svelte";
import ExampleSlideTabCode from "./comp/ExampleSlideTab.svelte?raw";

// Text Hover Bounce Effect Example
import ExampleTextHoverBounceEffect from "./comp/ExampleTextHoverBounceEffect.svelte";
import ExampleTextHoverBounceEffectCode from "./comp/ExampleTextHoverBounceEffect.svelte?raw";

// Shift Dropdown Example
import ExShiftDropDown from "./comp/shiftingDropDown/ExShiftDropDown.svelte";
import ExShiftDropDownCode from "./comp/shiftingDropDown/ExShiftDropDown.svelte?raw";

// Encrypt Button Example
import ExampleEncryptButton from "./comp/ExampleEncryptButton.svelte";
import ExampleEncryptButtonCode from "./comp/ExampleEncryptButton.svelte?raw";


type Component = {
    id: number;
    name: string;
    desc: string;
    component: any;
    link: string;
    code?: string;
}

export let animationExamples: Component[] = [
    {
        id: 1,
        name: 'Dynamic Island Effect',
        desc: 'Dynamic Island Transition Effect using spring and blur',
        component: ExampleEmilKowal,
        link: '/examples/1',
        code: ExampleEmilKowalCode
    },
    {
        id: 2,
        name: 'Link Image Hover',
        desc: 'Link Image Hover Effect using Svelte Spring.',
        component: ExampleLinkEffect,
        link: "/examples/2",
        code: ExampleLinkEffectCode
    },
    {
        id: 10,
        name: 'Link Image Moving',
        desc: 'Link Image Moving Effect using Svelte Spring.',
        component: ExampleLinkMovingEffect,
        link: "/examples/10",
        code: ExampleLinkMovingEffectCode
    },
    {
        id: 3,
        name: 'Modul Card Effect',
        desc: 'Modul Card Effect using crossfade and spring.',
        component: ExampleCrossFade,
        link: '/examples/3',
        code: ExampleCrossFadeCode
    },
    {
        id: 4,
        name: 'Deferred transitions ',
        desc: 'Deferred transitions using crossfade ',
        component: ExampleDeferredTransition,
        link: '/examples/4',
        code: ExampleDeferredTransitionCode
    },
    {
        id: 5,
        name: 'Div Hover',
        desc: 'Simple Div Hover Effect using Svelte Spring.',
        component: ExampleDivHover,
        link: "/examples/5",
        code: ExampleDivHoverCode
    },
    {
        id: 6,
        name: 'Reveal Link Effect',
        desc: 'Hover Link to see animation Effect using Svelte Motion',
        component: ExampleRevealLinkRender,
        link: '/examples/6',
        code: ExampleRevealLinkRenderCode
    }, {
        id: 7,
        name: 'Shifting Dropdown',
        desc: 'Shifting Dropdown using Svelte Motion',
        component: ExShiftDropDown,
        link: '/examples/7',
        code: ExShiftDropDownCode
    },
    {
        id: 8,
        name: 'Text Hover Bounce Effect',
        desc: 'Text Hover Bounce Effect using Svelte Motion',
        component: ExampleTextHoverBounceEffect,
        link: '/examples/8',
        code: ExampleTextHoverBounceEffectCode
    },
    {
        id: 9,
        name: 'Slide Tab',
        desc: 'Slide Tab Effect using Svelte Motion',
        component: ExampleSlideTab,
        link: '/examples/9',
        code: ExampleSlideTabCode
    },
    {
        id:11,
        name:'Encrypt Button',
        desc:'Encrypt Button Effect using Svelte',
        component: ExampleEncryptButton,
        link:'/examples/11',
        code: ExampleEncryptButtonCode,
        
    }
]