<script lang="ts">
  let _class: string = "";
  export { _class as class };

  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";

  let position = { x: 0, y: 0 };
  let ref: HTMLButtonElement | null = null;

  let handleMouseMove = (e: MouseEvent) => {
    let { clientX, clientY } = e;
    let { height, width, left, top } = ref.getBoundingClientRect();

    let middleX = clientX - (left + width / 2);
    let middleY = clientY - (top + height / 2);

    position.x = middleX;
    position.y = middleY;
  };

  let handleMouseLeave = () => {
    position.x = 0;
    position.y = 0;
  };
</script>

<Motion
  let:motion
  animate={{ x: position.x, y: position.y }}
  transition={{
    type: "spring",
    damping: 15,
    stiffness: 150,
    mass: 0.1,
  }}
>
  <button
    class={cn(
      "relative rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black",
      _class
    )}
    bind:this={ref}
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    use:motion
  >
    <slot>Button</slot>
  </button>
</Motion>
