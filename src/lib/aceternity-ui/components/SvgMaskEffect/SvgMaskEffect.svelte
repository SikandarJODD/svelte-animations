<script>
  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import maskSvg from "./mask.svg";
  import { cn } from "$lib/utils";

  export let size = 50;
  export let revealSize = 300;
  let className = "";
  export { className as class };

  let isHovered = false;
  let mousePosition = writable({ x: 0, y: 0 });
  let containerRef;

  const updateMousePosition = (e) => {
    const rect = containerRef.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    mousePosition.set({ x, y });
  };

  onMount(() => {
    if (containerRef) {
      containerRef.addEventListener("mousemove", updateMousePosition);
    }
  });

  onDestroy(() => {
    if (containerRef) {
      containerRef.removeEventListener("mousemove", updateMousePosition);
    }
  });

  $: maskSize = isHovered ? revealSize : size;
</script>

<div bind:this={containerRef} class={cn("relative bg-white", className)}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="w-full h-full flex items-center justify-center text-6xl absolute bg-black text-white bg-grid-white/[0.2]"
    style="
        mask-position: {$mousePosition.x - maskSize / 2}px {$mousePosition.y -
      maskSize / 2}px;
        mask-image: var(--mask-svg);
        mask-size: {maskSize}px;
        mask-repeat: no-repeat;
      "
  >
    <div class="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
    <div
      on:mouseenter={() => (isHovered = true)}
      on:mouseleave={() => (isHovered = false)}
      class="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
    >
      <slot name="def"></slot>
    </div>
  </div>

  <div class="w-full h-full flex items-center justify-center text-white">
    <slot name="reveal"></slot>
  </div>
</div>

<style>
  :root {
    --mask-svg: url("./mask.svg");
  }
</style>
