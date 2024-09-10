<script>
  // Scroll down to see the original component
  import FlickeringGrid from "../FlickeringGrid.svelte";
</script>

<div
  class="relative h-64 md:h-[400px] rounded-lg w-full md:w-[60%] mx-auto bg-background overflow-hidden border"
>
  <FlickeringGrid
    class="z-0 absolute inset-0 size-full"
    squareSize={4}
    gridGap={6}
    color="#6B7280"
    maxOpacity={0.5}
    flickerChance={0.1}
    width={630}
    height={400}
  />
</div>
