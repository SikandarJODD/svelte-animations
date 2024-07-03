<script>
  import ComponentView from "$lib/luxe/components/codeblock/ComponentView.svelte";
  import { Motion } from "svelte-motion";
</script>

<!-- class="h-[380px] flex justify-center items-start" -->

<Motion
  animate={{
    x: [0, 200, 200, 0, 0],
    y: [0, 0, 200, 200, 0],
    backgroundColor: ["#fd3", "#60f", "#fd3"],
  }}
  transition={{ duration: 4, ease: "linear" }}
  let:motion
>
  <div class="w-28 h-28 rounded-xl" use:motion></div>
</Motion>
