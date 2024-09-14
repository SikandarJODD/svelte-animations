<script lang="ts">
  import { cn } from "$lib/utils";
  export let width = 40;
  export let height = 40;
  export let x = -1;
  export let y = -1;
  export let strokeDashArray: string = "";
  export let squares: Array<[x: number, y: number]> = [[0, 0]];
  let className: any = "";
  export { className as class };
  let id = crypto.randomUUID().toString().slice(0, 8);
  export let fillColor = "rgb(156 163 175 / 0.3)";
  // : rgb(156 163 175 / 0.3)
</script>

<svg
  aria-hidden="true"
  class={cn(
    "pointer-events-none absolute inset-0 h-full w-full",
    className
  )}
  {...$$restProps}
  stroke={fillColor}
>
  <defs>
    <pattern {id} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
      <path
        d="M.5 {height}V.5H{width}"
        fill="none"
        stroke-dasharray={strokeDashArray}
      />
    </pattern>
  </defs>
  <rect width="100%" height="100%" stroke-width={0} fill="url(#{id})" />
  {#if squares}
    <svg {x} {y} class="overflow-visible">
      {#each squares as sq}
        <rect
          stroke={fillColor}
          fill="none"
          stroke-width="0"
          width={width - 1}
          height={height - 1}
          x={sq[0] * width + 1}
          y={sq[1] * height + 1}
        />
      {/each}
    </svg>
  {/if}
</svg>
