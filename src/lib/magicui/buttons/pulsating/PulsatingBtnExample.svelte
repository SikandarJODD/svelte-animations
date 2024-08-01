<script>
  import PulsatingButton from "./PulsatingButton.svelte";
</script>

<div class="flex flex-wrap justify-center items-center gap-10">
  <PulsatingButton />
  <PulsatingButton pulseColor="#00ffff" class="dark:bg-[#00ffff]" />
    <PulsatingButton pulseColor="#eee" class="dark:bg-[#eee]" />
</div>
