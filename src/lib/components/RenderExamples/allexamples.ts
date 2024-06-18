import DivEffect from "./DivEffect.svelte";
import DivHover from "./DivHover.svelte";

export let allExamples = [
    {
        id: 1,
        title: 'Div Hover',
        component: DivHover,
    }, {
        id: 2,
        title: 'Div Effect',
        component: DivEffect,
    }
]