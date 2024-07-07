<script>
  import Meteors from "$lib/magicui/SpecialEffects/Meteors/Meteors.svelte";
</script>

<div
  class="relative flex h-fit w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl"
>
  <Meteors number={30} />
  <p
    class="z-10 whitespace-pre-wrap text-center text-5xl tracking-tight font-semibold bg-gradient-to-br from-white to-blue-900/40 text-transparent bg-clip-text"
  >
    Meteors
  </p>
</div>
