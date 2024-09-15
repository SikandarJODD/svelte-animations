<script lang="ts">
  import { cn } from "$lib/utils";

  export let title: string;
  export let description: string;
  export let icon: any;
  export let index: number;
</script>

<div
  class={cn(
    "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
    (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
    index < 4 && "lg:border-b dark:border-neutral-800"
  )}
>
  {#if index < 4}
    <div
      class="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
    />
  {/if}
  {#if index >= 4}
    <div
      class="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
    />
  {/if}
  <div class="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
    <svelte:component this={icon} />
  </div>
  <div class="text-lg font-bold mb-2 relative z-10 px-10">
    <div
      class="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"
    />
    <span
      class="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
    >
      {title}
    </span>
  </div>
  <p
    class="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
  >
    {description}
  </p>
</div>
