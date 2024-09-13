<script lang="ts">
    import {  scale } from "svelte/transition";
  
    export let zoomFactor = 1.5;
    export let lensSize = 170;
    export let isStatic = false;
    export let position = { x: 200, y: 150 };
    export let hovering: boolean;
  
    let mousePosition = { x: 100, y: 100 };
  
    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePosition = { x, y };
      position = { x, y };
    };
  </script>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="relative overflow-hidden rounded-2xl z-20  cursor-none"
    on:mouseenter={() => (hovering = true)}
    on:mouseleave={() => (hovering = false)}
    on:mousemove={handleMouseMove}
  >
    <slot></slot>
    {#if isStatic && hovering}
      <div
        in:scale
        out:scale={{ duration: 400 }}
        class="absolute inset-0 overflow-hidden"
        style="
            mask-image: radial-gradient(circle {lensSize /
          2}px at {position.x}px {position.y}px,black 100%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle {lensSize /
          2}px at {position.x}px {position.y}px,black 100%, transparent 100%);
            transform-origin: {position.x}px {position.y}px;
          "
      >
        <div
          class="absolute inset-0"
          style="transform: scale({zoomFactor}); transform-origin: {position.x}px {position.y}px;"
        >
          <slot></slot>
        </div>
      </div>
    {:else if hovering}
      <div
        transition:scale={{ duration: 400 }}
        class="absolute inset-0 overflow-hidden"
        style="
                mask-image: radial-gradient(circle {lensSize /
          2}px at {mousePosition.x}px {mousePosition.y}px,black 100%, transparent 100%);
                -webkit-mask-image: radial-gradient(circle {lensSize /
          2}px at {mousePosition.x}px {mousePosition.y}px,black 100%, transparent 100%);
                transform-origin: {mousePosition.x}px {mousePosition.y}px;
                z-index: 50;
              "
      >
        <div
          class="absolute inset-0"
          style="transform: scale({zoomFactor}); transform-origin: {mousePosition.x}px {mousePosition.y}px;"
        >
          <slot />
        </div>
      </div>
    {/if}
  </div>
  