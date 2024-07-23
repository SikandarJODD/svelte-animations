<script lang="ts">
  import { cn } from "$lib/utils";
  import { getContext } from "svelte";
  import { Motion, useSpring, useTransform } from "svelte-motion";

  let DEFAULT_MAGNIFICATION = 60;
  let DEFAULT_DISTANCE = 140;
  let className = "";
  export { className as class };
  let mouseX = getContext("mouseX");
  $: console.log(mouseX.current, "---");
  export let distance: number = DEFAULT_DISTANCE;
  export let magnification: number = DEFAULT_MAGNIFICATION;
  let ref: HTMLElement;
  let distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );
  let width = useSpring(widthSync, { stiffness: 150, damping: 12, mass: 0.1 });
</script>

<Motion style={{ width }} let:motion>
  <div
    class={cn(
      "flex aspect-square cursor-pointer items-center justify-center rounded-full",
      className
    )}
    bind:this={ref}
    use:motion
  >
    <slot>
      <!-- Default -->DockIcon
    </slot>
  </div>
</Motion>
