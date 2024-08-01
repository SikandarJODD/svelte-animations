<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import {
    Motion,
    useMotionValue,
    useSpring,
    useTransform,
    useVelocity,
    useViewportScroll,
  } from "svelte-motion";

  export let text: string = "Hello World";
  export let default_velocity: number = 5;
  export let className: string = "";

  let containerWidth: number;
  let textWidth: number;
  let repetitions: number = 1;

  let wrap = (min: number, max: number, v: number = 0) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  let baseX = useMotionValue(0);
  let { scrollY } = useViewportScroll();
  let scrollVelocity = useVelocity(scrollY);
  let smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  let containerRef: HTMLDivElement;
  let textRef: HTMLSpanElement;

  onMount(() => {
    const calculateRepetitions = () => {
      if (containerRef && textRef) {
        containerWidth = containerRef.offsetWidth;
        textWidth = textRef.offsetWidth;
        repetitions = Math.ceil(containerWidth / textWidth) + 2;
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);

    // let lastScrollY = 0;
    // let lastTime = performance.now();

    // function updateScroll() {
    //   const now = performance.now();
    //   const deltaTime = now - lastTime;
    //   const deltaY = scrollY - lastScrollY;

    //   if (deltaTime > 0) {
    //     scrollVelocity.set((deltaY / deltaTime) * 1000);
    //   }

    //   lastScrollY = scrollY;
    //   lastTime = now;
    //   requestAnimationFrame(updateScroll);
    // }

    // updateScroll();

    let directionFactor = 1;
    let lastTimestamp = 0;

    function animate(timestamp: number) {
      if (lastTimestamp !== 0) {
        let delta = timestamp - lastTimestamp;
        let moveBy = directionFactor * default_velocity * (delta / 200);

        if ($velocityFactor < 0) {
          directionFactor = -1;
        } else if ($velocityFactor > 0) {
          directionFactor = 1;
        }

        moveBy += 1 * moveBy * $velocityFactor;
        baseX.set($baseX + moveBy);
      }

      lastTimestamp = timestamp;
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", calculateRepetitions);
    };
  });

  let x = useTransform(baseX, (v) => `${wrap(-100 / 2, 0, v)}%`);
  $: console.log(x, "x");
</script>

<section class="relative w-full">
  <div
    class="w-full overflow-hidden whitespace-nowrap"
    bind:this={containerRef}
  >
    <Motion
      style={{
        x: x,
      }}
      let:motion
    >
      <div use:motion class="inline-block {className}">
        {#each Array(repetitions) as _, i}
          {#if i === 0}
            <span bind:this={textRef}>
              {text}{" "}
            </span>
          {:else}
            <span>
              {text}{" "}
            </span>
          {/if}
        {/each}
      </div>
    </Motion>
  </div>
  <div class="w-full overflow-hidden whitespace-nowrap">
    <div class="inline-block {className}" style="transform: translateX({-x})">
      {#each Array(repetitions) as _, i}
        <span>
          {text}{" "}
        </span>
      {/each}
    </div>
  </div>
</section>
