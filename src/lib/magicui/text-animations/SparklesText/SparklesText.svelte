<script lang="ts">
  import { cn } from "$lib/utils";
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

  let interval;
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
    {#each sparkles as item, _}
      <Sparkle {...item} />
    {/each}
    <strong>{text}</strong>
  </span>
</div>
