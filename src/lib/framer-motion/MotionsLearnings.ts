// Images
import TweenedImg from "$lib/framer-motion/assets/Tweened.svg";
import SpringImg from "$lib/framer-motion/assets/Spring.svg";
import DurationBasedSpringImg from "$lib/framer-motion/assets/Duration_based_Spring.svg";
import RepeatImg from "$lib/framer-motion/assets/Repeat.svg";
import ReverseImg from "$lib/framer-motion/assets/Reverse.svg";
import WhileHoverImg from "$lib/framer-motion/assets/While_Hover.svg";
import WhileTapImg from "$lib/framer-motion/assets/While_Tap.svg";
import WhileDragImg from "$lib/framer-motion/assets/While_Tap.svg";
import CyclingThroughStatesImg from "$lib/framer-motion/assets/Cycling_through_States.svg";
import AnimateSequenceImg from "$lib/framer-motion/assets/Animation_Sequence.svg";
import DragConstraintsImg from "$lib/framer-motion/assets/Drag_Constraints.svg";
import DragDirectionLockingImg from "$lib/framer-motion/assets/Direction_locking.svg";
import DragTransformImg from "$lib/framer-motion/assets/Drag_Transform.svg";
import Drag3dTransformImg from "$lib/framer-motion/assets/Drag_3D_Transform.svg";

// Components

import TweenedExample from "./comp/TweenedExample.svelte";
import SpringExample from "./comp/SpringExample.svelte";
import DurationBasedSpringExample from "./comp/DurationBasedSpringExample.svelte";
import RepeatExample from "./comp/RepeatExample.svelte";
import ReverseExample from "./comp/ReverseExample.svelte";
import WhileHover from "./comp/WhileHover.svelte";
import WhileTap from "./comp/WhileTap.svelte";
import WhileDrag from "./comp/WhileDrag.svelte";
import CyclingStates from "./comp/CyclingStates.svelte";
import AnimateSequence from "./comp/AnimateSequence.svelte";
import DragConstraints from "./comp/DragConstraints.svelte";
import DragDirectionLock from "./comp/DragDirectionLock.svelte";
import DragTransform from "./comp/DragTransform.svelte";
import Drag3dTransform from "./comp/Drag3dTransform.svelte";


export let motionLearnings = [
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
        desc: 'While Drag Effect using Framer Motion.',
        component: CyclingStates,
        link: "/learnings/9",
        image: CyclingThroughStatesImg
    },
    {
        id: 10,
        name: 'Animation Sequence',
        desc: 'While Drag Effect using Framer Motion.',
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