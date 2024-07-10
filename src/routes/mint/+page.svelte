<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import AnimateBeamBiDirectional from "./AnimateBeamBiDirectional.svelte";
  import AnimatedBeamMultipleInput from "./AnimatedBeamMultipleInput.svelte";
  import AnimatedBeamUniDirection from "./AnimatedBeamUniDirection.svelte";
</script>

<div class="absolute top-4 left-4 z-50">
  <Button size="sm" variant="secondary" href="/magic/animated-beam">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-left mt-0.5 mr-1"
      ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
    >
    Back</Button
  >
</div>
<AnimatedBeamUniDirection />
<AnimateBeamBiDirectional />
<AnimatedBeamMultipleInput />
