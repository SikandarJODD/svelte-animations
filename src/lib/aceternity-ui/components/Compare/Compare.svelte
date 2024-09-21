<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";

  export let firstImage: string = "";
  export let secondImage: string = "";
  let className: string = "";
  export { className as class };
  export let firstImageClass: string = "";
  export let secondImageClass: string = "";
  export let initialSliderPercentage: number = 50;
  export let slideMode: "hover" | "drag" = "hover";
  export let showHandlebar: boolean = true;
  export let autoplay: boolean = false;
  export let autoplayDuration: number = 5000;

  let sliderXPercent = tweened(initialSliderPercentage, { duration: 0 });
  let isDragging = false;
  let isMouseOver = false;
  let sliderRef;
  let autoplayTimeout;

  const startAutoplay = () => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      sliderXPercent.set(percentage);
      autoplayTimeout = setTimeout(animate, 16); // ~60fps
    };

    animate();
  };

  const stopAutoplay = () => {
    if (autoplayTimeout) {
      clearTimeout(autoplayTimeout);
      autoplayTimeout = null;
    }
  };

  onMount(() => {
    startAutoplay();
    return stopAutoplay;
  });

  function mouseEnterHandler() {
    isMouseOver = true;
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    isMouseOver = false;
    if (slideMode === "hover") {
      sliderXPercent.set(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      isDragging = false;
    }
    startAutoplay();
  }

  function handleStart(clientX) {
    if (slideMode === "drag") {
      isDragging = true;
    }
  }

  function handleEnd() {
    if (slideMode === "drag") {
      isDragging = false;
    }
  }

  function handleMove(clientX) {
    if (!sliderRef) return;

    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      const rect = sliderRef.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      sliderXPercent.set(Math.max(0, Math.min(100, percent)));
    }
  }

  function handleMouseDown(e) {
    handleStart(e.clientX);
  }

  function handleMouseUp() {
    handleEnd();
  }

  function handleMouseMove(e) {
    handleMove(e.clientX);
  }

  function handleTouchStart(e) {
    if (!autoplay) {
      handleStart(e.touches[0].clientX);
    }
  }

  function handleTouchEnd() {
    if (!autoplay) {
      handleEnd();
    }
  }

  function handleTouchMove(e) {
    if (!autoplay) {
      handleMove(e.touches[0].clientX);
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  bind:this={sliderRef}
  class="w-[400px] h-[400px] overflow-hidden {className}"
  style="position: relative; cursor: {slideMode === 'drag'
    ? 'grab'
    : 'col-resize'};"
  on:mousemove={handleMouseMove}
  on:mouseleave={mouseLeaveHandler}
  on:mouseenter={mouseEnterHandler}
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
  on:touchmove={handleTouchMove}
>
  <div
    class="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
    style="left: {$sliderXPercent}%; top: 0; z-index: 40;"
  >
    <!-- <div
      class="w-36 h-full absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50"
    />
    <div
      class="w-10 h-1/2 absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100"
    /> -->
    <!-- <div class="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10">
      <Sparkles
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        class="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div> -->
    {#if showHandlebar}
      <div
        class="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 text-black"
          ><circle cx="12" cy="12" r="1" /><circle
            cx="12"
            cy="5"
            r="1"
          /><circle cx="12" cy="19" r="1" /></svg
        >
        <!-- <IconDotsVertical class="h-4 w-4 text-black" /> -->
      </div>
    {/if}
  </div>

  <div class="overflow-hidden w-full h-full relative z-20 pointer-events-none">
    {#if firstImage}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <div
        class="absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden {firstImageClass}"
        style="clip-path: inset(0 {100 - $sliderXPercent}% 0 0);"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          alt="first image"
          src={firstImage}
          class="absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none {firstImageClass}"
          draggable="false"
        />
      </div>
    {/if}
  </div>

  {#if secondImage}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      class="absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none {secondImageClass}"
      alt="second image"
      src={secondImage}
      draggable="false"
    />
  {/if}
</div>

<style>
  /* Add any additional styles or adjust existing ones */
</style>
