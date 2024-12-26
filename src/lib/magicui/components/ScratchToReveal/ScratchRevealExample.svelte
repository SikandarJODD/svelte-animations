<script>
  import ScratchToReveal from "./ScratchToReveal.svelte";
</script>
<div class='z-10'>
    <ScratchToReveal
      width={250}
      height={250}
      minScratchPercentage={70}
      class="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      onComplete={() => {
        console.log("Scratch complete!");
      }}
    >
      <p class="text-9xl">😎</p>
    </ScratchToReveal>
  </div>