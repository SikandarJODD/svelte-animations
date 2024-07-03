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

// Tweened Animation
import TweenedExample from "./comp/TweenedExample.svelte";
import TweenedExampleCode from "./comp/TweenedExample.svelte?raw";

// Spring Example
import SpringExample from "./comp/SpringExample.svelte";
import SpringExampleCode from "./comp/SpringExample.svelte?raw";

// Duration Based Spring Example
import DurationBasedSpringExample from "./comp/DurationBasedSpringExample.svelte";
import DurationBasedSpringExampleCode from "./comp/DurationBasedSpringExample.svelte?raw";

// Repeat Example
import RepeatExample from "./comp/RepeatExample.svelte";
import RepeatExampleCode from "./comp/RepeatExample.svelte?raw";

// Reverse Example
import ReverseExample from "./comp/ReverseExample.svelte";
import ReverseExampleCode from "./comp/ReverseExample.svelte?raw";

// While Hover
import WhileHover from "./comp/WhileHover.svelte";
import WhileHoverCode from "./comp/WhileHover.svelte?raw";

// While Tap
import WhileTap from "./comp/WhileTap.svelte";
import WhileTapCode from "./comp/WhileTap.svelte?raw";

// While Drag
import WhileDrag from "./comp/WhileDrag.svelte";
import WhileDragCode from "./comp/WhileDrag.svelte?raw";

// Cycling States
import CyclingStates from "./comp/CyclingStates.svelte";
import CyclingStatesCode from "./comp/CyclingStates.svelte?raw";

// Animated Sequence
import AnimateSequence from "./comp/AnimateSequence.svelte";
import AnimateSequenceCode from "./comp/AnimateSequence.svelte?raw";

// Drag Constraints
import DragConstraints from "./comp/DragConstraints.svelte";
import DragConstraintsCode from "./comp/DragConstraints.svelte?raw";

// Drag Direction Lock
import DragDirectionLock from "./comp/DragDirectionLock.svelte";
import DragDirectionLockCode from "./comp/DragDirectionLock.svelte?raw";

// Drag Transform
import DragTransform from "./comp/DragTransform.svelte";
import DragTransformCode from "./comp/DragTransform.svelte?raw";

// Drag 3D Transform
import Drag3dTransform from "./comp/Drag3dTransform.svelte";
import Drag3dTransformCode from "./comp/Drag3dTransform.svelte?raw";

// ColorInterpolation
import ColorInterpolation from "./comp/ColorInterpolation.svelte";
import ColorInterpolationCode from "./comp/ColorInterpolation.svelte?raw";

// Morph SVG
import MorphSvg from "./comp/MorphSVG.svelte";
import MorphSvgCode from "./comp/MorphSVG.svelte?raw";

// Scroll Progress
import ScrollProgress from "./comp/ScrollProgress.svelte";
import ScrollProgressCode from "./comp/ScrollProgress.svelte?raw";

// Keyframe Position Color
import KeyframesPositionColor from "./comp/KeyframesPositionColor.svelte";
import KeyframesPositionColorCode from "./comp/KeyframesPositionColor.svelte?raw";

// Animated Presence Stack
import AnimatedPresenceStackCode from "./comp/AnimatedPresenceStack.svelte?raw";
import AnimatedPresenceStack from "./comp/AnimatedPresenceStack.svelte";
import CardCode from "./comp/Card.svelte?raw";

type MotionLearnings = {
    id: number;
    name: string;
    desc: string;
    component: any;
    link: string;
    image: any;
    code: string | Code[];
    class?: string
}
type Code = {
    filename: string;
    code: string
}

export let motionLearnings: MotionLearnings[] = [
    {
        id: 1,
        name: 'Tweened',
        desc: 'Tweened Effect using Framer Motion.',
        component: TweenedExample,
        link: "/learnings/1",
        image: TweenedImg,
        code: TweenedExampleCode
    },
    {
        id: 2,
        name: 'Spring',
        desc: 'Spring Effect using Framer Motion.',
        component: SpringExample,
        link: "/learnings/2",
        image: SpringImg,
        code: SpringExampleCode
    },
    {
        id: 3,
        name: 'Duration based Spring',
        desc: 'Duration based Spring Effect using Framer Motion.',
        component: DurationBasedSpringExample,
        link: "/learnings/3",
        image: DurationBasedSpringImg,
        code: DurationBasedSpringExampleCode
    },
    {
        id: 4,
        name: 'Repeat',
        desc: 'Repeat Effect using Framer Motion.',
        component: RepeatExample,
        link: "/learnings/4",
        image: RepeatImg,
        code: RepeatExampleCode
    },
    {
        id: 5,
        name: 'Reverse Effect',
        desc: 'Reverse Effect using Framer Motion.',
        component: ReverseExample,
        link: "/learnings/5",
        image: ReverseImg,
        code: ReverseExampleCode
    },
    {
        id: 6,
        name: 'While Hover Effect',
        desc: 'While Hover Effect using Framer Motion.',
        component: WhileHover,
        link: "/learnings/6",
        image: WhileHoverImg,
        code: WhileHoverCode
    },
    {
        id: 7,
        name: 'While Tap Effect',
        desc: 'While Tap Effect using Framer Motion.',
        component: WhileTap,
        link: "/learnings/7",
        image: WhileTapImg,
        code: WhileTapCode
    },
    {
        id: 8,
        name: 'While Drag Effect',
        desc: 'While Drag Effect using Framer Motion.',
        component: WhileDrag,
        link: "/learnings/8",
        image: WhileDragImg,
        code: WhileDragCode
    },
    {
        id: 9,
        name: 'Cycling through States',
        desc: 'While Drag Effect using Framer Motion.',
        component: CyclingStates,
        link: "/learnings/9",
        image: CyclingThroughStatesImg,
        code: CyclingStatesCode
    },
    {
        id: 10,
        name: 'Animation Sequence',
        desc: 'While Drag Effect using Framer Motion.',
        component: AnimateSequence,
        link: "/learnings/10",
        image: AnimateSequenceImg,
        code: AnimateSequenceCode
    },
    {
        id: 11,
        name: 'Drag Constraints',
        desc: 'Drag Constraints Effect using Framer Motion.',
        component: DragConstraints,
        link: "/learnings/11",
        image: DragConstraintsImg,
        code: DragConstraintsCode
    },
    {
        id: 12,
        name: 'Drag Direction Locking',
        desc: 'Drag Direction Locking Effect using Framer Motion.',
        component: DragDirectionLock,
        link: "/learnings/12",
        image: DragDirectionLockingImg,
        code: DragDirectionLockCode
    },
    {
        id: 13,
        name: 'Drag Transform',
        desc: 'Drag Transform Effect using Framer Motion.',
        component: DragTransform,
        link: "/learnings/13",
        image: DragTransformImg,
        code: DragTransformCode
    },
    {
        id: 14,
        name: 'Drag 3D Transform',
        desc: 'Drag 3D Transform Effect using Framer Motion.',
        component: Drag3dTransform,
        link: "/learnings/14",
        image: Drag3dTransformImg,
        code: Drag3dTransformCode
    },
    {
        id: 15,
        name: 'Color Interpolation',
        desc: 'Color Interpolation Effect using Framer Motion.',
        component: ColorInterpolation,
        link: "/learnings/15",
        image: Drag3dTransformImg,
        code: ColorInterpolationCode
    },
    {
        id: 16,
        name: 'Morph SVG',
        desc: 'Morph SVG Effect using Framer Motion.',
        component: MorphSvg,
        link: "/learnings/16",
        image: Drag3dTransformImg,
        code: MorphSvgCode,
    },
    {
        id: 17,
        name: 'Scroll Progess',
        desc: 'Scroll Progess Effect using Framer Motion.',
        component: ScrollProgress,
        link: "/learnings/17",
        image: Drag3dTransformImg,
        code: ScrollProgressCode,
    },
    {
        id: 18,
        name: 'Keyframes Position',
        desc: 'Keyframes Position Color Effect using Framer Motion.',
        component: KeyframesPositionColor,
        link: "/learnings/18",
        image: Drag3dTransformImg,
        code: KeyframesPositionColorCode,
        class:'h-[380px] flex justify-center items-start'
    },
    {
        id: 19,
        name: 'Animated Presence Stack',
        desc: 'Animated Presence Stack Effect using Framer Motion.',
        component: AnimatedPresenceStack,
        link: "/learnings/19",
        image: Drag3dTransformImg,
        code: [{
            filename: 'AnimatedPresenceStack.svelte',
            code: AnimatedPresenceStackCode,
        }, {
            filename: 'Card.svelte',
            code: CardCode
        }]
    }



]