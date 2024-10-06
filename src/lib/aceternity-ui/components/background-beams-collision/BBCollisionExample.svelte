<script>
  import BackgroundBeamCollision from "./BackgroundBeamCollision.svelte";
</script>

<BackgroundBeamCollision class='md:h-[70vh] rounded-lg'>
  <h2
    class="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight md:px-24 "
  >
    What&apos;s cooler than Beams?{" "}
    <br />
    <div
      class="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
    >
      <div
        class="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"
      >
        <span class="">Exploding beams.</span>
      </div>
      <div
        class="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4"
      >
        <span class="">Exploding beams.</span>
      </div>
    </div>
  </h2>
</BackgroundBeamCollision>
