<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";
  import Button from "$lib/components/ui/button/button.svelte";

  type $$Props = HTMLAttributes<HTMLDivElement>;
  let className: $$Props["class"] = undefined;
  export { className as class };
  export let reRender = true;
  let rendering = false;
  let updateRendering = () => {
    rendering = !rendering;
    
  };
</script>

<div
  class={cn(
    "p-3 md:p-8 min-h-[250px] flex items-center justify-center shadow border border-neutral-900 rounded-xl relative",
    className
  )}
  {...$$restProps}
>
  {#if reRender}
    <div class="absolute top-2 right-2 z-50">
      <Button on:click={updateRendering} variant='secondary' size="icon" class="md:size-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-neutral-800 dark:text-neutral-300/70"
          ><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
            d="M3 3v5h5"
          /><path
            d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
          /><path d="M16 16h5v5" /></svg
        >
      </Button>
    </div>
  {/if}
  {#key rendering}
    <slot></slot>
  {/key}
</div>
