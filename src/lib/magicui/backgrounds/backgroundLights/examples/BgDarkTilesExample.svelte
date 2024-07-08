<script>
  import BgDarkTiles from "../BgDarkTiles.svelte";
</script>

<div
  class="w-full h-full min-h-[300px] relative overflow-hidden flex items-center justify-center [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
>
  <div class="w-fit h-fit relative z-[2]">
    <div class="text-xl md:text-3xl capitalize font-bold">Hello Amazing Svelte Developer </div>
  </div>
  <div class="absolute top-0 left-0 h-full w-full">
    <BgDarkTiles r={20} c={10} />
  </div>
</div>
