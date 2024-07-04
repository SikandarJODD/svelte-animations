<script>
  import Ripple from "../Ripple.svelte";
</script>

<div
  class="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
>
  <p
    class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white"
  >
    Ripple
  </p>
  <Ripple
    MAIN_CIRCLE_SIZE={210}
    NUM_CIRCLES={8}
    MAIN_CIRCLE_OPACITY={0.26}
    HEIGHT={70}
    WIDTH={70}
  />
</div>
