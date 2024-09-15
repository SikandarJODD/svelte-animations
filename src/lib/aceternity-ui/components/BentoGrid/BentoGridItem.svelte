<script lang="ts">
  import { cn } from "$lib/utils";
  import type { ComponentType } from "svelte";

  let _class = "";
  export { _class as class };
  export let title: string | ComponentType;
  export let description: string  = "";
</script>

<div
  class={cn(
    "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
    _class
  )}
>
  <slot name="header"></slot>
  <div class="group-hover/bento:translate-x-2 transition duration-200">
    <slot name="icon"></slot>

    <div
      class="font-sans font-bold text-neutral-600 dark:text-neutral-200 my-2"
    >
      {#if typeof title === "string"}
        {title}
      {:else}
        <slot name="title"></slot>
      {/if}
    </div>
    <div
      class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
    >
      {#if description.length > 0}
        {description}
      {:else}
        <slot name="description"></slot>
      {/if}
    </div>
  </div>
</div>
