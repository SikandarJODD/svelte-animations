<script lang="ts">
    import { cn } from "$lib/utils";
    import { AnimatePresence, Motion } from "svelte-motion";

    // default prop values can be changed by passing a different value to component instance
    let {
        words = "Gradual Spacing",
        duration = 0.5,
        delayMultiple = 0.04,
        framerProps = {hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 },},
        modifications
    } = $props()

    // split words by space
    let splitWords = words.split("");
</script>

<div class="flex justify-start space-x-1 {modifications}">
    <AnimatePresence let:item list={[{ key: splitWords }]}>
        {#each splitWords as char, i}
            <Motion
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={framerProps}
                    transition={{
          duration: duration,
          delay: i * delayMultiple,
        }}
                    let:motion
            >
        <span use:motion class={cn("drop-shadow-sm", modifications)}>
          {#if char === " "}
            <span>&nbsp;</span>
          {:else}
            {char}
          {/if}
        </span>
            </Motion>
        {/each}
    </AnimatePresence>
</div>
