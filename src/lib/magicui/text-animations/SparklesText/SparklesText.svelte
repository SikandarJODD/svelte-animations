<script lang="ts">
  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";
  interface Sparkle {
    id: string;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
    lifespan: number;
  }

  export let text: string = "Hello World";
  export let colors = {
    first: "#9E7AFF",
    second: "#FE8BBB",
  };
  export let sparklesCount = 10;

  let className = "";
  export { className as class };

  let sparkles: Sparkle[] = [];
  import { onMount, onDestroy, tick } from "svelte";
  import Sparkle from "./Sparkle.svelte";

  let generateStar = () => {
    let starX = `${Math.random() * 100}%`;
    let starY = `${Math.random() * 100}%`;
    let color = Math.random() > 0.5 ? colors.first : colors.second;
    let delay = Math.random() * 2;
    let scale = Math.random() * 1 + 0.3;
    let lifespan = Math.random() * 10 + 5;
    let id = `${starX}-${starY}-${Date.now()}`;
    return { id, x: starX, y: starY, color, delay, scale, lifespan };
  };

  let initializeStars = async () => {
    let newSparkles = Array.from({ length: sparklesCount }, generateStar);
    sparkles = newSparkles;
  };

  const updateStars = () => {
    let temp = sparkles.map((star) => {
      if (star.lifespan <= 0) {
        return generateStar();
      } else {
        return { ...star, lifespan: star.lifespan - 0.1 };
      }
    });
    sparkles = temp;
  };

  let interval: NodeJS.Timeout;
  onMount(async () => {
    initializeStars();
    interval = setInterval(updateStars, 100);
  });
  onDestroy(() => clearInterval(interval));
</script>

<div
  style:--sparkles-first-color="{colors.first};"
  style:--sparkles-second-color="{colors.second};"
  class={cn("text-6xl font-bold", className)}
  {...$$restProps}
>
  <span class="relative inline-block">
    {#each sparkles as item}
      <Motion
        initial={{ opacity: 0, left: item.x, top: item.y }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, item.scale, 0],
          rotate: [75, 120, 150],
        }}
        transition={{ duration: 0.8, repeat: Infinity, delay: item.delay }}
        let:motion
      >
        <svg
          use:motion
          id={item.id}
          class="pointer-events-none absolute z-20"
          width="21"
          height="21"
          viewBox="0 0 21 21"
        >
          <path
            d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
            fill={item.color}
          />
        </svg>
      </Motion>
    {/each}
    <strong>{text}</strong>
  </span>
</div>
