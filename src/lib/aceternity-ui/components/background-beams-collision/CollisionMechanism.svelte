<script lang="ts">
  import { Motion, AnimatePresence } from "svelte-motion";
  import Explosion from "./Explosion.svelte";
  import { onMount } from "svelte";

  type Beam = {
    initialX?: number;
    translateX?: number;
    initialY?: number;
    translateY?: number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
    class?: string;
  };
  export let beam: Beam = {
    initialX: 0,
    translateX: 0,
    duration: 8,
    repeatDelay: 0,
  };
  type Collision = {
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  };
  export let containerRef: HTMLDivElement;
  export let parentRef: HTMLDivElement;

  let beamRef: HTMLDivElement;
  let collision: Collision = { detected: false, coordinates: null };
  let cycleCollisionDetected = false;
  let beamKey = 0;

  const checkCollision = () => {
    if (beamRef && containerRef && parentRef && !cycleCollisionDetected) {
      let beamRect = beamRef.getBoundingClientRect();
      let containerRect = containerRef.getBoundingClientRect();
      let parentRect = parentRef.getBoundingClientRect();

      if (beamRect.bottom >= containerRect.top) {
        let relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
        let relativeY = beamRect.bottom - parentRect.top;

        collision = {
          detected: true,
          coordinates: { x: relativeX, y: relativeY },
        };
        cycleCollisionDetected = true;
      }
    }
  };
  onMount(() => {
    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  });

  $: if (collision.detected && collision.coordinates) {
    setTimeout(() => {
      collision = { detected: false, coordinates: null };
      cycleCollisionDetected = false;
    }, 2000);
    setTimeout(() => {
      beamKey++;
    }, 2000);
  }
</script>

<Motion
  initial={{
    translateY: beam.initialY || "-200px",
    translateX: beam.initialX || "0px",
    rotate: beam.rotate || 0,
  }}
  animate={{
    translateY: beam.translateY || "1800px",
    translateX: beam.translateX || "0px",
    rotate: beam.rotate || 0,
  }}
  transition={{
    duration: beam.duration || 8,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
    delay: beam.delay || 0,
    repeatDelay: beam.repeatDelay || 0,
  }}
  let:motion
>
  <div
    bind:this={beamRef}
    use:motion
    class={`absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent ${beam.class}`}
  ></div>
</Motion>
{#if collision.detected && collision.coordinates}
  <Explosion
    style="left: {collision.coordinates.x}px; top: {collision.coordinates
      .y}px; transform: translate(-50%, -50%);"
  />
{/if}
