<script lang="ts">
  import { cn } from "$lib/utils";
  import { setContext } from "svelte";
  import { Motion, useMotionValue } from "svelte-motion";
  let DEFAULT_MAGNIFICATION = 60;
  let DEFAULT_DISTANCE = 140;
  export let direction: "top" | "middle" | "bottom" = "top";
  export let distance: number = DEFAULT_DISTANCE;
  export let magnification: number = DEFAULT_MAGNIFICATION;

  let dockVariants = cn(
    "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md"
  );
  let mouseX = useMotionValue(Infinity);
  setContext("mouseX", mouseX);
</script>

<Motion let:motion>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:mousemove={(e) => mouseX.set(e.pageX)}
    on:mouseleave={() => mouseX.set(Infinity)}
    use:motion
    class={cn(dockVariants, {
      "items-start": direction === "top",
      "items-center": direction === "middle",
      "items-end": direction === "bottom",
    })}
  >
    <slot {mouseX}>
      <!-- Default -->Dock
    </slot>
  </div>
</Motion>
