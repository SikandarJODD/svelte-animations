import ModulDivEffect from "$lib/components/RenderExamples/ModulDivEffect.svelte";
import TweenedImg from "$lib/components/learnings/assets/Tweened.svg";
import SpringImg from "$lib/components/learnings/assets/Spring.svg";
import DurationBasedSpringImg from "$lib/components/learnings/assets/Duration_based_Spring.svg";

import RepeatImg from "$lib/components/learnings/assets/Repeat.svg";
import ReverseImg from "$lib/components/learnings/assets/Reverse.svg";

export let allLearning = [
    {
        id: 1,
        name: 'Tweened',
        desc: 'Tweened Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/1",
        image: TweenedImg
    },
    {
        id: 2,
        name: 'Spring',
        desc: 'Spring Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/2",
        image: SpringImg
    },
    {
        id: 3,
        name: 'Duration based Spring',
        desc: 'Duration based Spring Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/3",
        image: DurationBasedSpringImg
    },
    {
        id: 4,
        name: 'Repeat',
        desc: 'Repeat Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/4",
        image: RepeatImg
    },
    {
        id: 5,
        name: 'Reverse Effect',
        desc: 'Reverse Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/5",
        image: ReverseImg
    },
    {
        id: 6,
        name: 'While Hover Effect',
        desc: 'While Hover Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/6",
        image: ''
    },
    {
        id: 7,
        name: 'While Tap Effect',
        desc: 'While Tap Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/7",
        image: ''
    },
    {
        id: 8,
        name: 'While Drag Effect',
        desc: 'While Drag Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/8",
        image: ''
    },
    {
        id: 9,
        name: 'Cycling through States',
        desc: 'While Drag Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/9",
        image: ''
    },
    {
        id: 10,
        name: 'Animation Sequence',
        desc: 'While Drag Effect using Framer Motion.',
        component: ModulDivEffect,
        link: "/examples/10",
        image: ''
    },

]