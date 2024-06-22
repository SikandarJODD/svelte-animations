// Images
import TweenedImg from "$lib/components/learnings/assets/Tweened.svg";
import SpringImg from "$lib/components/learnings/assets/Spring.svg";
import DurationBasedSpringImg from "$lib/components/learnings/assets/Duration_based_Spring.svg";
import RepeatImg from "$lib/components/learnings/assets/Repeat.svg";
import ReverseImg from "$lib/components/learnings/assets/Reverse.svg";
import WhileHoverImg from "$lib/components/learnings/assets/While_Hover.svg";
import WhileTapImg from "$lib/components/learnings/assets/While_Tap.svg";
import WhileDragImg from "$lib/components/learnings/assets/While_Drag.svg";
import CyclingThroughStatesImg from "$lib/components/learnings/assets/Cycling_through_States.svg";
import AnimateSequenceImg from "$lib/components/learnings/assets/Animation_Sequence.svg";
import DragConstraintsImg from "$lib/components/learnings/assets/Drag_Constraints.svg";
import DragDirectionLockingImg from "$lib/components/learnings/assets/Direction_locking.svg";
import DragTransformImg from "$lib/components/learnings/assets/Drag_Transform.svg";
import Drag3dTransformImg from "$lib/components/learnings/assets/Drag_3D_Transform.svg";



// Components

import TweenedExample from "../examples/TweenedExample.svelte";
import SpringExample from "../examples/SpringExample.svelte";
import DurationBasedSpringExample from "../examples/DurationBasedSpringExample.svelte";
import RepeatExample from "../examples/RepeatExample.svelte";
import ReverseExample from "../examples/ReverseExample.svelte";
import WhileHover from "../examples/WhileHover.svelte";
import WhileTap from "../examples/WhileTap.svelte";
import WhileDrag from "../examples/WhileDrag.svelte";
import CyclingStates from "../examples/CyclingStates.svelte";
import AnimateSequence from "../examples/AnimateSequence.svelte";
import DragConstraints from "../examples/DragConstraints.svelte";
import DragDirectionLock from "../examples/DragDirectionLock.svelte";
import DragTransform from "../examples/DragTransform.svelte";
import Drag3dTransform from "../examples/Drag3dTransform.svelte";

export let allLearning = [
    {
        id: 1,
        name: 'Tweened',
        desc: 'Tweened Effect using Framer Motion.',
        component: TweenedExample,
        link: "/learnings/1",
        image: TweenedImg
    },
    {
        id: 2,
        name: 'Spring',
        desc: 'Spring Effect using Framer Motion.',
        component: SpringExample,
        link: "/learnings/2",
        image: SpringImg
    },
    {
        id: 3,
        name: 'Duration based Spring',
        desc: 'Duration based Spring Effect using Framer Motion.',
        component: DurationBasedSpringExample,
        link: "/learnings/3",
        image: DurationBasedSpringImg
    },
    {
        id: 4,
        name: 'Repeat',
        desc: 'Repeat Effect using Framer Motion.',
        component: RepeatExample,
        link: "/learnings/4",
        image: RepeatImg
    },
    {
        id: 5,
        name: 'Reverse Effect',
        desc: 'Reverse Effect using Framer Motion.',
        component: ReverseExample,
        link: "/learnings/5",
        image: ReverseImg
    },
    {
        id: 6,
        name: 'While Hover Effect',
        desc: 'While Hover Effect using Framer Motion.',
        component: WhileHover,
        link: "/learnings/6",
        image: WhileHoverImg
    },
    {
        id: 7,
        name: 'While Tap Effect',
        desc: 'While Tap Effect using Framer Motion.',
        component: WhileTap,
        link: "/learnings/7",
        image: WhileTapImg
    },
    {
        id: 8,
        name: 'While Drag Effect',
        desc: 'While Drag Effect using Framer Motion.',
        component: WhileDrag,
        link: "/learnings/8",
        image: WhileDragImg
    },
    {
        id: 9,
        name: 'Cycling through States',
        desc: 'Cycling through States Effect using Framer Motion.',
        component: CyclingStates,
        link: "/learnings/9",
        image: CyclingThroughStatesImg
    },
    {
        id: 10,
        name: 'Animation Sequence',
        desc: 'Animation Sequence Effect using Framer Motion.',
        component: AnimateSequence,
        link: "/learnings/10",
        image: AnimateSequenceImg
    },
    {
        id: 11,
        name: 'Drag Constraints',
        desc: 'Drag Constraints Effect using Framer Motion.',
        component: DragConstraints,
        link: "/learnings/11",
        image: DragConstraintsImg
    },
    {
        id: 12,
        name: 'Drag Direction Locking',
        desc: 'Drag Direction Locking Effect using Framer Motion.',
        component: DragDirectionLock,
        link: "/learnings/12",
        image: DragDirectionLockingImg
    },
    {
        id: 13,
        name: 'Drag Transform',
        desc: 'Drag Transform Effect using Framer Motion.',
        component: DragTransform,
        link: "/learnings/13",
        image: DragTransformImg
    },
    {
        id: 14,
        name: 'Drag 3D Transform',
        desc: 'Drag 3D Transform Effect using Framer Motion.',
        component: Drag3dTransform,
        link: "/learnings/14",
        image: Drag3dTransformImg
    }
]