import { allMagicTailwinds } from "../AllMagicTailwinds";
import type { MagicComponent } from "../AllTypes";

// Shimmer Button
import ShimmerButton from "./shimmer/ShimmerButton.svelte";
import ShimmerButtonCode from "./shimmer/ShimmerButton.svelte?raw";
import ShimmerExampleBtn from "./shimmer/example/ShimmerExampleBtn.svelte";
import ShimmerExampleBtnCode from "./shimmer/example/ShimmerExampleBtn.svelte?raw";

export let buttonMagic: MagicComponent[] = [
    {
        id: 'shimmer-button',
        name: 'Shimmer Button',
        desc: 'A button with shimmer effect.',
        component: ShimmerButton,
        code: ShimmerButtonCode,
        link: "/magic/shimmer-button",
        showGrid: true,
        tailwind: allMagicTailwinds['shimmer'],
        examples: [
            {
                id: 1,
                name: 'Shimmer Button',
                fileName: 'ShimmerButton.svelte',
                code: ShimmerExampleBtnCode,
                component: ShimmerExampleBtn,
                showDots: true
            }
        ]
    }
]
