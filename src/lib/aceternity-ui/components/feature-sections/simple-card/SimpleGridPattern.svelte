<script>
  import { cn } from "$lib/utils";

  export let width;
  export let height;
  export let x;
  export let y;
  export let squares;
  let _class = "";
  export { _class as class };

  let patternId = crypto.randomUUID();
</script>

<svg aria-hidden="true"  class={cn(_class)}>
  <defs>
    <pattern
      id={patternId}
      {width}
      {height}
       patternUnits="userSpaceOnUse"
      {x}
      {y}
    >
      <path d={`M.5 ${height}V.5H${width}`} fill="none" />
    </pattern>
  </defs>
  <rect
    width="100%"
    height="100%"
    stroke-width={0}
    fill={`url(#${patternId})`}
  />
  {#if squares}
    <svg {x} {y} class="overflow-visible">
      {#each squares as [x, y]}
        <rect
          stroke-width="0"
          width={width + 1}
          height={height + 1}
          x={x * width}
          y={y * height}
        />
      {/each}
    </svg>
  {/if}
</svg>
