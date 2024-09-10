<script>
  import FlickeringGrid from "../FlickeringGrid.svelte";
</script>
<div
  class="relative mx-auto size-[350px] md:size-[450px] rounded-lg  bg-background overflow-hidden border"
>
  <FlickeringGrid
    class="z-0 absolute left-7 top-7 [mask:radial-gradient(circle_at_center,#fff_200px,transparent_0)]"
    squareSize={4}
    gridGap={6}
    color="#60A5FA"
    maxOpacity={0.5}
    flickerChance={0.1}
    height={400}
    width={400}
  />
</div>
