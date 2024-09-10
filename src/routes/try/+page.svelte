<script>
  import FlickeringGrid from "$lib/magicui/backgrounds/FlickeringGrid/FlickeringGrid.svelte";
</script>
<div
  class="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border"
>
  <FlickeringGrid
    className="z-0 absolute inset-0 size-full"
    squareSize={4}
    gridGap={6}
    color="#6B7280"
    maxOpacity={0.5}
    flickerChance={0.1}
    height={800}
    width={800}
  />
</div>
