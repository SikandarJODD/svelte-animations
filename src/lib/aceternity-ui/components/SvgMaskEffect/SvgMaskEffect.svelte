<script>
  import { Motion } from "svelte-motion";
  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import { scale } from "svelte/transition";
  import maskSvg from "./mask.svg";
  import { cn } from "$lib/utils";

  export let size = 10;
  export let revealSize = 310;
  let className = "";
  export { className as class };

  let isHovered = writable(false);
  let mousePosition = writable({ x: 0, y: 0 });
  let containerRef;

  const updateMousePosition = (e) => {
    const rect = containerRef.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    mousePosition.set({ x, y });
  };

  onMount(() => {
    containerRef.addEventListener("mousemove", updateMousePosition);
  });

  onDestroy(() => {
    if (containerRef) {
      containerRef.removeEventListener("mousemove", updateMousePosition);
    }
  });

  $: maskSize = $isHovered ? revealSize : size;
  $: console.log($isHovered, $mousePosition);
</script>

<Motion
  animate={{
    backgroundColor: $isHovered ? "var(--white)" : "var(--white)",
  }}
  let:motion
>
  <div
    use:motion
    bind:this={containerRef}
    class={cn("relative overflow-hidden", className)}
  >
    <Motion
      animate={{
        maskPosition: `${$mousePosition.x - maskSize / 2}px ${$mousePosition.y - maskSize / 2}px`,
        maskSize: `${maskSize}px`,
      }}
      transition={{ duration: 0 }}
      let:motion
    >
      <div
        use:motion
        class="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white"
        style="
        mask-image: url({maskSvg});
        mask-size: 40px;
        mask-repeat: no-repeat;
      "
      >
        <div class="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          on:mouseenter={() => isHovered.set(true)}
          on:mouseleave={() => isHovered.set(false)}
          class="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
        >
          <slot name="def"></slot>
        </div>
      </div>
    </Motion>
    <div class="w-full h-full flex items-center justify-center text-white">
      <slot name="reveal"></slot>
    </div>
  </div>
</Motion>
