<script>
  import InteractiveHover from "$lib/magicui/buttons/interactive-hover/InteractiveHover.svelte";
  import RainbowButton from "$lib/magicui/buttons/rainbow/RainbowButton.svelte";
  import RippleButton from "$lib/magicui/buttons/ripple/RippleButton.svelte";
  import ScratchToReveal from "$lib/magicui/components/ScratchToReveal/ScratchToReveal.svelte";
  import AndroidMock from "$lib/magicui/device-mocks/android/AndroidMock.svelte";
  import Iphone15ProMock from "$lib/magicui/device-mocks/iphone-15-pro/Iphone15ProMock.svelte";
  import SafariMock from "$lib/magicui/device-mocks/safari/SafariMock.svelte";
</script>

<div class="flex justify-center items-center mt-20 space-y-10 flex-col mb-32">
  <RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
  <InteractiveHover></InteractiveHover>
  <RainbowButton>
    <span>Click me</span>
  </RainbowButton>
  <div>
    <ScratchToReveal
      width={250}
      height={250}
      minScratchPercentage={70}
      class="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 "
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      onComplete={() => {
        console.log("Scratch complete!");
      }}
    >
      <p class="text-9xl">😎</p>
    </ScratchToReveal>
  </div>

</div>
