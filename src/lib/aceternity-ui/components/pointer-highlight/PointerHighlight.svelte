<script lang="ts">
  import Pointer from "./Pointer.svelte";
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";

  export let rectangleClassName = "";
  export let pointerClassName = "";
  export let containerClassName = "";
  export let inView: boolean = true;

  let containerRef: HTMLDivElement;

  const dimensions = spring(
    { width: 0, height: 0 },
    { stiffness: 0.1, damping: 0.3 }
  );

  let width = 0;
  let height = 0;
  let hasRunOnce = false;

  let resizeObserver: ResizeObserver;
  let intersectionObserver: IntersectionObserver;

  let isVisible = false;

  function updateSize() {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    dimensions.set({ width: rect.width, height: rect.height });
  }

  function observeResize() {
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        dimensions.set({ width: w, height: h });
      }
    });

    resizeObserver.observe(containerRef);
  }

  function unobserveResize() {
    resizeObserver?.unobserve(containerRef);
    if (resizeObserver && containerRef) {
      resizeObserver.unobserve(containerRef);
    }
  }

  function observeVisibility() {
    intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (inView) {
            updateSize();
            observeResize();
          } else if (!hasRunOnce) {
            hasRunOnce = true;
            updateSize();
          }
        } else {
          if (inView) {
            unobserveResize();
            dimensions.set({ width: 0, height: 0 });
          }
        }
      },
      { threshold: 0.1 }
    );

    intersectionObserver.observe(containerRef);
  }

  function subscribeToDimensions() {
    return dimensions.subscribe((val) => {
      width = val.width;
      height = val.height;
    });
  }

  onMount(() => {
    if (!containerRef) return;

    const unsubscribe = subscribeToDimensions();
    observeVisibility();

    return () => {
      intersectionObserver?.unobserve(containerRef);
      unobserveResize();
      unsubscribe();
    };
  });
</script>

<div bind:this={containerRef} class={`relative w-fit ${containerClassName}`}>
  {#if width > 0 && height > 0}
    <div
      class="pointer-events-none absolute inset-0 -z-10"
      style="opacity: 1; transform: scale(1); transition: opacity 0.5s ease-out, transform 0.5s ease-out;"
    >
      <div
        class={`absolute inset-0 border border-neutral-800 dark:border-neutral-200 ${rectangleClassName}`}
        style="width: {width}px; height: {height}px; transition: width 1s ease-in-out, height 1s ease-in-out;"
      />
    </div>
    <div
      class="pointer-events-none absolute"
      style="
        opacity: 1;
        transform: translate({width + 4}px, {height + 4}px) rotate(-90deg);
        transition: opacity 0.1s ease-in-out, transform 1s ease-in-out;
      "
    >
      <Pointer className={`h-5 w-5 text-blue-500 z-50 ${pointerClassName}`} />
    </div>
  {/if}
  <slot />
</div>
