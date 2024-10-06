<script lang="ts">
  import { onMount, type ComponentType } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { writable } from "svelte/store";

  type TimelineItem = {
    title: string;
    content: ComponentType | string;
  };
  export let timelineData: TimelineItem[] = [];
  let containerRef: HTMLDivElement;
  let height = 0;
  let scrollProgress = writable(0);
  let heightTransform = tweened(0, { duration: 400, easing: cubicOut });
  let opacityTransform = tweened(0, { duration: 400, easing: cubicOut });

  onMount(() => {
    if (containerRef) {
      const rect = containerRef.getBoundingClientRect();
      height = rect.height;
    }

    let onScroll = () => {
      const rect = containerRef.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
      scrollProgress.set(progress);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  $: scrollProgress.subscribe((progress) => {
    heightTransform.set(progress * height);
    opacityTransform.set(progress < 0.1 ? progress * 10 : 1);
  });
</script>

<div
  class="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
  bind:this={containerRef}
>
  <div class="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
    <h2 class="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
      Changelog from my journey
    </h2>
    <p
      class="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm"
    >
      I've been working on Aceternity for the past 2 years. Here's a timeline of
      my journey.
    </p>
  </div>

  <div class="relative max-w-7xl mx-auto pb-20 overflow-hidden">
    {#each timelineData as item, index}
      <div class="flex justify-start pt-10 md:pt-40 md:gap-10">
        <div
          class="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
        >
          <div
            class="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
          >
            <div
              class="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
            />
          </div>
          <h3
            class="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500"
          >
            {item.title}
          </h3>
        </div>

        <div class="relative pl-20 pr-4 md:pl-4 w-full">
          <h3
            class="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500"
          >
            {item.title}
          </h3>
          {#if typeof item.content === "string"}
            {item.content}
          {:else}
            <svelte:component this={item.content} />
          {/if}
        </div>
      </div>
    {/each}

    <div
      style="height: {height}px;"
      class="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] timeline-line"
    >
      <div
        style="height: {$heightTransform}px; opacity: {$opacityTransform};"
        class="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
      />
    </div>
  </div>
</div>

<style>
  .timeline-line {
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
  }
</style>
