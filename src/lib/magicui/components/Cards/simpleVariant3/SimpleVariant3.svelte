<script>
  import CardBody from "./CardBody.svelte";
  import CardIcon from "./CardIcon.svelte";
</script>

<div>
  <div
    class="border border-dashed border-zinc-400 dark:border-zinc-700 relative dark:bg-[#09090B]"
  >
    <CardIcon class="-top-3 -left-3" />
    <CardIcon class="-top-3 -right-3" />
    <CardIcon class="-bottom-3 -left-3" />
    <CardIcon class="-bottom-3 -right-3" />
    <CardBody class="p-10" />
  </div>
</div>
