<script lang="ts">
  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";

  export let words='Pull Up';
  export let wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  export let framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  let className: any = "";
  export { className as class };

  let wordSplit = words.split(" ");
</script>

<Motion
  variants={wrapperFramerProps}
  initial="hidden"
  animate="show"
  let:motion
>
  <h1
    class={cn(
      "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
      className
    )}
    use:motion
  >
    {#each wordSplit as word, i}
      <Motion variants={framerProps} let:motion>
        <span class="inline-block pr-[8px]" use:motion>
          {#if word === ""}
            <span>&nbsp;</span>
          {:else}
            {word}
          {/if}
        </span>
      </Motion>
    {/each}
  </h1>
</Motion>
