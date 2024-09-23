<script>
  import VelocityCode from "./VelocityCode.svelte";
</script>

<div class="flex min-h-[300vh] justify-center items-center">
  <VelocityCode baseVelocity={5}>
    <div class="parallax">
      <div
        class="scroller text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        <p>Scroll me</p>
      </div>
    </div>
  </VelocityCode>
  <VelocityCode baseVelocity={-2}>
    <div class="parallax">
      <div
        class="scroller text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        <p>Scroll me</p>
      </div>
    </div>
  </VelocityCode>
  <VelocityCode>
    <div class="parallax">
      <div
        class="scroller text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        <p>Scroll me</p>
      </div>
    </div>
  </VelocityCode>
</div>
