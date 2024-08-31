<script lang="ts">
    import { Motion } from "svelte-motion";
    import { writable } from "svelte/store";
  
    export let text = "";
    export let duration = 0;
  
    let svgRef: any = null;
    let cursor = writable({ x: 0, y: 0 });
    let hovered = writable(false);
    let maskPosition = writable({ cx: "50%", cy: "50%" });
  
    //   $: $cursor,
    //     svgRef,
    //     () => {
    //       if (svgRef) {
    //         let svgRect = svgRef.getBoundingClientRect();
    //         console.log(svgRect, "Svg");
    //         let cxPercentage = (($cursor.x - svgRect.left) / svgRect.width) * 100;
    //         let cyPercentage = (($cursor.y - svgRect.top) / svgRect.height) * 100;
    //         maskPosition.set({
    //           cx: `${cxPercentage}%`,
    //           cy: `${cyPercentage}%`,
    //         });
    //       }
    //     };
    let cursorChange = () => {
      if (svgRef) {
        let svgRect = svgRef.getBoundingClientRect();
        let cxPercentage = (($cursor.x - svgRect.left) / svgRect.width) * 100;
        let cyPercentage = (($cursor.y - svgRect.top) / svgRect.height) * 100;
        maskPosition.set({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    };
  
    function handleMouseEnter() {
      hovered.set(true);
    }
  
    function handleMouseLeave() {
      hovered.set(false);
    }
  
    function handleMouseMove(e) {
      cursor.set({ x: e.clientX, y: e.clientY });
    }
    $: $cursor, cursorChange();
  </script>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <svg
    bind:this={svgRef}
    width="100%"
    height="100%"
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:mousemove={(e) => handleMouseMove(e)}
    class="select-none"
  >
    <defs>
      <linearGradient
        id="textGradient"
        gradientUnits="userSpaceOnUse"
        cx="50%"
        cy="50%"
        r="25%"
      >
        {#if $hovered}
          <stop offset="0%" stop-color="var(--yellow-500)" />
          <stop offset="25%" stop-color="var(--red-500)" />
          <stop offset="50%" stop-color="var(--blue-500)" />
          <stop offset="75%" stop-color="var(--cyan-500)" />
          <stop offset="100%" stop-color="var(--violet-500)" />
        {/if}
      </linearGradient>
  
      <radialGradient
        id="revealMask"
        gradientUnits="userSpaceOnUse"
        r="20%"
        cy={$maskPosition.cy}
        cx={$maskPosition.cx}
      >
        <stop offset="0%" stop-color="white" />
        <stop offset="100%" stop-color="black" />
      </radialGradient>
  
      <mask id="textMask">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
      </mask>
    </defs>
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      stroke-width="0.3"
      class="font-[helvetica] transition-all duration-200 font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
      style:opacity={$hovered ? 0.7 : 0}
    >
      {text}
    </text>
  
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      stroke-width="0.3"
      class="font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-200 dark:stroke-neutral-700/60"
    >
      {text}
    </text>
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      stroke="url(#textGradient)"
      stroke-width="0.3"
      mask="url(#textMask)"
      class="font-[helvetica] font-bold fill-transparent text-7xl"
    >
      {text}
    </text>
  </svg>
  
  <style>
    .select-none {
      user-select: none;
    }
  </style>
  