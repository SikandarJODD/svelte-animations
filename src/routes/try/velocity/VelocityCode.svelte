<script lang="ts">
  import { spring, tweened } from "svelte/motion";
  import { onMount } from "svelte";

  let scrollY = 0;
  let velocity = 0;
  let baseX = tweened(0, { duration: 0 });
  let smoothVelocity = spring(0, { damping: 50, stiffness: 400 });
  let velocityFactor = tweened(0);

  export let baseVelocity = 100;

  const wrap = (min: number, max: number, value: number) => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  };

  let directionFactor = 1;

  function handleScroll() {
    velocity = scrollY;
    smoothVelocity.set(velocity);
  }

  onMount(() => {
    const updateVelocityFactor = () => {
      smoothVelocity.subscribe(($smoothVelocity) => {
        velocityFactor.set(
          Math.min(Math.max(($smoothVelocity / 1000) * 5, 0), 5)
        );
      });
    };

    window.addEventListener("scroll", () => {
      console.log("scrolling");
      scrollY = window.scrollY;
      handleScroll();
    });

    updateVelocityFactor();

    const updateFrame = () => {
      let moveBy = directionFactor * baseVelocity * (16.67 / 1000); // delta ~ 16.67ms/frame

      velocityFactor.subscribe(($velocityFactor) => {
        if ($velocityFactor < 0) {
          directionFactor = -1;
        } else if ($velocityFactor > 0) {
          directionFactor = 1;
        }
        moveBy += directionFactor * moveBy * $velocityFactor;
      });

      baseX.update((n) => n + moveBy);
      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  
    // $: x = baseX;
</script>

<div class="parallax">
  <div
    class="scroller text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    style="transform: translateX({x}%);"
  >
    <span>
      <slot>Coding is Fun</slot>
    </span>
    <span>
      <slot>Coding is Fun</slot>
    </span>
    <span>
      <slot>Coding is Fun</slot>
    </span>
    <span>
      <slot>Coding is Fun</slot>
    </span>
  </div>
</div>
