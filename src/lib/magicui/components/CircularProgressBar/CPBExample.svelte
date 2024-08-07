<script>
  import { onMount } from "svelte";
  import CircularProgressBar from "./CircularProgressBar.svelte";
  import { spring, tweened } from "svelte/motion";
  // try out with spring or tweened to see the difference
  let value = spring(0, {
    stiffness: 0.03,
    damping: 0.9,
  });
  onMount(async () => {
    value.set(20);
    await new Promise((r) => setTimeout(r, 1800));
    value.set(40);
    await new Promise((r) => setTimeout(r, 1600));
    value.set(60);
    await new Promise((r) => setTimeout(r, 1200));
    value.set(80);
    await new Promise((r) => setTimeout(r, 1200));
    value.set(100);
  });
</script>

{#key $value}
  <CircularProgressBar
    max={100}
    min={0}
    value={$value}
    gaugePrimaryColor="rgb(79 70 229)"
    gaugeSecondaryColor="rgba(0, 50, 100, 0.1)"
  />
{/key}
