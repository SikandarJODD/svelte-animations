<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";

  export let title = "What is this?";
</script>

<div class="grid grid-cols-1 md:grid-cols-9 gap-6 py-4">
  <div class="col-span-3">
    <h2 class="text-xl sm:text-3xl font-bold">{title}</h2>
  </div>
  <div class="col-span-6">
    <slot></slot>
  </div>
</div>
<Separator />
